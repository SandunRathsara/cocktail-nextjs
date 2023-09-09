import { HeartOutlined, HomeOutlined } from "@ant-design/icons"

// Keys in following MENU_ITEMS should always be included in the MenuItemKey Type
// MENU_ITEMS constant is type of MenuProps["items"].
export const MENU_ITEMS = [
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
