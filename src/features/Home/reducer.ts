import { useEffect, useState } from "react"
import useSWRImmutable from "swr/immutable"
import { API_URLS } from "@/configs/api-urls"
import { fetchCocktails } from "@/features/Home/api/fetcher"
import { useMessage } from "@/configs/message-context"

export default function useHome() {
  const [searchString, setSearchString] = useState<string>()
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
    message.info("Favourites features is yet to be implemented!")
  }

  return {
    state: { drinks, cocktailFetchingError, isCocktailFetching, cocktailsRefetching },
    actions: { refetchCocktails, setSearchString, addToFavourites }
  }
}
