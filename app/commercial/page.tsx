import Image from "next/image"

export default function CommercialPage() {
  // Sample commercial photography data
  const commercialProjects = [
    {
      id: 1,
      title: "Brand Campaign",
      client: "Fashion Brand",
      description: "A minimalist campaign highlighting the brand's new collection.",
      imageSrc: "/placeholder.svg?height=600&width=800",
    },
    {
      id: 2,
      title: "Product Photography",
      client: "Tech Company",
      description: "Clean, detailed product shots for an upcoming tech release.",
      imageSrc: "/placeholder.svg?height=600&width=800",
    },
    {
      id: 3,
      title: "Corporate Portraits",
      client: "Financial Services",
      description: "Professional portraits for the executive team.",
      imageSrc: "/placeholder.svg?height=600&width=800",
    },
  ]

  return (
    <div className="py-8">
      <h1 className="text-4xl font-light tracking-tight mb-6 text-center">Commercial Work</h1>
      <p className="text-lg text-gray-600 max-w-3xl mx-auto text-center mb-12">
        A selection of my professional photography work for brands and businesses. Each project is approached with
        attention to detail and a focus on the client's vision.
      </p>

      <div className="space-y-24 max-w-5xl mx-auto">
        {commercialProjects.map((project) => (
          <div key={project.id} className="flex flex-col md:flex-row gap-8 items-center">
            <div className="w-full md:w-1/2">
              <div className="relative aspect-[4/3] overflow-hidden rounded-md shadow-md">
                <Image
                  src={project.imageSrc || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
            <div className="w-full md:w-1/2 space-y-4">
              <h2 className="text-2xl font-light">{project.title}</h2>
              <p className="text-sm text-gray-500">Client: {project.client}</p>
              <p className="text-gray-700">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
