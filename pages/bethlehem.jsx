import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

// Every card uses the same 16:9 media box, with the title and text below
function Card({ media, title, subtitle, children }) {
  return (
    <div className="bg-[#181818] rounded-xl overflow-hidden flex flex-col h-full">
      <div className="relative aspect-video w-full bg-[#222] overflow-hidden">
        {media}
      </div>
      <div className="p-6 flex flex-col flex-1">
        {title && <h3 className="text-white text-xl font-bold mb-1">{title}</h3>}
        {subtitle && <div className="text-[#4A6B8A] mb-3">{subtitle}</div>}
        <div className="text-[#A3A3A3]">{children}</div>
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

      <div className="flex min-h-screen flex-col bg-black text-white">
        <section className="container mx-auto px-12 py-16">
          <Link href="/" className="text-[#4A6B8A] hover:text-[#5F84A6] mb-8 inline-block">
            ← Back to Home
          </Link>

          <h1 className="text-white text-4xl font-bold mb-4">
            Bethlehem's Cultural Memory
          </h1>
          <p className="text-[#A3A3A3] max-w-3xl mb-12">
            Foregrounding Bethlemite indigenous knowledge of tangible and intangible heritage as a site of cultural memory and an enduring infrastructure of communal economic sumūd (steadfastness).
          </p>

          <div className="grid md:grid-cols-2 gap-8 items-stretch">
            {/* 1. Documentary (no title, the thumbnail already shows it) */}
            <Card
              media={
                <iframe
                  loading="lazy"
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/VD359mTG6BA"
                  title="The Living Archive: Bethlehem's Cultural Memory"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              }
              subtitle="A short documentary by Nevine Abraham & Elias Halabi"
            >
              <p>
                <a href="#arabic-version" className="text-[#4A6B8A] hover:text-[#5F84A6] underline">
                  Click here for the Arabic version (without subtitles)
                </a>{" "}
              </p>
              <p className="mt-3 text-xl font-bold text-white" dir="rtl">
                الأرشيف الحي: الذاكرة الثقافية لبيت لحم
              </p>
            </Card>

            {/* 2. Essay */}
            <Card
              title="Essay"
              media={
                <Image
                  src="/images/essaycover.jpg"
                  alt="Essay cover"
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                />
              }
            >
              <p>Essay on this project will be posted here.</p>
            </Card>

            {/* 3. Photography (the photo links to the gallery) */}
            <Card
              title="Photography"
              subtitle={
                <>
                  By{" "}
                  <a
                    href="https://www.eliashalabi.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-[#5F84A6]"
                  >
                    Elias Halabi
                  </a>
                </>
              }
              media={
                <Link href="/gallery" className="group block relative w-full h-full">
                  <Image
                    src="/images/photographycover.jpg"
                    alt="Photography from Bethlehem's Cultural Memory"
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                </Link>
              }
            >
            </Card>

            {/* 4. Likay la nansā */}
            <Card
              title={
                <>
                  <em>Likay la nansā</em>
                  <span className="mx-3 text-2xl" dir="rtl">لكي لا ننسى</span>
                  <em>(Lest We Forget)</em>
                </>
              }
              subtitle="(1998) by Julia Dabdoub (1926–2009)"
              media={
                <Image
                  src="/images/photo3.jpg"
                  alt="Likay la nansā (Lest We Forget)"
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-contain"
                />
              }
            >
              <p className="mb-3">Translated by Nevine Abraham</p>
              <p className="mb-3">Video/PDF coming soon.</p>
            </Card>
          </div>
        </section>
      </div>
    </>
  );
}