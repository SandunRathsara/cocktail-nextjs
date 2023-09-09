import { Image, Space, theme, Typography } from "antd"
import { CSSProperties, ReactNode } from "react"

type DrinkCardProps = {
  image: string
  name: string
  category: string
  actions?: ReactNode[]
}

const DrinkCard = (props: DrinkCardProps) => {
  const styles = useStyles()
  return (
    <div style={styles.container}>
      <Image alt={"image"} src={props.image} width={200} />
      <div style={styles.detailsContainer}>
        <Typography.Title level={4}>{props.name}</Typography.Title>
        <Typography.Text>{props.category}</Typography.Text>
        <Space style={{ marginTop: "auto", justifyContent: "end" }}>{props.actions}</Space>
      </div>
    </div>
  )
}

type Styles = () => {
  container: CSSProperties
  detailsContainer: CSSProperties
}

const useStyles: Styles = () => {
  const { token } = theme.useToken()

  return {
    container: {
      background: token.colorFillContent,
      borderRadius: token.borderRadius,
      display: "flex",
      flex: 1
    },
    detailsContainer: {
      display: "flex",
      flexDirection: "column",
      padding: 10,
      flex: 1
    }
  }
}

export default DrinkCard
