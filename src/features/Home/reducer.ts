import { useEffect, useState } from "react"
import useSWRImmutable from "swr/immutable"
import { API_URLS } from "@/configs/api-urls"
import { fetchCocktails } from "@/features/Home/api/fetcher"
import { useNotification } from "@/configs/notification-context"

export default function useHome() {
  const [searchString, setSearchString] = useState<string>()
  const notification = useNotification()

  const {
    data: cocktails,
    error: cocktailFetchingError,
    isLoading: isCocktailFetching,
    mutate: refetchCocktails,
    isValidating: cocktailsRefetching
  } = useSWRImmutable([API_URLS.GET_A_RANDOM_COCKTAIL, searchString], fetchCocktails)

  useEffect(() => {
    if (cocktailFetchingError)
      notification.error({ message: "Failed to fetch cocktails", description: cocktailFetchingError.message })
  }, [cocktailFetchingError, notification])

  const addToFavourites = (id: string) => {
    notification.info({ message: "Favourites features is yet to be implemented!" })
  }

  return {
    state: { cocktails, cocktailFetchingError, isCocktailFetching, cocktailsRefetching },
    actions: { refetchCocktails, setSearchString, addToFavourites }
  }
}
