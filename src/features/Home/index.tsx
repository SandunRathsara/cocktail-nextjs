import { FC } from "react"
import useHome from "@/features/Home/reducer"

const Home: FC = () => {
  const { state } = useHome()
  return (
    <div>
      <h2>This is Cocktail</h2>
      {state.isCocktailFetching ? "loading..." : JSON.stringify(state.cocktails)}
    </div>
  )
}
export default Home
