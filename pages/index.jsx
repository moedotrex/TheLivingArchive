import Link from 'next/link'

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      <main className="container mx-auto px-12 py-32 flex flex-col items-center justify-center">
        <h1 className="text-white text-6xl font-bold mb-8 text-center">
          The Living Archive
        </h1>
        
        <p className="text-white text-lg text-center mb-16 max-w-2xl mx-auto">
          Explores how indigenous women across Arab countries witness history, respond to it, and materialize their heritage.
        </p>

        <p className="text-white/70 text-center mb-12 max-w-2xl">
          Choose a layout option to explore the project:
        </p>

        <div className="flex flex-col gap-6 mt-12">
          <Link 
            href="/layout-1"
            className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition text-center w-64"
          >
            Layout 1: Hero Image
          </Link>
          <Link 
            href="/layout-2"
            className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition text-center w-64"
          >
            Layout 2: Side-by-Side
          </Link>
          <Link 
            href="/layout-3"
            className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition text-center w-64"
          >
            Layout 3: Text-First
          </Link>
        </div>
      </main>
    </div>
  )
}