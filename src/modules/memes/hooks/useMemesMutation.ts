import { useMutation, useQueryClient } from "@tanstack/react-query"
import { MemeFormData } from "../types"
import { memesApi } from "../api/memes.api"
import { appQueries } from "@/shared/config/querues.config"
import toast from "react-hot-toast"

export function useMemesMutation() {
  const queryClient = useQueryClient()

  const mutation = useMutation({
    mutationFn: async ({ id, meme }: { id: number; meme: MemeFormData }) =>
      memesApi.updateMeme(id, meme),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [appQueries.memes] })
      toast.success("Meme successfully updated!")
    },
    onError: (error) => {
      console.log("Error updating meme:", error)
      toast.error("Error updating meme")
    },
  })

  return mutation
}
