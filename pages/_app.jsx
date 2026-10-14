import '../globals.css'

export default function App({ Component, pageProps }) {
  return (
    <div className="bg-black text-white min-h-screen">
      <Component {...pageProps} />
    </div>
  )
}