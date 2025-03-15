import { FC } from 'react'
import { Card, CardBody, Checkbox } from '@heroui/react'

import { useDeleteTaskMutation, usePatchTaskMutation } from '../../../../api/todoApi.ts'

import ItemDropdown from './parts/ItemDropdown.tsx'

import Todo from '../../../../models/Todo.ts'
import { convertTodoDate } from '../../../../utils/utils.ts'

import PriorityIcon from '../../../../assets/PriorityIcon.tsx'

type Props = {
  todo: Todo
  onEdit: () => void
}

const ListItem: FC<Props> = ({ todo, onEdit }) => {
  const [deleteTask] = useDeleteTaskMutation()
  const [patchTask] = usePatchTaskMutation()

  const onDeleteTodo = (id: string) => {
    deleteTask(id)
  }

  const onToggleStatus = (id: string, todo: Partial<Todo>) => {
    patchTask({ id, todo })
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
