import MobileAppBar from "@/features/AppContainer/components/MobileAppBar"
import DesktopAppBar from "@/features/AppContainer/components/DesktopAppBar"
import { useMediaQuery } from "react-responsive"
import { CSSProperties, FC, PropsWithChildren, useEffect } from "react"
import { theme } from "antd"
import { useThemeToggle } from "@/features/AppContainer/theme-context/toggle-theme"
import PullToRefresh from "pulltorefreshjs"
import ReactDOMServer from "react-dom/server"
import { ArrowUpOutlined, LoadingOutlined } from "@ant-design/icons"

const AppContainer: FC<PropsWithChildren> = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 767 })
  const themeToggle = useThemeToggle()
  const { token } = theme.useToken()
  const styles = useStyles()

  useEffect(() => {
    document.body.style.background = token.colorPrimaryBg
  }, [themeToggle, token.colorPrimaryBg])

  useEffect(() => {
    PullToRefresh.init({
      mainElement: "body",
      onRefresh() {
        window.location.reload()
      },
      iconArrow: ReactDOMServer.renderToString(<ArrowUpOutlined />),
      iconRefreshing: ReactDOMServer.renderToString(<LoadingOutlined />)
    })
    return PullToRefresh.destroyAll
  }, [])

  return (
    <div>
      <div style={styles.navContainer}>{isMobile ? <MobileAppBar /> : <DesktopAppBar />}</div>
      <div style={styles.childrenContainer}>{children}</div>
    </div>
  )
}

type Style = () => {
  navContainer: CSSProperties
  childrenContainer: CSSProperties
}

const useStyles: Style = () => {
  return {
    navContainer: {
      position: "fixed",
      top: 0,
      width: "100%",
      zIndex: 50
    },
    childrenContainer: {
      marginTop: 50
    }
  }
}
export default AppContainer
