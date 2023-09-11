import { CSSProperties, FC } from "react"
import { Input } from "antd"

type Props = {
  onSearch: (value: string) => void
}

const Filters: FC<Props> = ({ onSearch }) => {
  const styles = useStyles()
  return (
    <div style={styles.container}>
      <Input.Search allowClear placeholder="Search cocktails..." enterButton onSearch={onSearch} />
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
      paddingBottom: 10
    }
  }
}

export default Filters
