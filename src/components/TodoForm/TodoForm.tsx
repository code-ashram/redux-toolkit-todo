import { FC, FormEvent } from 'react'
import { useDispatch, useSelector } from 'react-redux'
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

import { clearTodo, selectedTodo, selectTask } from '../../store/todoSlice.ts'

import { Priority } from '../../models'
import Todo from '../../models/Todo.ts'
import { AppDispatch } from '../../store/store.ts'
import { usePostTaskMutation, usePutTaskMutation } from '../../api/todoApi.ts'

const TodoForm: FC = () => {
  const dispatch = useDispatch<AppDispatch>()
  const selectedTask = useSelector(selectedTodo)
  const { onOpenChange } = useDisclosure()
  const [postTask] = usePostTaskMutation()
  const [putTask] = usePutTaskMutation()

  const handleSubmitTodo = async (e: FormEvent) => {
    e.preventDefault()

    if (!selectedTask) dispatch(selectTask(null))

    const mutation = selectedTask?.id ? putTask(selectedTask as Todo) : postTask({
      title: selectedTask?.title || '',
      priority: selectedTask?.priority as Priority
    })

    try {
      await mutation.unwrap()
    } catch (error) {
      console.error('Failed to save todo:', error)
    }
  }

  const handleCloseForm = () => {
    dispatch(clearTodo())
  }

  const handleChangeTodo = (payload: Partial<Todo>) => {
    dispatch(selectTask(payload))
  }

  return (
    <Modal
      isDismissable={false}
      isKeyboardDismissDisabled={true}
      onOpenChange={onOpenChange}
      closeButton={
        <Button color="default" variant="light" onPress={handleCloseForm}>
          X
        </Button>
      }
      autoFocus
      isOpen={!!selectedTask}
    >
      <ModalContent>
        <Form
          className="w-full max-w-lg flex flex-col gap-4"
          validationBehavior="native"
          onReset={handleCloseForm}
          onSubmit={handleSubmitTodo}
        >
          <ModalHeader className="flex flex-col gap-1">
            {selectedTask?.id ? 'Edit task' : 'Add new task'}
          </ModalHeader>

          <ModalBody className="w-full">
            <Input
              type="text"
              size="md"
              label="Title"
              placeholder="Enter your task"
              value={selectedTask?.title}
              onChange={(e) => handleChangeTodo({ title: e.target.value })}
              required
            />

            <Select
              label="Priority"
              placeholder="Select task priority"
              defaultSelectedKeys={[Priority.Mid]}
              value={selectedTask?.priority}
              onChange={(e) => handleChangeTodo({ priority: e.target.value as Priority })}
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

            <Button type="submit" isDisabled={!selectedTask?.title?.trim()} color="primary">
              {selectedTask?.id ? 'Save' : 'Add'}
            </Button>
          </ModalFooter>
        </Form>
      </ModalContent>
    </Modal>
  )
}

export default TodoForm
