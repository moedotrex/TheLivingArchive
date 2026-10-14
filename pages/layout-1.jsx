export default function Layout1() {
  const projects = [
    {
      id: 1,
      title: "Bethlehem's Cultural Memory",
      description: "Exploring how women preserve and transmit cultural heritage",
      image: "/images/photo1.png"
    },
    {
      id: 2,
      title: "Coptic Women",
      description: "Stories and archives of women in Coptic communities",
      image: "/images/photo2.png"
    }
  ];

  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      {/* Title and Description Section */}
      <div className="container mx-auto px-12 py-16">
        <h1 className="text-white text-5xl font-bold mb-4">
          The Living Archive
        </h1>
        
        <p className="text-white text-lg max-w-3xl">
          Explores how indigenous women across Arab countries witness history, respond to it, and materialize their heritage.
        </p>
      </div>

      {/* Hero Image */}
      <div 
        className="w-full h-96 bg-cover bg-center"
        style={{
          backgroundImage: 'url(/images/photo1.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />

      {/* Projects Section */}
      <div className="container mx-auto px-12 py-16">
        <h2 className="text-white text-3xl font-bold mb-12">
          Collections
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id}
              className="relative h-80 rounded-lg overflow-hidden group"
              style={{
                backgroundImage: `url(${project.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              {/* Dark overlay */}
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition"></div>

              {/* Content */}
              <div className="relative h-full flex flex-col justify-end p-8 z-10">
                <h3 className="text-white text-2xl font-bold mb-3">
                  {project.title}
                </h3>
                <p className="text-white/90 text-sm mb-6">
                  {project.description}
                </p>
                <a 
                  href="#"
                  className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition w-fit"
                >
                  Learn More →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}