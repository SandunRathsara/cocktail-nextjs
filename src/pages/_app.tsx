import "@/styles/globals.css"
import type { AppProps } from "next/app"
import { Caveat } from "next/font/google"
import AppContainer from "@/features/AppContainer"
import { ThemeToggleProvider } from "@/features/AppContainer/theme-context/toggle-theme"
import { CocktailThemeProvider } from "@/features/AppContainer/theme-context/cocktail-theme-provider"
import NotificationProvider from "../configs/notification-context"

const fonts = Caveat({ subsets: ["latin"] })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <title>Cocktail</title>
      <NotificationProvider>
        <ThemeToggleProvider>
          <CocktailThemeProvider>
            <main className={fonts.className}>
              <AppContainer>
                <Component {...pageProps} />
              </AppContainer>
            </main>
          </CocktailThemeProvider>
        </ThemeToggleProvider>
      </NotificationProvider>
    </>
  )
}
