import { FC, FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Form,
  Input,
  Select,
  SelectItem,
  useDisclosure
} from '@heroui/react'

import { createTask, updateTask } from '../../store/todoSlice.ts'

import { Priority } from '../../models'
import Todo from '../../models/Todo.ts'

type Props = {
  task: Todo | Partial<Todo>
  onClose: () => void
}

const TodoForm: FC<Props> = ({ task, onClose }) => {
  const dispatch = useDispatch()
  const [todo, setTodo] = useState<Todo | Partial<Todo>>(task)
  const { onOpenChange } = useDisclosure()

  const handleChangeTodo = (payload: Partial<Todo>) => {
    setTodo((prevTodo) => ({ ...prevTodo, ...payload }))
  }

  const handleSubmitTodo = (e: FormEvent) => {
    e.preventDefault()
    dispatch(task.id ? updateTask(todo as Todo) : createTask({
      title: todo.title || '',
      priority: todo.priority || ''
    }))
    onClose()
  }

  return (
    <Modal
      isDismissable={false}
      isKeyboardDismissDisabled={true}
      onOpenChange={onOpenChange}
      closeButton={
        <Button color="default" variant="light" onPress={onClose}>
          X
        </Button>
      }
      autoFocus
      isOpen
    >
      <ModalContent>
        <Form
          className="w-full max-w-lg flex flex-col gap-4"
          validationBehavior="native"
          onReset={onClose}
          onSubmit={handleSubmitTodo}
        >
          <ModalHeader className="flex flex-col gap-1">Add new task</ModalHeader>

          <ModalBody className="w-full">
            <Input
              type="text"
              size="md"
              label="Title"
              placeholder="Enter your task"
              value={todo.title}
              onChange={(e) => handleChangeTodo({ title: e.target.value })}
              required
            />

            <Select
              label="Priority"
              placeholder="Select task priority"
              defaultSelectedKeys={[Priority.Mid]}
              value={todo?.priority}
              onChange={(e) => handleChangeTodo({ priority: e.target.value })}
            >
              {
                Object.values(Priority).map((priority) => (
                  <SelectItem key={priority}>{priority}</SelectItem>
                ))
              }
            </Select>
          </ModalBody>

          <ModalFooter>
            <Button type="reset" color="default" variant="flat">
              Close
            </Button>

            <Button type="submit" isDisabled={!todo.title?.trim()} color="primary">
              Add
            </Button>
          </ModalFooter>
        </Form>
      </ModalContent>
    </Modal>
  )
}

export default TodoForm
