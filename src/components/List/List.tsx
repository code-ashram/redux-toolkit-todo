import { FC } from 'react'
import { useSelector } from 'react-redux'

import ListItem from './parts/ListItem/ListItem.tsx'
import EmptyListItem from './parts/EmptyListItem.tsx'

import { todos } from '../../store/todoSlice.ts'

import Todo from '../../models/Todo.ts'
import { Order } from '../../models/Order.ts'

type Props = {
  orderDirection: Order
  onEdit: (todo: Todo) => void
}

const List: FC<Props> = ({ onEdit }) => {
  const searchTodo = useSelector(todos)

  return (
    searchTodo.length
      ? searchTodo.map((todo) => (
        <ListItem key={todo.id} todo={todo} onEdit={() => onEdit(todo)} />
      ))
      : <EmptyListItem />
  )
}

export default List

