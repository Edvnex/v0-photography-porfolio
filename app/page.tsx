import Image from "next/image"
import Link from "next/link"
import ImageFilmstrip from "@/components/image-filmstrip"

// Featured images for the filmstrip
const featuredImages = [
  {
    src: "/images/portrait-man.jpeg",
    alt: "Portrait of a man with a red cap smiling",
  },
  {
    src: "/images/black-cat.png",
    alt: "Black cat in profile with sunlight",
  },
  {
    src: "/images/boat-ocean.jpeg",
    alt: "Fishing boat on calm blue water",
  },
  {
    src: "/images/surfer-sunset.jpeg",
    alt: "Silhouette of a person with a surfboard at sunset",
  },
  {
    src: "/images/ocean-mountains.jpeg",
    alt: "Seascape with mountains and water motion",
  },
  {
    src: "/images/cat-rock.jpeg",
    alt: "Cat hiding behind a rock",
  },
  {
    src: "/images/cat-peeking.jpeg",
    alt: "Cat peeking over a rock",
  },
  {
    src: "/images/kittens.png",
    alt: "Two orange kittens looking at the camera",
  },
  {
    src: "/images/kitten-grass.png",
    alt: "Kitten sitting on grass",
  },
  {
    src: "/images/cat-foliage.jpeg",
    alt: "Cat walking into foliage",
  },
  {
    src: "/images/train-conductor.jpeg",
    alt: "Train conductor seen through a window",
  },
  {
    src: "/images/boy-bicycle.jpeg",
    alt: "Boy riding a bicycle on grass",
  },
]

export default function AboutPage() {
  return (
    <div className="space-y-24">
      {/* About Me Section */}
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12 py-12">
        <div className="w-full md:w-1/2 space-y-6">
          <h1 className="text-4xl font-light tracking-tight">About Me</h1>
          <p className="text-lg text-gray-700 leading-relaxed">
            I am a photographer who love nasi padang and ayam geprek.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed"></p>
          <p className="text-lg text-gray-700 leading-relaxed"></p>
        </div>
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="rounded-full overflow-hidden w-64 h-64 md:w-80 md:h-80 border-8 border-gray-100 shadow-lg">
            <Image
              src="/profile-image.png"
              alt="Photographer portrait"
              width={400}
              height={400}
              className="object-cover w-full h-full"
              priority
            />
          </div>
        </div>
      </div>

      {/* Films 2 by Draneyes Section */}
      <div className="flex flex-col md:flex-row items-center gap-12 py-12">
        <div className="w-full md:w-1/2 space-y-6 flex flex-col justify-center">
          <h2 className="text-3xl font-light tracking-tight">Films 2 by Draneyes</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Your gallery looked completely different from one another? Every purchase of Films 2 by Draneyes includes a
            free one-month live color grading class to help you edit with a more consistent style, correct skin tone,
            and a fast edit workflow.
          </p>
          <div>
            <Link
              href="#"
              className="inline-flex items-center px-6 py-3 border border-gray-300 rounded-md text-base font-medium text-gray-700 bg-white hover:bg-gray-50 transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>
        <div className="w-full md:w-1/2 aspect-square">
          <div className="relative w-full h-full overflow-hidden rounded-md shadow-lg">
            <Image
              src="/placeholder.svg?height=600&width=600"
              alt="Films 2 by Draneyes"
              width={600}
              height={600}
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>

      {/* Featured Work Section */}
      <div className="py-12">
        <h2 className="text-3xl font-light tracking-tight text-center mb-10">Featured Work</h2>
        <ImageFilmstrip images={featuredImages} />
        <div className="text-center mt-8">
          <Link
            href="/photography"
            className="inline-flex items-center px-6 py-3 border border-gray-300 rounded-md text-base font-medium text-gray-700 bg-white hover:bg-gray-50 transition-colors"
          >
            View All Photography
          </Link>
        </div>
      </div>
    </div>
  )
}
