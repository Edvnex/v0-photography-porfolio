"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Lightbox } from "./lightbox"

interface Photo {
  id: string
  src: string
  alt: string
  width: number
  height: number
  category?: string
}

export default function MasonryGrid({ photos }: { photos: Photo[] }) {
  const [columns, setColumns] = useState(3)
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  // Update columns based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setColumns(2)
      } else {
        setColumns(3)
      }
    }

    handleResize() // Initial check
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // Distribute photos into columns
  const photoColumns = Array.from({ length: columns }, () => [] as Photo[])

  // Calculate column heights to place each new photo in the shortest column
  const columnHeights = Array(columns).fill(0)

  photos.forEach((photo) => {
    // Find the shortest column
    const shortestColumnIndex = columnHeights.indexOf(Math.min(...columnHeights))

    // Add photo to the shortest column
    photoColumns[shortestColumnIndex].push(photo)

    // Update the column height based on aspect ratio
    const aspectRatio = photo.width / photo.height
    const photoHeight = 1 / aspectRatio // Normalized height
    columnHeights[shortestColumnIndex] += photoHeight
  })

  // Open lightbox with the clicked image
  const openLightbox = (index: number) => {
    setCurrentImageIndex(index)
    setLightboxOpen(true)
  }

  // Find the overall index of a photo based on its column and position
  const getPhotoIndex = (columnIndex: number, photoIndex: number) => {
    let index = 0
    for (let i = 0; i < columnIndex; i++) {
      index += photoColumns[i].length
    }
    return index + photoIndex
  }

  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 md:gap-4">
        {photoColumns.map((column, columnIndex) => (
          <div key={columnIndex} className="flex flex-col gap-3 md:gap-4">
            {column.map((photo, photoIndex) => (
              <div
                key={photo.id}
                className="relative overflow-hidden rounded-md shadow-sm transition-all duration-300 hover:shadow-md hover:brightness-105 cursor-zoom-in"
                onClick={() => openLightbox(getPhotoIndex(columnIndex, photoIndex))}
              >
                <Image
                  src={photo.src || "/placeholder.svg"}
                  alt={photo.alt}
                  width={photo.width}
                  height={photo.height}
                  className="w-full h-auto"
                  sizes={`(max-width: 640px) 50vw, 33vw`}
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Lightbox for fullscreen viewing */}
      {lightboxOpen && (
        <Lightbox
          images={photos}
          currentIndex={currentImageIndex}
          onClose={() => setLightboxOpen(false)}
          onNavigate={setCurrentImageIndex}
        />
      )}
    </>
  )
}
