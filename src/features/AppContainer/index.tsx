import MobileAppBar from "@/features/AppContainer/components/MobileAppBar"
import DesktopAppBar from "@/features/AppContainer/components/DesktopAppBar"
import { useMediaQuery } from "react-responsive"

const AppContainer = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 })

  if (isMobile) return <MobileAppBar />
  else return <DesktopAppBar />
}

export default AppContainer
