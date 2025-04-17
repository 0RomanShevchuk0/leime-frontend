import { MemesTable, useMemes } from "@/modules/memes"
import { Heading } from "@/ui/Heading"
import SpinLoader from "@/ui/SpinLoader"
import { FC } from "react"

const MemesTablePage: FC = () => {
  const { memes, isLoading, isError } = useMemes()

  return (
    <div>
      <Heading level={1}>Memes Table Page</Heading>

      {isLoading && <SpinLoader />}
      {isError && <p className="text-red-500 mt-4">Failed to load memes.</p>}
      {!isLoading && !isError && <MemesTable memes={memes} />}
    </div>
  )
}

export default MemesTablePage
