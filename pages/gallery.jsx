import Head from "next/head";
import Link from "next/link";
import { useState, useEffect } from "react";

// Filenames from your public/images folder
const baituna = Array.from({ length: 16 }, (_, i) => `/images/baituna${i + 1}.jpg`);
const awu = Array.from({ length: 23 }, (_, i) => `/images/AWU${i + 1}.jpg`);

const galleries = [
  {
    title: "I. Baituna Al-Talhami (Our Bethlehemite Home)",
    arabicTitle: "متحف بيتنا التلحمي",
    description:
      "As one of Bethlehem's few remaining authentic historic homes, this space materializes late 19th and early 20th-century Palestinian architecture. The museum's spatial layout preserves indigenous domestic knowledge across three levels: Al-Rawiya (الراوية) (lower floor), a historic kitchen and culinary tools, and Al-Illiyeh (العلية) upper floor. Today, the ethnographic museum houses early 20th-century photographs, curated cultural artifacts, furniture, traditional clothing, and a vibrant embroidery shop.",
    photos: baituna,
  },
  {
    title: "II. The Arab Women's Union of Bethlehem",
    arabicTitle: "الاتحاد النسائي العربي في بيت لحم",
    description:
      "Established in 1947 by local women leaders, the Arab Women's Union of Bethlehem spearheads today socio-economic initiatives and income-generating projects that provide a labor infrastructure for local and neighboring communities.",
    photos: awu,
  },
];

export default function Gallery() {
  const [openIndex, setOpenIndex] = useState(null);
  const [openList, setOpenList] = useState(null);

  // Close with Escape, and move through photos with arrow keys
  useEffect(() => {
    if (openList === null) return;
    const onKey = (e) => {
      if (e.key === "Escape") setOpenIndex(null), setOpenList(null);
      if (e.key === "ArrowRight") setOpenIndex((i) => (i + 1) % openList.length);
      if (e.key === "ArrowLeft") setOpenIndex((i) => (i - 1 + openList.length) % openList.length);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [openList]);

  const open = (list, index) => {
    setOpenList(list);
    setOpenIndex(index);
  };

  const close = () => {
    setOpenIndex(null);
    setOpenList(null);
  };

  return (
    <>
      <Head>
        <title>Photography | The Living Archive</title>
      </Head>

      <div className="flex min-h-screen flex-col bg-black text-white">
        <section className="container mx-auto px-12 py-16">
          <Link href="/bethlehem" className="text-[#4A6B8A] hover:text-[#5F84A6] mb-8 inline-block">
            ← Back to Bethlehem's Cultural Memory
          </Link>

          <h1 className="text-white text-4xl font-bold mb-4">Photography</h1>
          <p className="text-[#A3A3A3] max-w-3xl mb-2">
            Documenting cultural artifacts, spaces, and social projects.
          </p>
          <p className="mb-16">
            By{" "}
            <a
              href="https://www.eliashalabi.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#4A6B8A] hover:text-[#5F84A6] underline"
            >
              Elias Halabi
            </a>
          </p>

          {galleries.map((gallery) => (
            <div key={gallery.title} className="mb-20">
              <h2 className="text-white text-3xl font-bold mb-2">{gallery.title}</h2>
              <p className="text-[#4A6B8A] text-3xl font-bold mb-4" dir="rtl">
                {gallery.arabicTitle}
              </p>
              <p className="text-[#A3A3A3] max-w-3xl mb-8">{gallery.description}</p>

              <div className="grid md:grid-cols-3 gap-4">
                {gallery.photos.map((src, i) => (
                  <button
                    key={src}
                    type="button"
                    onClick={() => open(gallery.photos, i)}
                    className="aspect-video w-full overflow-hidden rounded-lg bg-[#222] cursor-zoom-in"
                  >
                    <img src={src} alt="" className="w-full h-full object-cover hover:scale-105 transition duration-500" />
                  </button>
                ))}
              </div>
            </div>
          ))}
        </section>
      </div>

      {/* Lightbox */}
      {openList !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/65 flex items-center justify-center p-4"
          onClick={close}
        >
          <img
            src={openList[openIndex]}
            alt=""
            className="max-h-full max-w-full object-contain"
            onClick={(e) => e.stopPropagation()}
          />

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              close();
            }}
            className="absolute top-6 right-8 text-white text-4xl leading-none hover:text-[#5F84A6]"
            aria-label="Close"
          >
            ×
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setOpenIndex((i) => (i - 1 + openList.length) % openList.length);
            }}
            className="absolute left-6 text-white text-5xl hover:text-[#5F84A6]"
            aria-label="Previous photo"
          >
            ‹
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setOpenIndex((i) => (i + 1) % openList.length);
            }}
            className="absolute right-6 text-white text-5xl hover:text-[#5F84A6]"
            aria-label="Next photo"
          >
            ›
          </button>
        </div>
      )}
    </>
  );
}