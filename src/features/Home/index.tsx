import { CSSProperties, FC, useMemo } from "react"
import useHome from "@/features/Home/reducer"
import DrinkList from "@/components/DrinkList"
import { useMediaQuery } from "react-responsive"
import { Button } from "antd"
import { HeartOutlined } from "@ant-design/icons"

const Home: FC = () => {
  const { state, actions } = useHome()
  const styles = useStyles()

  const data = useMemo(
    () =>
      (state.drinks || []).map(drink => ({
        drink,
        actions: [
          <Button
            shape={"circle"}
            type={"text"}
            key={drink.title}
            icon={<HeartOutlined />}
            onClick={() => actions.addToFavourites(drink.id)}
          />
        ]
      })),
    [actions, state.drinks]
  )

  return (
    <div style={styles.container}>
      <DrinkList loading={state.isCocktailFetching || state.cocktailsRefetching} data={data} />
    </div>
  )
}

type Style = () => {
  container: CSSProperties
}

const useStyles: Style = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 })

  return {
    container: {
      ...(isMobile ? { paddingLeft: "0.5rem", paddingRight: "0.5rem" } : { paddingLeft: "5rem", paddingRight: "5rem" })
    }
  }
}

export default Home
