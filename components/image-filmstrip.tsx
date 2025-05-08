"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface FilmstripProps {
  images: {
    src: string
    alt: string
  }[]
}

export default function ImageFilmstrip({ images }: FilmstripProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [showLeftArrow, setShowLeftArrow] = useState(false)
  const [showRightArrow, setShowRightArrow] = useState(true)

  // Check if arrows should be visible based on scroll position
  const checkScrollPosition = () => {
    if (!scrollContainerRef.current) return

    const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current
    setShowLeftArrow(scrollLeft > 0)
    setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10) // 10px buffer
  }

  // Scroll left or right by a set amount
  const scroll = (direction: "left" | "right") => {
    if (!scrollContainerRef.current) return

    const scrollAmount = scrollContainerRef.current.clientWidth * 0.8 // Scroll by 80% of visible width
    const newScrollPosition =
      direction === "left"
        ? scrollContainerRef.current.scrollLeft - scrollAmount
        : scrollContainerRef.current.scrollLeft + scrollAmount

    scrollContainerRef.current.scrollTo({
      left: newScrollPosition,
      behavior: "smooth",
    })
  }

  // Initialize and handle resize
  useEffect(() => {
    checkScrollPosition()

    // Check scroll position on resize
    const handleResize = () => {
      checkScrollPosition()
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  if (images.length === 0) {
    return null
  }

  return (
    <div className="relative w-full max-w-full mx-auto">
      {/* Left arrow */}
      {showLeftArrow && (
        <button
          onClick={() => scroll("left")}
          className="absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-white rounded-full p-2 shadow-md transition-colors"
          aria-label="Scroll left"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
      )}

      {/* Filmstrip container */}
      <div
        ref={scrollContainerRef}
        className="flex overflow-x-auto scrollbar-hide gap-4 py-2 px-4"
        onScroll={checkScrollPosition}
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-[calc(20%-16px)] min-w-[180px] max-w-[240px] transition-transform duration-300 hover:scale-[1.02]"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-md shadow-sm">
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 33vw, 20vw"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Right arrow */}
      {showRightArrow && (
        <button
          onClick={() => scroll("right")}
          className="absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-white rounded-full p-2 shadow-md transition-colors"
          aria-label="Scroll right"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      )}
    </div>
  )
}
