"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { X, ChevronLeft, ChevronRight } from "lucide-react"

interface LightboxProps {
  images: {
    src: string
    alt: string
    width: number
    height: number
  }[]
  currentIndex: number
  onClose: () => void
  onNavigate: (index: number) => void
}

export function Lightbox({ images, currentIndex, onClose, onNavigate }: LightboxProps) {
  const [isLoading, setIsLoading] = useState(true)

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose()
      } else if (e.key === "ArrowLeft") {
        onNavigate(currentIndex === 0 ? images.length - 1 : currentIndex - 1)
      } else if (e.key === "ArrowRight") {
        onNavigate(currentIndex === images.length - 1 ? 0 : currentIndex + 1)
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [currentIndex, images.length, onClose, onNavigate])

  // Prevent scrolling when lightbox is open
  useEffect(() => {
    document.body.style.overflow = "hidden"
    return () => {
      document.body.style.overflow = "auto"
    }
  }, [])

  const currentImage = images[currentIndex]

  return (
    <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center">
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-50 p-2 bg-black/50 rounded-full text-white hover:bg-black/70 transition-colors"
        aria-label="Close lightbox"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Navigation buttons */}
      <button
        onClick={() => onNavigate(currentIndex === 0 ? images.length - 1 : currentIndex - 1)}
        className="absolute left-4 z-50 p-2 bg-black/50 rounded-full text-white hover:bg-black/70 transition-colors"
        aria-label="Previous image"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={() => onNavigate(currentIndex === images.length - 1 ? 0 : currentIndex + 1)}
        className="absolute right-4 z-50 p-2 bg-black/50 rounded-full text-white hover:bg-black/70 transition-colors"
        aria-label="Next image"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Image container */}
      <div className="relative w-full h-full flex items-center justify-center p-4 md:p-8">
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-8 h-8 border-4 border-white/30 border-t-white rounded-full animate-spin"></div>
          </div>
        )}
        <div
          className={`relative max-w-full max-h-full transition-opacity duration-300 ${
            isLoading ? "opacity-0" : "opacity-100"
          }`}
        >
          <Image
            src={currentImage.src || "/placeholder.svg"}
            alt={currentImage.alt}
            width={currentImage.width}
            height={currentImage.height}
            className="max-h-[90vh] w-auto object-contain"
            onLoad={() => setIsLoading(false)}
            priority
          />
          <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-2 text-center text-sm">
            {currentImage.alt}
          </div>
        </div>
      </div>

      {/* Image counter */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-sm">
        {currentIndex + 1} / {images.length}
      </div>
    </div>
  )
}
