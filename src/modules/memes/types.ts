export interface Meme {
  readonly id: number
  title: string
  image_url: string
  likes: number
  link: string
}

export interface MemeFormData extends Omit<Meme, "id"> {}
