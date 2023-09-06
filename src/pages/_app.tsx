import "@/styles/globals.css"
import type { AppProps } from "next/app"
import { Caveat } from "next/font/google"

const fonts = Caveat({ subsets: ["latin"] })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <title>Cocktail</title>
      <main className={fonts.className}>
        <Component {...pageProps} />
      </main>
    </>
  )
}
