import { CSSProperties, FC } from "react"
import { Button, Input } from "antd"
import ReloadOutlined from "@ant-design/icons/ReloadOutlined"

type Props = {
  onSearch: (value: string) => void
  onReload: () => void
}

const Filters: FC<Props> = ({ onSearch, onReload }) => {
  const styles = useStyles()
  return (
    <div style={styles.container}>
      <Input.Search allowClear placeholder="Search cocktails..." enterButton onSearch={onSearch} />
      <Button icon={<ReloadOutlined />} onClick={onReload} type={"primary"} />
    </div>
  )
}

type Style = () => {
  container: CSSProperties
}

const useStyles: Style = () => {
  return {
    container: {
      paddingTop: 5,
      paddingBottom: 10,
      display: "flex",
      alignItems: "center",
      gap: 5
    }
  }
}

export default Filters
