import Head from "next/head";
import Link from "next/link";

const projects = [
  {
    id: "bethlehem",
    title: "Bethlehem's Cultural Memory",
    image: "/images/HelenPortrait-Museum-24.jpg",
    href: "/bethlehem",
  },
  {
    id: "coptic",
    title: "Coptic Cultural Memory",
    image: "/images/IMG_0126.jpg",
    href: "/coptic",
  },
];

// Whole photo is clickable; title sits in the top-left corner
function Tile({ href, image, title }) {
  return (
    <Link href={href} className="block group">
      <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-[#222]">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
        />
        <h3 className="absolute top-0 left-0 p-5 text-white text-xl font-bold drop-shadow-lg drop-shadow-black">
          {title}
        </h3>
      </div>
    </Link>
  );
}

export default function Home() {
  return (
    <>
      <Head>
        <title>The Living Archive</title>
      </Head>

      <div className="flex min-h-screen flex-col bg-black text-white">
                {/* Title and Description */}
        <div className="container mx-auto px-12 py-16">
          <h1 className="text-white text-5xl font-bold mb-4">The Living Archive</h1>
          <p className="text-[#A3A3A3] text-xl max-w-3xl">
            The Living Archive explores how indigenous women across Arab countries witness history, respond to it, and materialize their heritage. This project conceptualizes cultural memory as an embodied, dynamic practice and a living testament to what continues to be.
          </p>
          <p className="text-[#A3A3A3] mt-6">
            Photography by{" "}
            <a
              href="https://www.eliashalabi.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#4A6B8A] hover:text-[#5F84A6] underline"
            >
              Elias Halabi
            </a>
          </p>
        </div>

        {/* Hero Image */}
        <div
          className="w-full h-110 bg-cover"
          style={{
            backgroundImage: "url(/images/HelenPortrait-Museum-14.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "50% 40%",
          }}
        />

        {/* Collections */}
        <div className="container mx-auto px-12 py-16">
          <h2 className="text-white text-3xl font-bold mb-12">Collections</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <Tile
                key={project.id}
                href={project.href}
                image={project.image}
                title={project.title}
              />
            ))}
          </div>
        </div>

        {/* Meet the author */}
        <section className="container mx-auto px-12 py-16 border-t border-[#333]">
          <h2 className="text-white text-3xl font-bold text-center mb-12">
            Meet the author
          </h2>

          <div className="max-w-4xl mx-auto bg-[#181818] rounded-xl p-8 flex flex-col md:flex-row gap-8 items-center">
            <img
              src="/images/nevine.jpg"
              alt="Nevine Abraham"
              className="w-48 md:w-56 h-auto rounded-lg flex-shrink-0"
            />

            <div>
              <h3 className="text-white text-2xl font-bold mb-4">Nevine Abraham</h3>
              <p className="text-xl text-[#A3A3A3] leading-relaxed mb-6">
                Nevine Abraham is Associate Teaching Professor of Arabic Studies in the Department of Languages, Cultures, and Applied Linguistics at Carnegie Mellon University. Her scholarship focuses on the intersection of literary-cultural studies, indigeneity, minoritization, and food studies in Arab countries. She examines how historical and political forces, from imperialism to post-independence nationalism, shape marginalization across the Middle East and North Africa. She weaves these themes into the classroom to help students understand the complexities of power, identity, and representation, to cultivate their intercultural competence.
              </p>
              <a
                href="https://sites.google.com/view/nevineabraham/about"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#4A6B8A] hover:text-[#5F84A6] underline text-xl"
              >
                To learn more about Dr. Abraham, click here →
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}