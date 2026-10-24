import '../globals.css'
import { Playfair_Display, Crimson_Pro } from "next/font/google";

const display = Playfair_Display({ subsets: ["latin"], variable: "--font-display" });
const body = Crimson_Pro({ subsets: ["latin"], variable: "--font-body" });

export default function App({ Component, pageProps }) {
  return (
    <div className={`${display.variable} ${body.variable} ${body.className} bg-black text-white min-h-screen`}>
      <Component {...pageProps} />
    </div>
  )
}