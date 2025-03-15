import { FC } from 'react'
import { useDispatch } from 'react-redux'
import { Card, CardBody, Checkbox } from '@heroui/react'

import ItemDropdown from './parts/ItemDropdown.tsx'

import Todo from '../../../../models/Todo.ts'
import { convertTodoDate } from '../../../../utils/utils.ts'
import PriorityIcon from '../../../../assets/PriorityIcon.tsx'
import { patchTask } from '../../../../store/todoActions.ts'
import { AppDispatch } from '../../../../store/store.ts'
import { useDeleteTaskMutation } from '../../../../api/todoApi.ts'

type Props = {
  todo: Todo
  onEdit: () => void
}

const ListItem: FC<Props> = ({ todo, onEdit }) => {
  const dispatch = useDispatch<AppDispatch>()
  const [deleteTask] = useDeleteTaskMutation()

  const onDeleteTodo = (id: string) => {
    deleteTask(id)
  }

  const onToggleStatus = (id: string, payload: Partial<Todo>) => {
    dispatch(patchTask({ id, payload }))
  }

  return (
    <Card className="listItem">
      <CardBody className="flex flex-row justify-between items-center p-2">
        <div>
          <Checkbox
            lineThrough
            defaultSelected={todo.isDone}
            onChange={() => onToggleStatus(todo.id, { isDone: !todo.isDone })}
          >
            {todo.title}
          </Checkbox>
        </div>

        <div className="flex items-center gap-4">
          <PriorityIcon priority={todo.priority} />

          <p className="w-[230px]">
            {convertTodoDate(todo.creationTime)}
          </p>

          <ItemDropdown onEdit={onEdit} onDelete={() => onDeleteTodo(todo.id)} />
        </div>
      </CardBody>
    </Card>
  )
}
export default ListItem
