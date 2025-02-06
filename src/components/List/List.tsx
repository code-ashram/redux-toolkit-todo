import { FC, useMemo } from 'react'
import { useSelector } from 'react-redux'

import ListItem from './parts/ListItem/ListItem.tsx'
import Todo from '../../models/Todo.ts'
import { RootState } from '../../store/todoStore.ts'
import { Order } from '../../models/Order.ts'
import {
  sortListByAscendingTitle,
  sortListByDescendingTitle,
  sortListByFirstDate,
  sortListByLastDate
} from '../../utils/utils.ts'
import EmptyListItem from './parts/EmptyListItem.tsx'
import Status from '../../models/Status.ts'

type Props = {
  status: Status
  orderDirection: Order
  onEdit: (todo: Todo) => void
}

const List: FC<Props> = ({ status, orderDirection, onEdit }) => {
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

  switch (orderDirection) {
    case Order.Date_Ascending:
      sortListByFirstDate(filteredTasks)
      break
    case Order.Date_Descending:
      sortListByLastDate(filteredTasks)
      break
    case Order.Title_Ascending:
      sortListByAscendingTitle(filteredTasks)
      break
    case Order.Title_Descending:
      sortListByDescendingTitle(filteredTasks)
      break
    default:
      sortListByFirstDate(filteredTasks)
  }

  return (
    filteredTasks.length
      ? filteredTasks.map((todo) => (
        <ListItem key={todo.id} todo={todo} onEdit={() => onEdit(todo)} />
      ))
      : <EmptyListItem />
  )
}

export default List

