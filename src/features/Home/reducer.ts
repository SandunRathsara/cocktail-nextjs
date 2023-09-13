import { useEffect, useState } from "react"
import useSWRImmutable from "swr/immutable"
import { API_URLS } from "@/configs/api-urls"
import { fetchCocktails } from "@/features/Home/api/fetcher"
import { useMessage } from "@/configs/message-context"
import { useLocalStorage } from "usehooks-ts"

export default function useHome() {
  const [searchString, setSearchString] = useState<string>()
  const [favouriteIds, setFavouriteIds] = useLocalStorage<string[]>("favourites", [])
  const message = useMessage()

  const {
    data: drinks,
    error: cocktailFetchingError,
    isLoading: isCocktailFetching,
    mutate: refetchCocktails,
    isValidating: cocktailsRefetching
  } = useSWRImmutable([API_URLS.GET_A_RANDOM_COCKTAIL, searchString], fetchCocktails)

  useEffect(() => {
    if (cocktailFetchingError) message.error("Failed to fetch cocktails")
  }, [cocktailFetchingError, message])

  const addToFavourites = (id: string) => {
    let msg = "Removed from favourites"
    setFavouriteIds(currentFavourites => {
      if (currentFavourites.includes(id)) return currentFavourites.filter(item => item !== id)
      msg = "Added to favourites"
      return [id, ...currentFavourites]
    })

    message.success(msg)
  }

  console.log("here", favouriteIds)

  return {
    state: { drinks, favouriteIds, cocktailFetchingError, isCocktailFetching, cocktailsRefetching },
    actions: { refetchCocktails, setSearchString, addToFavourites }
  }
}
