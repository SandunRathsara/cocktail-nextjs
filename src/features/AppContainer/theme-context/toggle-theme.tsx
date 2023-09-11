import { createContext, FC, PropsWithChildren, useContext, useState } from "react"

const ThemeToggleContext = createContext<{ theme: "dark" | "light"; toggleTheme: () => void }>({
  theme: "light",
  toggleTheme: () => {}
})

export const useThemeToggle = () => useContext(ThemeToggleContext)

export const ThemeToggleProvider: FC<PropsWithChildren> = ({ children }) => {
  const [theme, setTheme] = useState<"dark" | "light">("light")

  const toggleTheme = () => {
    setTheme(state => (state === "dark" ? "light" : "dark"))
  }
  return <ThemeToggleContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeToggleContext.Provider>
}
