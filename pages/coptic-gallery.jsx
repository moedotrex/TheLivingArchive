import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

const photos = [
  "/images/coptic-1.jpg",
  "/images/coptic-2.jpg",
  "/images/coptic-3.jpg",
  "/images/coptic-4.jpg",
  "/images/coptic-5.jpg",
  "/images/coptic-6.jpg",
];

export default function CopticGallery() {
  return (
    <>
      <Head>
        <title>Coptic Cairo Gallery | The Living Archive</title>
      </Head>

      <div className="text-xl flex min-h-screen flex-col bg-black text-white">
        <section className="container mx-auto px-12 py-16">
          <Link href="/coptic" className="text-[#4A6B8A] hover:text-[#5F84A6] mb-8 inline-block">
            ← Back to Coptic Cultural Memory
          </Link>

          <h1 className="text-white text-4xl font-bold mb-4">Coptic Cairo Gallery</h1>
          <p className="text-[#A3A3A3] text-xl max-w-3xl mb-12">
            Illuminating acts of preservation of Coptic tangible and intangible heritage.
          </p>

          <div className="grid md:grid-cols-3 gap-4">
            {photos.map((src, i) => (
              <div key={i} className="relative aspect-video w-full overflow-hidden rounded-lg bg-[#222]">
                <Image
                  src={src}
                  alt=""
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}