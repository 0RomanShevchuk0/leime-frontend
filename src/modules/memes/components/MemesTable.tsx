import { FC, useState } from "react"
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableCell,
  TableColumn,
  Button,
  useDisclosure,
} from "@heroui/react"
import { Meme, MemeFormData } from "../types"
import MemeFormModal from "./MemeFormModal"
import { useMemesMutation } from ".."

interface MemesTableProps {
  memes: Meme[]
}

export const MemesTable: FC<MemesTableProps> = ({ memes }) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure()

  const { mutateAsync } = useMemesMutation()

  const [selectedMeme, setSelectedMeme] = useState<Meme | null>(null)

  const handleEdit = (meme: Meme) => {
    setSelectedMeme(meme)
    onOpen()
  }

  const handleSave = (updatedMeme: MemeFormData) => {
    if (!selectedMeme || !selectedMeme.id) return
    mutateAsync({ id: selectedMeme.id, meme: updatedMeme })
    setSelectedMeme(null)
  }

  return (
    <>
      <Table>
        <TableHeader>
          <TableColumn className="w-1/8">ID</TableColumn>
          <TableColumn className="w-4/8">Title</TableColumn>
          <TableColumn className="w-2/8">Likes</TableColumn>
          <TableColumn className="w-1/8">Actions</TableColumn>
        </TableHeader>
        <TableBody>
          {memes.map((meme) => (
            <TableRow key={meme.id}>
              <TableCell>{meme.id}</TableCell>
              <TableCell>{meme.title}</TableCell>
              <TableCell>{meme.likes}</TableCell>
              <TableCell>
                <Button size="sm" variant="ghost" onPress={() => handleEdit(meme)}>
                  Edit
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <MemeFormModal
        meme={selectedMeme}
        isOpen={isOpen}
        onClose={onOpenChange}
        onSave={handleSave}
      />
    </>
  )
}
