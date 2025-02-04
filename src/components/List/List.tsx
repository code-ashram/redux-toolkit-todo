import { FC, useMemo } from 'react'
import { useSelector } from 'react-redux'

import ListItem from './parts/ListItem/ListItem.tsx'
import Todo from '../../models/Todo.ts'
import { Status } from '../../models'
import { RootState } from '../../store/todoStore.ts'

type Props = {
  status: Status
  onEdit: (todo: Todo) => void
}

const List: FC<Props> = ({ status, onEdit }) => {
  const { tasks } = useSelector((state: RootState) => state)

  const filteredTasks: Todo[] = useMemo(() => {
    {
      switch (status) {
        case Status.Completed:
          return tasks.filter((listItem) => listItem.isDone)
        case Status.Active:
          return tasks.filter((listItem) => !listItem.isDone)
        default:
          return tasks.map((listItem) => listItem)
      }
    }
  }, [tasks, status])

  return (
    filteredTasks.map((todo) => (
      <ListItem key={todo.id} todo={todo} onEdit={() => onEdit(todo)} />))
  )
}

export default List

