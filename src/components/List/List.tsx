import { FC } from 'react'
import { useSelector } from 'react-redux'
import { Spinner } from '@heroui/react'

import { todos } from '../../store/todoSlice.ts'
import { useGetTodosQuery } from '../../api/todoApi.ts'

import ListItem from './parts/ListItem/ListItem.tsx'
import EmptyListItem from './parts/EmptyListItem.tsx'

import Todo from '../../models/Todo.ts'

type Props = {
  onEdit: (todo: Todo) => void
}

const List: FC<Props> = ({ onEdit }) => {
  const searchTodo = useSelector(todos)
  const { isLoading, data } = useGetTodosQuery()

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

