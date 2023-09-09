import { CSSProperties, useState } from "react"
import { theme, Typography, Button, Drawer, Space, Avatar } from "antd"
import MenuOutlined from "@ant-design/icons/MenuOutlined"
import { MENU_ITEMS } from "@/features/constants/menu-items"
import { DarkModeSwitch } from "react-toggle-dark-mode"
import { useThemeToggle } from "@/features/theme-context/toggle-theme"

const MobileAppBar = () => {
  const styles = useStyles()
  const { theme, toggleTheme } = useThemeToggle()
  const [openDrawer, setOpenDrawer] = useState(true)

  return (
    <div style={styles.appBarContainer}>
      <Button type="text" onClick={() => setOpenDrawer(true)}>
        <MenuOutlined />
      </Button>
      <Drawer style={styles.drawer} open={openDrawer} onClose={() => setOpenDrawer(false)} placement="left">
        <div style={styles.avatarContainer}>
          <Avatar src={"/icons/maskable-icon-512x512.png"} size={100} />
          <div style={styles.titleContainer}>
            <Typography.Text style={{ fontSize: 40 }}>Cocktails</Typography.Text>
            <Typography.Text style={{ fontSize: 20 }}>The largest cocktail database</Typography.Text>
          </div>
        </div>
        <Space direction={"vertical"} style={styles.menuItemsContainer}>
          {MENU_ITEMS.map(item => (
            <Button type={"text"} block key={item.key} icon={item.icon} style={{ display: "flex" }} size={"large"}>
              {item.label}
            </Button>
          ))}
        </Space>
      </Drawer>
      <Typography.Text style={styles.appBarTitle}>Cocktails</Typography.Text>
      <DarkModeSwitch checked={theme === "dark"} onChange={toggleTheme} size={30} />
    </div>
  )
}

type Styles = () => {
  appBarContainer: CSSProperties
  appBarTitle: CSSProperties
  drawer: CSSProperties
  avatarContainer: CSSProperties
  titleContainer: CSSProperties
  menuItemsContainer: CSSProperties
}

const useStyles: Styles = () => {
  const { token } = theme.useToken()

  return {
    appBarContainer: {
      background: token.colorPrimaryBg,
      minHeight: 50,
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      paddingRight: "1rem"
    },
    appBarTitle: { fontSize: "1.5rem" },
    drawer: {
      background: token.colorPrimaryBg
    },
    avatarContainer: {
      display: "flex",
      alignItems: "end",
      gap: 8
    },
    titleContainer: {
      display: "flex",
      flexDirection: "column"
    },
    menuItemsContainer: {
      width: "100%",
      marginTop: "2rem"
    }
  }
}

export default MobileAppBar
