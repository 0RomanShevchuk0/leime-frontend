import { FC, useEffect } from "react"
import {
  Button,
  Input,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@heroui/react"
import { Meme, MemeFormData } from "../types"
import { useForm, SubmitHandler } from "react-hook-form"

interface MemeFormModalProps {
  meme: Meme | null
  isOpen: boolean
  onClose: () => void
  onSave: (updated: MemeFormData) => void
}

const memeFormValues = (meme: Meme | null): MemeFormData => ({
  title: meme?.title ?? "",
  image_url: meme?.image_url ?? "",
  likes: meme?.likes ?? 0,
  link: meme?.link ?? "",
})

const MemeFormModal: FC<MemeFormModalProps> = ({ meme, isOpen, onSave, onClose }) => {
  console.log(" meme:", meme)
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<MemeFormData>({
    mode: "onChange",
    values: memeFormValues(meme),
  })

  const onSubmit: SubmitHandler<MemeFormData> = (data) => {
    console.log(" data:", data)
    if (!meme) return
    onSave(data)
    onClose()
  }

  useEffect(() => {
    if (!isOpen) {
      reset(memeFormValues(meme))
    }
  }, [isOpen, meme, reset])

  return (
    <Modal
      isOpen={isOpen}
      backdrop="blur"
      placement="center"
      size="lg"
      onOpenChange={onClose}
      isDismissable={false}
    >
      <ModalContent>
        {(onClose) => (
          <form onSubmit={handleSubmit(onSubmit)}>
            <ModalHeader>Edit Meme</ModalHeader>
            <ModalBody className="space-y-3">
              <Input
                label="Title"
                {...register("title", {
                  required: "Title is required",
                  minLength: { value: 3, message: "Min 3 characters" },
                  maxLength: { value: 100, message: "Max 100 characters" },
                })}
                isInvalid={!!errors.title}
                errorMessage={errors.title?.message}
              />
              <Input
                label="Image URL"
                {...register("image_url", {
                  required: "Image URL is required",
                  pattern: {
                    value: /^https?:\/\/.*\.jpg$/i,
                    message: "Must be valid .jpg URL",
                  },
                })}
                isInvalid={!!errors.image_url}
                errorMessage={errors.image_url?.message}
              />
              <Input
                label="Likes"
                type="number"
                min={0}
                max={99}
                {...register("likes", {
                  required: "Likes required",
                  min: { value: 0, message: "Min 0" },
                  setValueAs: (v) => parseInt(v, 10) || 0,
                })}
                isInvalid={!!errors.likes}
                errorMessage={errors.likes?.message}
              />

              <Input
                label="Link"
                placeholder="https://example.com"
                {...register("link", {
                  required: "Link is required",
                  pattern: {
                    value: /^https?:\/\/.+/i,
                    message: "Must be a valid URL",
                  },
                })}
                isInvalid={!!errors.link}
                errorMessage={errors.link?.message}
              />
            </ModalBody>

            <ModalFooter>
              <Button type="button" variant="ghost" onPress={onClose}>
                Cancel
              </Button>
              <Button type="submit" variant="solid" color="primary">
                Save
              </Button>
            </ModalFooter>
          </form>
        )}
      </ModalContent>
    </Modal>
  )
}

export default MemeFormModal
