import Link from "next/link";

export default function Bethlehem() {
  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      <section className="container mx-auto px-12 py-16">
        <Link href="/" className="text-blue-400 hover:text-blue-300 mb-8 inline-block">
          ← Back to Home
        </Link>

        <h1 className="text-white text-4xl font-bold mb-4">
          Bethlehem's Cultural Memory
        </h1>
        <p className="text-white/80 text-lg max-w-3xl mb-12">
          Foregrounding Bethlemite indigenous knowledge of tangible and intangible heritage as a site of cultural memory and an enduring infrastructure of communal economic sumūd (steadfastness).
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Documentary */}
          <div className="bg-[#181818] p-8 rounded-lg">
            <h3 className="text-white text-xl font-bold mb-2">
              The Living Archive: Bethlehem's Cultural Memory
            </h3>
            <p className="text-white/70 text-sm mb-4">English subtitles</p>
            <a
              href="https://www.youtube.com/watch?v=VD359mTG6BA"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 underline"
            >
              Watch Documentary →
            </a>

            <div className="mt-8 pt-6 border-t border-[#333]">
              <h3 className="text-white text-xl font-bold mb-2" dir="rtl">
                الأرشيف الحي: الذاكرة الثقافية لبيت لحم
              </h3>
              <p className="text-white/70 text-sm">
                For Arabic learners: without English subtitles (link coming soon)
              </p>
            </div>
          </div>

          {/* Essay */}
          <div className="bg-[#181818] p-8 rounded-lg">
            <h3 className="text-white text-xl font-bold mb-2">Essay</h3>
            <p className="text-white/70 text-sm">Coming soon</p>
          </div>

          {/* Photography */}
          <div className="bg-[#181818] p-8 rounded-lg">
            <h3 className="text-white text-xl font-bold mb-2">Photography</h3>
            <p className="text-white/70 text-sm mb-4">
              Documenting cultural artifacts and spaces.
            </p>
            <a
              href="https://photos.app.goo.gl/xRxarKN55q1otbebA"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 underline"
            >
              View Photography →
            </a>
            <img
    src="/images/photo2.png"
    alt="Likay la nansā (Lest We Forget)"
    className="w-full h-auto rounded-lg mb-2 mt-4"
  />
          </div>

          {/* Likay la nansā */}
          <div className="bg-[#181818] p-8 rounded-lg">
  <h3 className="text-white text-xl font-bold mb-2">
    Likay la nansā ِلكي لا ننسى (Lest We Forget)
  </h3>
  <p className="text-white/70 text-sm mb-4">
    (1998) by Julia Dabdoub (1926–2009)
  </p>
  <p className="text-white/70 text-sm">PDF or link coming soon</p>
  <img
    src="/images/photo3.jpg"
    alt="Likay la nansā (Lest We Forget)"
    className="w-full h-auto rounded-lg mb-2 mt-4"
  />
</div>
        </div>
      </section>
    </div>
  );
}