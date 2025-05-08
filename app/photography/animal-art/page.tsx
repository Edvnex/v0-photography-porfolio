import MasonryGrid from "@/components/masonry-grid"

// Animal photos with their natural dimensions
const animalPhotos = [
  {
    id: "1",
    src: "/images/cat-rock.jpeg",
    alt: "Cat hiding behind a rock",
    width: 1080,
    height: 1080,
  },
  {
    id: "2",
    src: "/images/dog-walk.jpeg",
    alt: "Dog on a leash with owner in background",
    width: 1200,
    height: 800,
  },
  {
    id: "3",
    src: "/images/cat-peeking.jpeg",
    alt: "Cat peeking over a rock",
    width: 1080,
    height: 1350, // Taller aspect ratio
  },
  {
    id: "4",
    src: "/images/orange-cat.jpeg",
    alt: "Orange and white cat lying in sunlight",
    width: 1200,
    height: 800,
  },
  {
    id: "5",
    src: "/images/kittens.png",
    alt: "Two orange kittens looking at the camera",
    width: 1080,
    height: 1080,
  },
  {
    id: "6",
    src: "/images/motion-dog.jpeg",
    alt: "Motion blur of dog running",
    width: 1200,
    height: 800,
  },
  {
    id: "7",
    src: "/images/black-cat.png",
    alt: "Black cat in profile with sunlight",
    width: 1080,
    height: 1080,
  },
  {
    id: "8",
    src: "/images/bw-cat.jpeg",
    alt: "Black and white portrait of a cat",
    width: 1080,
    height: 1350,
  },
  {
    id: "9",
    src: "/images/kitten-grass.png",
    alt: "Kitten sitting on grass",
    width: 1080,
    height: 1200, // Slightly taller
  },
  {
    id: "10",
    src: "/images/cat-foliage.jpeg",
    alt: "Cat walking into foliage",
    width: 1080,
    height: 1350, // Taller aspect ratio
  },
]

export default function AnimalArtPage() {
  return (
    <div className="py-8">
      <h1 className="text-4xl font-light tracking-tight mb-6 text-center">Animal Art</h1>
      <p className="text-lg text-gray-600 max-w-3xl mx-auto text-center mb-12">
        A collection of intimate portraits capturing the beauty, personality, and spirit of animals in their natural
        environments.
      </p>
      <MasonryGrid photos={animalPhotos} />
    </div>
  )
}
