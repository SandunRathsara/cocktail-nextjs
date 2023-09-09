import { Button, Col, Row, Spin } from "antd"
import { HeartOutlined } from "@ant-design/icons"
import { CSSProperties, ReactNode, useMemo } from "react"
import DrinkCard from "@/components/DrinkCard"
import { Drink } from "@/types/drink.interface"
import { useMediaQuery } from "react-responsive"

type DrinkListProps = {
  loading: boolean
  drinks: Drink[]
  cardAction: {
    label: string
    action: (cocktail: Drink) => void
    icon: ReactNode
  }
}

const DrinkList = (props: DrinkListProps) => {
  const styles = useStyles()
  const isMobile = useMediaQuery({ maxWidth: 967 })

  const span = useMemo(() => (isMobile ? 24 : 12), [isMobile])

  return (
    <Row align={"top"} gutter={[16, 16]} wrap>
      {props.loading ? (
        <div style={styles.loadingContainer}>
          <Spin />
        </div>
      ) : (
        props.drinks?.map(drink => (
          <Col key={drink.image} span={span}>
            <DrinkCard
              key={drink.image}
              image={drink.image}
              name={drink.title}
              category={drink.category}
              actions={[
                <Button
                  type={"text"}
                  key={drink.title}
                  icon={props.cardAction.icon}
                  onClick={() => props.cardAction.action(drink)}
                >
                  {props.cardAction.label} <HeartOutlined />
                </Button>
              ]}
            />
          </Col>
        ))
      )}
    </Row>
  )
}

type Styles = () => {
  loadingContainer: CSSProperties
}

const useStyles: Styles = () => {
  return {
    loadingContainer: {
      display: "flex",
      height: "15rem",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#e3e3e3",
      minWidth: "95vw",
      borderRadius: "5px"
    }
  }
}

export default DrinkList
