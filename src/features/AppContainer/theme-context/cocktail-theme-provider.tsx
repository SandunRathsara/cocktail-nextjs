import { FC, PropsWithChildren } from "react"
import { ConfigProvider, theme } from "antd"
import { COCKTAIL_THEME } from "@/styles/theme"
import { useThemeToggle } from "@/features/AppContainer/theme-context/toggle-theme"

export const CocktailThemeProvider: FC<PropsWithChildren> = ({ children }) => {
  const { theme: cocktailTheme } = useThemeToggle()
  return (
    <ConfigProvider
      theme={{ ...COCKTAIL_THEME, algorithm: cocktailTheme === "dark" ? theme.darkAlgorithm : theme.defaultAlgorithm }}
    >
      {children}
    </ConfigProvider>
  )
}
