import Link from "next/link";

export default function Coptic() {
  return (
    <div className="text-xl flex min-h-screen flex-col bg-black text-white">
      <section className="container mx-auto px-12 py-16">
        <Link href="/" className="text-[#4A6B8A] hover:text-[#5F84A6] mb-8 inline-block">
          ← Back to Home
        </Link>

        <h1 className="text-white text-4xl font-bold mb-4">
          Coptic Cultural Memory
        </h1>
        <p className="text-[#A3A3A3] text-xl max-w-3xl mb-12">
          Coming soon.
        </p>

        <div className="bg-[#181818] rounded-xl p-6 max-w-xl">
          <h3 className="text-white text-xl font-bold mb-2">Coptic Cairo Gallery</h3>
          <Link
            href="/coptic-gallery"
            className="text-[#4A6B8A] hover:text-[#5F84A6] underline"
          >
            View full photography →
          </Link>
        </div>
      </section>
    </div>
  );
}