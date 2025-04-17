import { appQueries } from "@/shared/config/querues.config"
import { useQuery } from "@tanstack/react-query"
import { memesApi } from "../api/memes.api"

export function useMemes() {
  const {
    data: memes,
    isLoading,
    isError,
  } = useQuery({ queryKey: [appQueries.memes], queryFn: () => memesApi.fetchMemes() })

  return { memes: memes || [], isLoading, isError }
}
