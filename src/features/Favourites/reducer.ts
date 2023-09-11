import { useEffect } from "react"
import { useLocalStorage } from "usehooks-ts"
import useSWRImmutable from "swr/immutable"
import { API_URLS } from "@/configs/api-urls"
import { fetchCocktailsById } from "@/features/Favourites/api/fetcher"
import { useMessage } from "@/configs/message-context"

export function useFavourites() {
  const message = useMessage()
  const [favouriteIds, setFavouriteIds] = useLocalStorage<string[]>("favourites", [])
  const {
    data: favouriteDrinks,
    isLoading,
    error
  } = useSWRImmutable([API_URLS.GET_COCKTAIL_BY_ID(), favouriteIds], fetchCocktailsById)

  useEffect(() => {
    if (error) message.info("Failed to fetch favourite cocktails")
  }, [error, message])

  const removeFromFavourites = (id: string) => {
    setFavouriteIds(currentFavourites => currentFavourites.filter(cId => cId !== id))

    message.success("Removed from favourites successfully!")
  }

  return { state: { favouriteDrinks, isLoading }, actions: { removeFromFavourites } }
}
