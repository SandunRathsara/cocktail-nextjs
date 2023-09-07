import "@/styles/globals.css"
import type { AppProps } from "next/app"
import { Caveat } from "next/font/google"
import AppContainer from "@/features/AppContainer"
import { ThemeToggleProvider } from "@/features/theme-context/toggle-theme"
import { CocktailThemeProvider } from "@/features/theme-context/cocktail-theme-provider"

const fonts = Caveat({ subsets: ["latin"] })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <title>Cocktail</title>
      <ThemeToggleProvider>
        <CocktailThemeProvider>
          <main className={fonts.className}>
            <AppContainer />
            <Component {...pageProps} />
          </main>
        </CocktailThemeProvider>
      </ThemeToggleProvider>
    </>
  )
}
