import Link from "next/link"
import Image from "next/image"

export default function PhotographyPage() {
  return (
    <div className="py-8">
      <h1 className="text-4xl font-light tracking-tight mb-12 text-center">Photography</h1>

      <div className="flex flex-col md:flex-row gap-6">
        {/* Animal Art Category */}
        <Link
          href="/photography/animal-art"
          className="w-full md:w-1/2 group relative transition-transform duration-300 hover:scale-[1.02]"
        >
          <div className="relative aspect-[4/5] overflow-hidden rounded-md shadow-md">
            <Image
              src="/images/black-cat.png"
              alt="Animal Art"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-80"></div>
            <div className="absolute bottom-0 left-0 w-full p-6 text-white">
              <h2 className="text-2xl font-light tracking-wide mb-2">Animal Art</h2>
              <p className="text-sm text-white/80">Explore the beauty and character of animals through my lens</p>
            </div>
          </div>
        </Link>

        {/* Street Photography Category */}
        <Link
          href="/photography/street-photography"
          className="w-full md:w-1/2 group relative transition-transform duration-300 hover:scale-[1.02]"
        >
          <div className="relative aspect-[4/5] overflow-hidden rounded-md shadow-md">
            <Image
              src="/images/portrait-man.jpeg"
              alt="Street Photography"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-80"></div>
            <div className="absolute bottom-0 left-0 w-full p-6 text-white">
              <h2 className="text-2xl font-light tracking-wide mb-2">Street Photography</h2>
              <p className="text-sm text-white/80">Capturing authentic moments and stories from everyday life</p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  )
}
