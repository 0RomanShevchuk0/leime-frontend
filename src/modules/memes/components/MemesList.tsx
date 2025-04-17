import { FC } from "react"
import MemeCard from "./MemeCard"
import { Meme } from "../types"

interface MemesListProps {
  memes: Meme[]
}

export const MemesList: FC<MemesListProps> = ({ memes }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
      {memes.map((meme) => (
        <MemeCard key={meme.id} meme={meme} />
      ))}
    </div>
  )
}
