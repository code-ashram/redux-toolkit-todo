import { FC, useMemo } from 'react'
import { useSelector } from 'react-redux'

import ListItem from './parts/ListItem/ListItem.tsx'
import Todo from '../../models/Todo.ts'
import { STATUS } from '../../models'
import { RootState } from '../../store/todoStore.ts'

type Props = {
  status: STATUS
  onEdit: (todo: Todo) => void
}

const List: FC<Props> = ({ status, onEdit }) => {
  const { tasks } = useSelector((state: RootState) => state)

  const filteredTasks: Todo[] = useMemo(() => {
    {
      switch (status) {
        case STATUS.COMPLETED:
          return tasks.filter((listItem) => listItem.isDone)
        case STATUS.ACTIVE:
          return tasks.filter((listItem) => !listItem.isDone)
        default:
          return tasks.map((listItem) => listItem)
      }
    }
  }, [tasks, status])

  return (
    filteredTasks.map((todo) => (
      <ListItem key={todo.id} todo={todo} onEdit={() => onEdit(todo)} />
    ))
  )
}

export default List

