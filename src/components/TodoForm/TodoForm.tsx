import { FC } from 'react'

import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure, Input, Select, SelectItem
} from '@heroui/react'

import { PRIORITY } from '../../models'

import { AddIcon } from '../../assets'

type Props = {
  className?: string
}

const TodoForm: FC<Props> = ({ className }) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure()

  return (
    <>
      <Button className={className} color="primary" variant="shadow" onPress={onOpen}>
        <AddIcon />
      </Button>

      <Modal
        isDismissable={false}
        isKeyboardDismissDisabled={true}
        isOpen={isOpen}
        onOpenChange={onOpenChange}
      >
        <ModalContent>
          {(onClose: () => void) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Add new Todo</ModalHeader>

              <ModalBody>
                <Input required label="Title" placeholder="Enter your task" size="md" type="text" />

                <Select label="Priority" placeholder="Select task priority">
                  {
                    Object.values(PRIORITY).map((priority) => (
                      <SelectItem key={priority}>{priority}</SelectItem>
                    ))
                  }
                </Select>
              </ModalBody>


              <ModalFooter>
                <Button color="primary" onPress={onClose}>
                  Add
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  )
}

export default TodoForm
