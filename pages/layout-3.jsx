export default function Layout3() {
  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      <main className="container mx-auto px-12 py-16 max-w-3xl">
        {/* Title and Description */}
        <h1 className="text-white text-5xl font-bold mb-8">
          The Living Archive
        </h1>
        
        <p className="text-white text-lg leading-relaxed mb-8">
          Explores how indigenous women across Arab countries witness history, respond to it, and materialize their heritage. This project conceptualizes cultural memory as an embodied, dynamic practice, a living testament to what continues to be.
        </p>

        {/* Primary Photo */}
        <div className="my-12">
          <img 
            src="/images/photo1.jpg"
            alt="Bethlehem Cultural Memory"
            className="w-full h-auto rounded-lg"
          />
        </div>

        {/* Documentary Link */}
        <a 
          href="https://www.youtube.com/watch?v=VD359mTG6BA"
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition text-center mb-12"
        >
          Watch Documentary (with English subtitles)
        </a>

        {/* Content Description */}
        <h2 className="text-white text-2xl font-bold mb-6">
          Bethlehem's Cultural Memory
        </h2>

        <p className="text-white text-lg leading-relaxed mb-8">
          Through video, photography, essays, and archival documents, we trace how women remember, preserve, and transmit cultural knowledge across generations in Bethlehem.
        </p>

        {/* Content Grid */}
        <h3 className="text-white text-xl font-bold mb-6">
          Project Materials
        </h3>

        <div className="space-y-6 mb-12">
          <div className="bg-[#181818] p-6 rounded-lg border border-[#333]">
            <h4 className="text-white text-lg font-bold mb-2">Documentary</h4>
            <p className="text-white">Available with English subtitles and Arabic version for learners</p>
          </div>

          <div className="bg-[#181818] p-6 rounded-lg border border-[#333]">
            <h4 className="text-white text-lg font-bold mb-2">Essay</h4>
            <p className="text-white">Comprehensive written analysis of the project and its findings</p>
          </div>

          <div className="bg-[#181818] p-6 rounded-lg border border-[#333]">
            <h4 className="text-white text-lg font-bold mb-2">Photography</h4>
            <p className="text-white">Professional photographs documenting cultural artifacts and spaces</p>
          </div>
        </div>

        {/* Additional Photos */}
        <h3 className="text-white text-xl font-bold mb-8">
          Gallery
        </h3>
        
        <div className="grid md:grid-cols-2 gap-6">
          <img 
            src="/images/photo2.png"
            alt="Old kitchen tools"
            className="w-full h-auto rounded-lg"
          />
          <img 
            src="/images/photo3.jpg"
            alt="Cultural artifact"
            className="w-full h-auto rounded-lg"
          />
        </div>
      </main>
    </div>
  )
}