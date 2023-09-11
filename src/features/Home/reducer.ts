import { useEffect, useState } from "react"
import useSWRImmutable from "swr/immutable"
import { API_URLS } from "@/configs/api-urls"
import { fetchCocktails } from "@/features/Home/api/fetcher"
import { useMessage } from "@/configs/message-context"
import { useLocalStorage } from "usehooks-ts"

export default function useHome() {
  const [searchString, setSearchString] = useState<string>()
  const [, setFavouriteIds] = useLocalStorage<string[]>("favourites", [])
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
    setFavouriteIds(currentFavourites => [...currentFavourites, id])

    message.success("Added to favourites!")
  }

  return {
    state: { drinks, cocktailFetchingError, isCocktailFetching, cocktailsRefetching },
    actions: { refetchCocktails, setSearchString, addToFavourites }
  }
}
