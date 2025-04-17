import { FC } from "react"
import { Card, CardHeader, CardBody, Button } from "@heroui/react"
import { Image } from "@heroui/react"
import { Meme } from "../types"

interface MemeCardProps {
  meme: Meme
}

const MemeCard: FC<MemeCardProps> = ({ meme }) => {
  return (
    <Card key={meme.id} className="flex flex-col items-start  rounded-md py-2 px-2">
      <CardHeader className="py-4 rounded-t-md">
        <h2 className="text-xl font-semibold">{meme.title}</h2>
      </CardHeader>
      <Image src={meme.image_url} alt={meme.title} className="rounded-md object-cover aspect-1/1" />
      <CardBody className="flex flex-col items-start mt-2 space-y-2">
        <p>Likes: {meme.likes}</p>
        <a href={meme.link} target="_blank" rel="noopener noreferrer" className="block w-full">
          <Button variant="flat" className="p-0 h-auto w-full ">
            View Meme
          </Button>
        </a>
      </CardBody>
    </Card>
  )
}

export default MemeCard
