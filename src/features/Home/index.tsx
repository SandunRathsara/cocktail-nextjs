import { CSSProperties, FC, useMemo } from "react"
import useHome from "@/features/Home/reducer"
import DrinkList from "@/components/DrinkList"
import { useMediaQuery } from "react-responsive"
import { Button } from "antd"
import { HeartFilled, HeartOutlined } from "@ant-design/icons"
import Filters from "@/features/Home/components/Filters"

const Home: FC = () => {
  const { state, actions } = useHome()
  const styles = useStyles()

  const data = useMemo(
    () =>
      (state?.drinks || []).map(drink => ({
        drink,
        actions: [
          <Button
            shape={"circle"}
            type={"text"}
            key={drink.title}
            icon={state.favouriteIds.includes(drink.id) ? <HeartFilled style={styles.actionIcon} /> : <HeartOutlined />}
            onClick={() => actions.addToFavourites(drink.id)}
          />
        ]
      })),
    [actions, state?.drinks, state.favouriteIds, styles.actionIcon]
  )

  return (
    <div style={styles.container}>
      <Filters onSearch={value => actions.setSearchString(value)} onReload={() => actions.refetchCocktails()} />
      <DrinkList loading={state.isCocktailFetching || state.cocktailsRefetching} data={data} />
    </div>
  )
}

type Style = () => {
  container: CSSProperties
  actionIcon: CSSProperties
}

const useStyles: Style = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 })

  return {
    container: {
      ...(isMobile ? { paddingLeft: "0.5rem", paddingRight: "0.5rem" } : { paddingLeft: "5rem", paddingRight: "5rem" })
    },
    actionIcon: { color: "red" }
  }
}

export default Home
