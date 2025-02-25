import { FC } from 'react'
import { useSelector } from 'react-redux'

import ListItem from './parts/ListItem/ListItem.tsx'
import EmptyListItem from './parts/EmptyListItem.tsx'

import { order, todos } from '../../store/todoSlice.ts'

import Todo from '../../models/Todo.ts'
import { Order } from '../../models/Order.ts'
import {
  sortListByAscendingTitle,
  sortListByDescendingTitle,
  sortListByFirstDate,
  sortListByLastDate
} from '../../utils/utils.ts'

type Props = {
  onEdit: (todo: Todo) => void
}

const List: FC<Props> = ({ onEdit }) => {
  const searchTodo = useSelector(todos)
  const orderDirection = useSelector(order)

  console.log(orderDirection)

  switch (orderDirection) {
    case Order.Date_Ascending:
      sortListByFirstDate(searchTodo)
      break
    case Order.Date_Descending:
      sortListByLastDate(searchTodo)
      break
    case Order.Title_Ascending:
      sortListByAscendingTitle(searchTodo)
      break
    case Order.Title_Descending:
      sortListByDescendingTitle(searchTodo)
      break
    default:
      sortListByFirstDate(searchTodo)
  }

  return (
    searchTodo.length
      ? searchTodo.map((todo) => (
        <ListItem key={todo.id} todo={todo} onEdit={() => onEdit(todo)} />
      ))
      : <EmptyListItem />
  )
}

export default List

