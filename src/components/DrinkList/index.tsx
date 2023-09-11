import { Button, Col, Row } from "antd"
import { HeartOutlined } from "@ant-design/icons"
import { ReactNode, useMemo } from "react"
import DrinkCard from "@/components/DrinkCard"
import { Drink } from "@/types/drink.interface"
import { useMediaQuery } from "react-responsive"
import LoadingDrinkList from "@/components/DrinkList/LoadingDrinkList"

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
  const isMobile = useMediaQuery({ maxWidth: 967 })

  const span = useMemo(() => (isMobile ? 24 : 12), [isMobile])

  if (props.loading)
    return (
      <Row align={"top"} gutter={[16, 16]} wrap>
        <LoadingDrinkList span={span} />
      </Row>
    )

  return (
    <Row align={"top"} gutter={[16, 16]} wrap>
      {props.drinks?.map(drink => (
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
      ))}
    </Row>
  )
}

export default DrinkList
