import { Button, Space } from "antd"
import { useThemeToggle } from "@/features/theme-context/toggle-theme"

export default function Home() {
  const { toggleTheme } = useThemeToggle()
  return (
    <div>
      <h2>This is Cocktail</h2>
      <Space>
        <Button>Default</Button>
        <Button type="link">Link</Button>
        <Button type="dashed">Dashed</Button>
        <Button type="text">Text</Button>
        <Button type="primary" onClick={toggleTheme}>
          Primary
        </Button>
      </Space>
    </div>
  )
}
