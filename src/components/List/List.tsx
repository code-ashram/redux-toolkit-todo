import { FC } from 'react'
import { useSelector } from 'react-redux'

import ListItem from './parts/ListItem/ListItem.tsx'
import EmptyListItem from './parts/EmptyListItem.tsx'

import { order, todos } from '../../store/todoSlice.ts'
import { useGetTodosQuery } from '../../api/todoApi.ts'

import Todo from '../../models/Todo.ts'
import { Order } from '../../models/Order.ts'
import {
  sortListByAscendingTitle,
  sortListByDescendingTitle,
  sortListByFirstDate,
  sortListByLastDate
} from '../../utils/utils.ts'
import { Spinner } from '@heroui/react'

type Props = {
  onEdit: (todo: Todo) => void
}

const List: FC<Props> = ({ onEdit }) => {
  const searchTodo = useSelector(todos)
  const { isLoading, data } = useGetTodosQuery()
  const orderDirection = useSelector(order)

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
    isLoading
      ? <Spinner color="warning" label="Loading..." />
      : data && searchTodo.length ?
        searchTodo.map((todo) => (
          <ListItem key={todo.id} todo={todo} onEdit={() => onEdit(todo)} />
        ))
        : <EmptyListItem />
  )
}

export default List

