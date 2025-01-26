import { FC, FormEvent, useMemo, useState } from 'react'

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
import Todo from '../../models/Todo.ts'
import { generateTodo } from '../../../utils'

import { AddIcon } from '../../assets'

type Props = {
   onSubmit: (todo: Todo) => void,
}

const TodoForm: FC<Props> = ({onSubmit}) => {
  const [todo, setTodo] = useState<Todo>(generateTodo)
  const isValid: boolean = useMemo(() => Boolean(todo.title), [todo.title])
  const { isOpen, onOpen, onOpenChange } = useDisclosure()

  const handleChangeTodo = (payload: Partial<Todo>): void => {
    setTodo(prevTodo => ({ ...prevTodo, ...payload }))
  }

  const handleSubmitTodo = (e: FormEvent) => {
    e.preventDefault()
    onSubmit(todo)
    setTodo(prevTodo => ({ ...prevTodo, title: '', priority: PRIORITY.MID }))
  }

  return (
    <>
      <Button className="w-[100px]" color="primary" variant="shadow" onPress={onOpen}>
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
            <form onSubmit={handleSubmitTodo}>
              <ModalHeader className="flex flex-col gap-1">Add new Todo</ModalHeader>

              <ModalBody>
                <Input
                  required
                  type="text"
                  label="Title"
                  placeholder="Enter your task"
                  value={todo?.title}
                  onChange={(e) => handleChangeTodo({ title: e.target.value })}
                  size="md"
                />

                <Select
                  value={todo?.priority}
                  defaultSelectedKeys={[PRIORITY.MID]}
                  label="Priority"
                  placeholder="Select task priority"
                  onChange={(e) => handleChangeTodo({ priority: e.target.value })}
                >
                  {
                    Object.values(PRIORITY).map((priority) => (
                      <SelectItem key={priority}>{priority}</SelectItem>
                    ))
                  }
                </Select>
              </ModalBody>

              <ModalFooter>
                <Button type="submit" isDisabled={!isValid} color="primary" onPress={onClose}>
                  Add
                </Button>
              </ModalFooter>
            </form>
          )}
        </ModalContent>
      </Modal>
    </>
  )
}

export default TodoForm
