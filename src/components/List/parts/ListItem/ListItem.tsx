import { FC } from 'react'
import { useDispatch } from 'react-redux'
import { Card, CardBody, Checkbox } from '@heroui/react'

import ItemDropdown from './parts/ItemDropdown.tsx'

import {deleteTask, changeStatus} from '../../../../store/todoSlice.ts'

import Todo from '../../../../models/Todo.ts'

type Props = {
  todo: Todo
}

const ListItem: FC<Props> = ({ todo }) => {
  const dispatch = useDispatch()

  const handleDeleteTodo = (id: string) => {
    dispatch(deleteTask(id))
  }

  const toggleTaskStatus = (id: string) => {
    dispatch(changeStatus(id))
  }

  return (
    <Card className="listItem">
      <CardBody className="flex flex-row justify-between items-center p-2">
        <div>
          <Checkbox defaultSelected={todo.isDone} lineThrough onChange={() => toggleTaskStatus(todo.id)}>
            {todo.title}
          </Checkbox>
        </div>

        <div>
          <ItemDropdown onEdit={() => console.log('Edit!')} onDelete={() => handleDeleteTodo(todo.id)} />
        </div>
      </CardBody>
    </Card>
  )
}
export default ListItem
