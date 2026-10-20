import Link from "next/link";

export default function Home() {
  const projects = [
    {
      id: "bethlehem",
      title: "Bethlehem's Cultural Memory",
      description:
        "Foregrounding Bethlemite indigenous knowledge of tangible and intangible heritage as a site of cultural memory and an enduring infrastructure of communal economic sumūd (steadfastness).",
      image: "/images/HelenPortrait-Museum-24.jpg",
      href: "/bethlehem",
    },
    {
      id: "coptic",
      title: "Coptic Cultural Memory",
      description: "Description coming soon.",
      image: "/images/IMG_0126.jpg",
      href: "/coptic",
    },
  ];

  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      {/* Title and Description */}
      <div className="container mx-auto px-12 py-16">
        <h1 className="text-white text-5xl font-bold mb-4">
          The Living Archive Open Access
        </h1>
        <p className="text-white text-lg max-w-3xl">
          The Living Archive explores how indigenous women across Arab countries witness history, respond to it, and materialize their heritage. This project conceptualizes cultural memory as an embodied, dynamic practice and a living testament to what continues to be.
        </p>
      </div>

      {/* Hero Image */}
      <div
        className="w-full h-96 bg-cover bg-center"
        style={{
          backgroundImage: "url(/images/HelenPortrait-Museum-14.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Collections */}
      <div className="container mx-auto px-12 py-16">
        <h2 className="text-white text-3xl font-bold mb-12">Collections</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="relative h-80 rounded-lg overflow-hidden group"
              style={{
                backgroundImage: `url(${project.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition"></div>

              <div className="relative h-full flex flex-col justify-end p-8 z-10">
                <h3 className="text-white text-2xl font-bold mb-3">
                  {project.title}
                </h3>
                <p className="text-white/90 text-sm mb-6">
                  {project.description}
                </p>
                <Link
                  href={project.href}
                  className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition w-fit"
                >
                  Learn More →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Nevine Abraham Bio */}
      <section className="container mx-auto px-12 py-16 border-t border-[#333]">
        <h2 className="text-white text-3xl font-bold mb-6">Nevine Abraham</h2>
        <p className="text-white/80 text-lg max-w-3xl leading-relaxed mb-6">
          Nevine Abraham is Associate Teaching Professor of Arabic Studies in the Department of Languages, Cultures, and Applied Linguistics at Carnegie Mellon University. Her scholarship focuses on the intersection of literary-cultural studies, indigeneity, minoritization, and food studies in Arab countries. She examines how historical and political forces, from imperialism to post-independence nationalism, shape marginalization across the Middle East and North Africa. She weaves these themes into the classroom to help students understand the complexities of power, identity, and representation, to cultivate their intercultural competence.
        </p>
        <a
          href="https://sites.google.com/view/nevineabraham/about"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:text-blue-300 underline"
        >
          To learn more about Dr. Abraham, click here →
        </a>
      </section>
    </div>
  );
}