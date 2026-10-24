import Head from "next/head";
import Link from "next/link";

// Every card uses the same 16:9 media box, so layout doesn't depend on image proportions
function Card({ media, title, subtitle, children }) {
  return (
    <div className="bg-[#181818] rounded-xl overflow-hidden flex flex-col h-full">
      <div className="aspect-video w-full bg-[#222] overflow-hidden flex items-center justify-center">
        {media}
      </div>
      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-white text-xl font-bold mb-1">{title}</h3>
        {subtitle && (
          <p className="text-[#4A6B8A] text-xl mb-3">{subtitle}</p>
        )}
        <div className="text-[#A3A3A3] text-xl">{children}</div>
      </div>
    </div>
  );
}

export default function Bethlehem() {
  return (
    <>
      <Head>
        <title>Bethlehem's Cultural Memory | The Living Archive</title>
      </Head>

      <div className="text-xl flex min-h-screen flex-col bg-black text-white">
        <section className="container mx-auto px-12 py-16">
          <Link href="/" className="text-[#4A6B8A] hover:text-[#5F84A6] mb-8 inline-block">
            ← Back to Home
          </Link>

          <h1 className="text-white text-4xl font-bold mb-4">
            Bethlehem's Cultural Memory
          </h1>
          <p className="text-[#A3A3A3] text-xl max-w-3xl mb-12">
            Foregrounding Bethlemite indigenous knowledge of tangible and intangible heritage as a site of cultural memory and an enduring infrastructure of communal economic sumūd (steadfastness).
          </p>

          <div className="grid md:grid-cols-2 gap-8 items-stretch">
            {/* 1. Documentary */}
            <Card
              title="The Living Archive: Bethlehem's Cultural Memory"
              subtitle="A short documentary by Nevine Abraham & Elias Halabi"
              media={
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/VD359mTG6BA"
                  title="The Living Archive: Bethlehem's Cultural Memory"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              }
            >
              <p>English subtitles</p>
              <p className="mt-3">
                Click here for the Arabic version (without subtitles) coming soon.
              </p>
              <p className="mt-2 mb-3" dir="rtl">
                الأرشيف الحي: الذاكرة الثقافية لبيت لحم
              </p>
            </Card>

            {/* 2. Essay */}
            <Card
              title="Essay"
              media={
                <p className="text-[#A3A3A3] text-lg">Essay coming soon</p>
              }
            >
              <p>Essay on this project will be posted here.</p>
            </Card>

            {/* 3. Photography */}
            <Card
              title="Photography"
              subtitle="By Elias Halabi"
              media={
                <img
                  src="/images/photo2.png"
                  alt="Photography from Bethlehem's Cultural Memory"
                  className="w-full h-full object-cover"
                />
              }
            >
              <p className="mb-4">Documenting cultural artifacts, spaces, and social projects.</p>
              <Link
                href="/gallery"
                className="text-[#4A6B8A] hover:text-[#5F84A6] underline"
              >
                View full photography →
              </Link>
            </Card>

            {/* 4. Likay la nansā */}
            <Card
              title="Likay la nansā ِلكي لا ننسى (Lest We Forget)"
              subtitle="(1998) by Julia Dabdoub (1926–2009)"
                            media={
                <div className="w-full h-full bg-[#222] flex items-center justify-center">
                  <img
                    src="/images/photo3.jpg"
                    alt="Likay la nansā (Lest We Forget)"
                    className="h-full w-auto max-w-full object-contain"
                  />
                </div>
              }
            >
              <p className="mb-3">Translated by Nevine Abraham</p>
              <p className="mb-3">Video coming soon.</p>
              <p>PDF or link coming soon.</p>
            </Card>
          </div>
        </section>
      </div>
    </>
  );
}