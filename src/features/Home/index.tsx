import { CSSProperties, FC } from "react"
import useHome from "@/features/Home/reducer"
import DrinkList from "@/components/DrinkList"
import PlusOutlined from "@ant-design/icons/PlusOutlined"
import { useMediaQuery } from "react-responsive"

const Home: FC = () => {
  const { state, actions } = useHome()
  const styles = useStyles()

  return (
    <div style={styles.container}>
      <DrinkList
        loading={state.isCocktailFetching || state.cocktailsRefetching}
        drinks={state.cocktails || []}
        cardAction={{
          action: cocktail => actions.addToFavourites(cocktail.id),
          label: "Add to",
          icon: <PlusOutlined />
        }}
      />
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
