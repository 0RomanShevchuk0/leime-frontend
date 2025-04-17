import { axiosClassic } from "@/shared/api/client"
import { Meme, MemeFormData } from "../types"

class MemesApi {
  private baseUrl = "/memes"

  async fetchMemes(): Promise<Meme[]> {
    const res = await axiosClassic.get<Meme[]>(this.baseUrl)
    return res.data
  }

  async updateMeme(id: number, body: MemeFormData): Promise<Meme> {
    const response = await axiosClassic.patch<Meme>(`${this.baseUrl}/${id}`, body)
    return response.data
  }
}

export const memesApi = new MemesApi()
