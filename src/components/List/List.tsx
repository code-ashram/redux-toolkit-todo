import { FC, useMemo } from 'react'
import { useSelector } from 'react-redux'

import { RootState } from '../../store/todoStore.ts'

import ListItem from './parts/ListItem/ListItem.tsx'
import EmptyListItem from './parts/EmptyListItem.tsx'

import Todo from '../../models/Todo.ts'
import Status from '../../models/Status.ts'
import Period from '../../models/Period.ts'
import { Order } from '../../models/Order.ts'
import {
  sortListByAscendingTitle,
  sortListByDescendingTitle,
  sortListByFirstDate,
  sortListByLastDate
} from '../../utils/utils.ts'

type Props = {
  status: Status
  period: Period
  orderDirection: Order
  onEdit: (todo: Todo) => void
  search: string
}

const List: FC<Props> = ({ status, period, search, orderDirection, onEdit }) => {
  const { tasks } = useSelector((state: RootState) => state)

  const filteredTasks: Todo[] = useMemo(() => tasks
    .filter((todo) => {
      let isVisible: boolean

      const isAvailable: boolean = period === Period.All
        ? true
        : new Date(todo.creationTime) > new Date(new Date().setDate(new Date().getDate() - period))

      switch (status) {
        case Status.Completed:
          isVisible = todo.isDone
          break
        case Status.Active:
          isVisible = !todo.isDone
          break
        default:
          isVisible = true
      }

      return isVisible && isAvailable && todo.title.toLowerCase().includes(search.toLowerCase())

    }), [period, search, status, tasks])

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

