import { CSSProperties, FC, useMemo } from "react"
import DrinkList from "@/components/DrinkList"
import { useFavourites } from "@/features/Favourites/reducer"
import { Button } from "antd"
import DeleteOutlined from "@ant-design/icons/DeleteOutlined"
import { useMediaQuery } from "react-responsive"

const Favourites: FC = () => {
  const { state, actions } = useFavourites()
  const styles = useStyles()

  const data = useMemo(
    () =>
      (state.favouriteDrinks || []).map(drink => ({
        drink,
        actions: [
          <Button
            shape={"circle"}
            type={"text"}
            key={drink.title}
            icon={<DeleteOutlined />}
            onClick={() => actions.removeFromFavourites(drink.id)}
          />
        ]
      })),
    [actions, state.favouriteDrinks]
  )

  return (
    <div style={styles.container}>
      <DrinkList loading={state.isLoading} data={data || []} />
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
      ...(isMobile ? { paddingLeft: "0.5rem", paddingRight: "0.5rem" } : { paddingLeft: "5rem", paddingRight: "5rem" }),
      paddingTop: "2.5rem"
    }
  }
}

export default Favourites
