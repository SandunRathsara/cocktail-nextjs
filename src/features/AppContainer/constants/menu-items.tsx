import { HeartOutlined, HomeOutlined } from "@ant-design/icons"
import { useRouter } from "next/router"

// Keys in following MENU_ITEMS should always be included in the MenuItemKey Type
// MENU_ITEMS constant is type of MenuProps["items"].
export const MENU_ITEMS = () => {
  const router = useRouter()
  return [
    {
      label: "Home",
      key: "home",
      icon: <HomeOutlined />,
      onClick: () => router.push("/home")
    },
    {
      label: "Favourites",
      key: "favourites",
      icon: <HeartOutlined />,
      onClick: () => router.push("/favourites")
    }
  ]
}

// This should always be a union of keys in MENU_ITEMS
export type MenuItemKey = "home" | "favourites"
