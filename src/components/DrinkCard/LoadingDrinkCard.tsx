import { CSSProperties, FC } from "react"
import { Skeleton, theme } from "antd"

const LoadingDrinkCard: FC = () => {
  const styles = useStyles()
  return (
    <div style={styles.container}>
      <Skeleton.Image active />
      <div style={styles.detailsContainer}>
        <Skeleton.Input active size={"small"} block />
        <Skeleton.Input active size={"small"} block />
        <Skeleton.Input active size={"small"} block />
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
      alignItems: "center",
      padding: 10,
      flex: 1
    },
    detailsContainer: {
      display: "flex",
      flexDirection: "column",
      padding: 10,
      flex: 1,
      gap: 4
    }
  }
}

export default LoadingDrinkCard
