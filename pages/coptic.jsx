import Link from "next/link";

export default function Coptic() {
  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      <section className="container mx-auto px-12 py-16">
        <Link href="/" className="text-[#2F7F7A] hover:text-[#3F9A94] mb-8 inline-block">
          ← Back to Home
        </Link>

        <h1 className="text-white text-4xl font-bold mb-4">
          Coptic Cultural Memory
        </h1>
        <p className="text-white/70 text-lg max-w-3xl">
          Coming soon.
        </p>
      </section>
    </div>
  );
}