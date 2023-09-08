import { CSSProperties, useState } from "react"
import { MENU_ITEMS, MenuItemKey } from "@/features/constants/menu-items"
import { Menu, theme, Typography } from "antd"
import { useThemeToggle } from "@/features/theme-context/toggle-theme"
import { DarkModeSwitch } from "react-toggle-dark-mode"

const DesktopAppBar = () => {
  const styles = useStyles()
  const { theme, toggleTheme } = useThemeToggle()

  const [item, setItem] = useState<MenuItemKey>("home")

  return (
    <div style={styles.container}>
      <Typography.Text style={{ fontSize: "1.5rem" }}>Cocktails</Typography.Text>
      <Menu
        style={styles.menu}
        onClick={event => setItem(event.key as MenuItemKey)}
        items={MENU_ITEMS}
        selectedKeys={[item]}
        mode="horizontal"
      />
      <DarkModeSwitch checked={theme === "dark"} onChange={toggleTheme} size={30} />
    </div>
  )
}

type Styles = () => {
  container: CSSProperties
  menu: CSSProperties
  themeButton: CSSProperties
}

const useStyles: Styles = () => {
  const { token } = theme.useToken()

  return {
    container: {
      background: token.colorPrimaryBg,
      display: "flex",
      alignItems: "center",
      gap: 20,
      paddingLeft: 20,
      paddingRight: 20
    },
    menu: { background: token.colorPrimaryBg, flex: 1 },
    themeButton: {}
  }
}

export default DesktopAppBar