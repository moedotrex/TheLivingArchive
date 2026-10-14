'use client'

import { useState } from 'react'

export default function Layout2() {
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

  const [expandedId, setExpandedId] = useState(null);

  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      <div className="flex flex-col md:flex-row flex-1">
        {/* Left: Projects */}
        <div className="md:w-1/2 px-12 py-16 flex flex-col justify-center">
          <h1 className="text-white text-5xl font-bold mb-4">
            The Living Archive
          </h1>
          
          <p className="text-white text-lg mb-16">
            Explores how indigenous women across Arab countries witness history, respond to it, and materialize their heritage.
          </p>

          <div className="space-y-6">
            {projects.map((project) => (
              <div
                key={project.id}
                className={`bg-black border-2 border-white/20 rounded-lg p-6 cursor-pointer transition-all duration-300 ${
                  expandedId === project.id ? 'md:min-h-96 border-blue-500' : 'md:hover:border-blue-500'
                }`}
                onClick={() => setExpandedId(expandedId === project.id ? null : project.id)}
              >
                <h3 className="text-white text-xl font-bold mb-3">
                  {project.title}
                </h3>
                
                {expandedId === project.id && (
                  <div className="mt-4 space-y-4">
                    <img 
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 rounded-lg object-cover"
                    />
                    <p className="text-white/80">
                      {project.description}
                    </p>
                    <a 
                      href="#"
                      className="inline-block px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition"
                    >
                      Learn More →
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Right: Large Background Image */}
        <div 
          className="md:w-1/2 h-96 md:h-auto bg-cover bg-center"
          style={{
            backgroundImage: 'url(/images/photo1.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
      </div>
    </div>
  )
}