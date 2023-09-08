import { CSSProperties } from "react"
import { theme, Typography, Button, Menu } from "antd"
import MenuOutlined from "@ant-design/icons/MenuOutlined"
import { MENU_ITEMS } from "@/features/constants/menu-items"
import { DarkModeSwitch } from "react-toggle-dark-mode"
import { useThemeToggle } from "@/features/theme-context/toggle-theme"

const MobileAppBar = () => {
  const styles = useStyles()
  const { theme, toggleTheme } = useThemeToggle()

  return (
    <div style={styles.container}>
      <Menu
        mode="horizontal"
        style={styles.menu}
        items={[
          {
            label: (
              <Button type={"text"}>
                <MenuOutlined />
              </Button>
            ),
            key: "menu",
            icon: null,
            children: MENU_ITEMS
          }
        ]}
      />
      <Typography.Text style={{ fontSize: "1.5rem" }}>Cocktails</Typography.Text>
      <DarkModeSwitch checked={theme === "dark"} onChange={toggleTheme} size={30} />
    </div>
  )
}

type Styles = () => {
  container: CSSProperties
  menu: CSSProperties
}

const useStyles: Styles = () => {
  const { token } = theme.useToken()

  return {
    container: {
      backgroundColor: token.colorPrimaryBg,
      minHeight: 50,
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      paddingRight: "1rem"
    },
    menu: {
      background: token.colorPrimaryBg
    }
  }
}

export default MobileAppBar
