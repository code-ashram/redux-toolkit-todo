import { FC } from 'react'
import { useDispatch } from 'react-redux'
import { Card, CardBody, Checkbox } from '@heroui/react'

import ItemDropdown from './parts/ItemDropdown.tsx'

import {deleteTask, changeStatus} from '../../../../store/todoSlice.ts'

import Todo from '../../../../models/Todo.ts'
import { convertTodoDate } from '../../../../utils/utils.ts'

type Props = {
  todo: Todo
  onEdit: () => void
}

const ListItem: FC<Props> = ({ todo, onEdit }) => {
  const dispatch = useDispatch()

  const onDeleteTodo = (id: string) => {
    dispatch(deleteTask(id))
  }

  const onToggleStatus = (id: string) => {
    dispatch(changeStatus(id))
  }

  return (
    <Card className="listItem">
      <CardBody className="flex flex-row justify-between items-center p-2">
        <div>
          <Checkbox defaultSelected={todo.isDone} onChange={() => onToggleStatus(todo.id)} lineThrough>
            {todo.title}
          </Checkbox>
        </div>

        <div className="flex items-center gap-4">
          <p>
            {convertTodoDate(todo.creationTime)}
          </p>

          <ItemDropdown onEdit={onEdit} onDelete={() => onDeleteTodo(todo.id)} />
        </div>
      </CardBody>
    </Card>
  )
}
export default ListItem
