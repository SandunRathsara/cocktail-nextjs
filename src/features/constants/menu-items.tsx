import { HeartOutlined, HomeOutlined } from "@ant-design/icons"
import { MenuProps } from "antd"

// Keys in following MENU_ITEMS should always be included in the MenuItemKey Type
export const MENU_ITEMS: MenuProps["items"] = [
  {
    label: "Home",
    key: "home",
    icon: <HomeOutlined />
  },
  {
    label: "Favourites",
    key: "favourites",
    icon: <HeartOutlined />
  }
]

// This should always be a union of keys in MENU_ITEMS
export type MenuItemKey = "home" | "favourites"
