import { Menu } from "antd"
import { useState } from "react"
import { MENU_ITEMS, MenuItemKey } from "@/features/constants/menu-items"

const AppContainer = () => {
  const [item, setItem] = useState<MenuItemKey>("home")
  return (
    <>
      <Menu
        onClick={event => setItem(event.key as MenuItemKey)}
        items={MENU_ITEMS}
        selectedKeys={[item]}
        mode="horizontal"
      />
    </>
  )
}

export default AppContainer
