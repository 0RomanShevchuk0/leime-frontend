import { MemesList, useMemes } from "@/modules/memes"
import { Heading } from "@/ui/Heading"
import SpinLoader from "@/ui/SpinLoader"
import { FC } from "react"

const MemesListPage: FC = () => {
  const { memes, isLoading, isError } = useMemes()

  return (
    <div>
      <Heading level={1}>Memes List Page</Heading>

      {isLoading && <SpinLoader />}
      {isError && <p className="text-red-500 mt-4">Failed to load memes.</p>}
      {!isLoading && !isError && <MemesList memes={memes} />}
    </div>
  )
}

export default MemesListPage
