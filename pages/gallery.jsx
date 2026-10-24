import Head from "next/head";
import Link from "next/link";

const galleries = [
  {
    title: "I. Baituna Al-Talhami (Our Bethlehemite Home)",
    arabicTitle: "متحف بيتنا التلحمي",
    description:
      "As one of Bethlehem's few remaining authentic historic homes, this space materializes late 19th and early 20th-century Palestinian architecture. The museum's spatial layout preserves indigenous domestic knowledge across three levels: Al-Rawiya (الراوية) (lower floor), a historic kitchen and culinary space, and the upper rooms.",
    photos: ["/images/baituna-1.jpg", "/images/baituna-2.jpg", "/images/baituna-3.jpg"],
  },
  {
    title: "II. The Arab Women's Union of Bethlehem",
    description:
      "Established in 1947 by local women leaders, the Arab Women's Union of Bethlehem spearheads today socio-economic initiatives and income-generating projects that provide a labor infrastructure for local and neighboring communities.",
    photos: ["/images/awu-1.jpg", "/images/awu-2.jpg", "/images/awu-3.jpg"],
  },
];

export default function Gallery() {
  return (
    <>
      <Head>
        <title>Photography | The Living Archive</title>
      </Head>

      <div className="text-xl flex min-h-screen flex-col bg-black text-white">
        <section className="container mx-auto px-12 py-16">
          <Link href="/bethlehem" className="text-[#4A6B8A] hover:text-[#5F84A6] mb-8 inline-block">
            ← Back to Bethlehem's Cultural Memory
          </Link>

          <h1 className="text-white text-4xl font-bold mb-4">Photography</h1>
          <p className="text-[#A3A3A3] text-xl max-w-3xl mb-16">
            Documenting cultural artifacts, spaces, and social projects. Photography by Elias Halabi.
          </p>

          {galleries.map((gallery) => (
            <div key={gallery.title} className="mb-20">
              <h2 className="text-white text-3xl font-bold mb-2">{gallery.title}</h2>
              {gallery.arabicTitle && (
                <p className="text-[#4A6B8A] mb-4" dir="rtl">{gallery.arabicTitle}</p>
              )}
              {gallery.description && (
                <p className="text-[#A3A3A3] text-xl max-w-3xl mb-8">{gallery.description}</p>
              )}

              <div className="grid md:grid-cols-3 gap-4">
                {gallery.photos.map((src, i) => (
                  <div key={i} className="aspect-video w-full overflow-hidden rounded-lg bg-[#222]">
                    <img src={src} alt="" className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </section>
      </div>
    </>
  );
}