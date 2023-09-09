import { CSSProperties, useMemo, useState } from "react"
import { theme, Typography, Button, Drawer, Space, Avatar } from "antd"
import MenuOutlined from "@ant-design/icons/MenuOutlined"
import { MENU_ITEMS } from "@/features/AppContainer/constants/menu-items"
import { DarkModeSwitch } from "react-toggle-dark-mode"
import { useThemeToggle } from "@/features/AppContainer/theme-context/toggle-theme"
import { useRouter } from "next/router"

const MobileAppBar = () => {
  const styles = useStyles()
  const { theme, toggleTheme } = useThemeToggle()
  const [openDrawer, setOpenDrawer] = useState(false)
  const router = useRouter()
  const path = useMemo(() => router.pathname.split("/").pop(), [router])

  return (
    <div style={styles.appBarContainer}>
      <Button type="text" onClick={() => setOpenDrawer(true)}>
        <MenuOutlined />
      </Button>
      <Drawer style={styles.drawer} open={openDrawer} onClose={() => setOpenDrawer(false)} placement="left">
        <div style={styles.avatarContainer}>
          <Avatar src={"/icons/maskable-icon-512x512.png"} size={100} />
          <div style={styles.titleContainer}>
            <Typography.Text style={styles.drawerTitle}>Cocktails</Typography.Text>
            <Typography.Text style={styles.drawerSubTitle}>The largest cocktail database</Typography.Text>
          </div>
        </div>
        <Space direction={"vertical"} style={styles.menuItemsContainer}>
          {MENU_ITEMS().map(item => (
            <Button
              type={path === item.key ? "primary" : "text"}
              block
              key={item.key}
              icon={item.icon}
              style={{ display: "flex" }}
              size={"large"}
              onClick={() => {
                item.onClick().then(() => setOpenDrawer(false))
              }}
            >
              {item.label}
            </Button>
          ))}
        </Space>
      </Drawer>
      <div style={styles.appBarTitleContainer}>
        <Typography.Text style={styles.appBarTitle}>Cocktails</Typography.Text>
      </div>
      <DarkModeSwitch checked={theme === "dark"} onChange={toggleTheme} size={30} />
    </div>
  )
}

type Styles = () => {
  appBarContainer: CSSProperties
  appBarTitle: CSSProperties
  appBarTitleContainer: CSSProperties
  drawer: CSSProperties
  drawerTitle: CSSProperties
  drawerSubTitle: CSSProperties
  avatarContainer: CSSProperties
  titleContainer: CSSProperties
  menuItemsContainer: CSSProperties
}

const useStyles: Styles = () => {
  const { token } = theme.useToken()

  return {
    appBarContainer: {
      background: token.colorPrimaryBg,
      height: 46,
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      paddingRight: "1rem"
    },
    appBarTitle: {
      fontSize: "1.5rem",
      cursor: "default"
    },
    appBarTitleContainer: {
      borderBottomStyle: "solid",
      borderBottomWidth: 1,
      borderBottomColor: token.colorBorder,
      flex: 1,
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    },
    drawer: {
      background: token.colorPrimaryBg
    },
    drawerTitle: {
      fontSize: 40,
      cursor: "default"
    },
    drawerSubTitle: {
      fontSize: 20,
      cursor: "default"
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
