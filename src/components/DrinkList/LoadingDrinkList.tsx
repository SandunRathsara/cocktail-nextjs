import React, { FC } from "react"
import { Col } from "antd"
import LoadingDrinkCard from "@/components/DrinkCard/LoadingDrinkCard"

const LoadingDrinkList: FC<{ span: 24 | 12 }> = ({ span }) => {
  return (
    <>
      <Col span={span}>
        <LoadingDrinkCard />
      </Col>
      <Col span={span}>
        <LoadingDrinkCard />
      </Col>
      <Col span={span}>
        <LoadingDrinkCard />
      </Col>
      <Col span={span}>
        <LoadingDrinkCard />
      </Col>
    </>
  )
}

export default LoadingDrinkList
