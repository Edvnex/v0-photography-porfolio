import MasonryGrid from "@/components/masonry-grid"

// Street photography photos with their natural dimensions
const streetPhotos = [
  {
    id: "1",
    src: "/images/portrait-man.jpeg",
    alt: "Portrait of a man with a red cap smiling",
    width: 1080,
    height: 1080,
  },
  {
    id: "2",
    src: "/images/boy-bicycle.jpeg",
    alt: "Boy riding a bicycle on grass",
    width: 1080,
    height: 1350, // Taller aspect ratio
  },
  {
    id: "3",
    src: "/images/train-conductor.jpeg",
    alt: "Train conductor seen through a window",
    width: 1080,
    height: 1080,
  },
  {
    id: "4",
    src: "/images/surfer-sunset.jpeg",
    alt: "Silhouette of a person with a surfboard at sunset",
    width: 1080,
    height: 1200, // Slightly taller
  },
  {
    id: "5",
    src: "/images/boat-ocean.jpeg",
    alt: "Fishing boat on calm blue water",
    width: 1200,
    height: 800, // Wider aspect ratio
  },
  {
    id: "6",
    src: "/images/ocean-mountains.jpeg",
    alt: "Seascape with mountains and water motion",
    width: 1080,
    height: 1080,
  },
]

export default function StreetPhotographyPage() {
  return (
    <div className="py-8">
      <h1 className="text-4xl font-light tracking-tight mb-6 text-center">Street Photography</h1>
      <p className="text-lg text-gray-600 max-w-3xl mx-auto text-center mb-12">
        Candid moments capturing the essence of everyday life, human interactions, and urban landscapes.
      </p>
      <MasonryGrid photos={streetPhotos} />
    </div>
  )
}
