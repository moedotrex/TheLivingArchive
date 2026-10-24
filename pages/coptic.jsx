import Head from "next/head";
import Link from "next/link";

export default function Coptic() {
  return (
    <>
      <Head>
        <title>Coptic Cultural Memory | The Living Archive</title>
      </Head>

      <div className="text-xl flex min-h-screen flex-col bg-black text-white">
        <section className="container mx-auto px-12 py-16">
          <Link href="/" className="text-[#4A6B8A] hover:text-[#5F84A6] mb-8 inline-block">
            ← Back to Home
          </Link>

          <h1 className="text-white text-4xl font-bold mb-8">Coptic Cultural Memory</h1>

          <div className="grid md:grid-cols-2 gap-8">
            <Link href="/coptic-gallery" className="block group">
              <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-[#222]">
                <img
                  src="/images/IMG_0126.jpg"
                  alt="Coptic Cairo Gallery"
                  className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
                />
                <h3 className="absolute top-0 left-0 p-5 text-white text-2xl font-bold drop-shadow-lg">
                  Coptic Cairo Gallery
                </h3>
              </div>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}