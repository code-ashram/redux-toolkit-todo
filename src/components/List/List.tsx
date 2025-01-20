import { FC, useMemo } from 'react'

import ListItem from './parts/ListItem.tsx'

import Todo from '../../models/Todo.ts'
import { STATUS } from '../../models'

type Props = {
  list: Todo[]
  status: STATUS
}

const List: FC<Props> = ({ list, status }) => {
  const listWithStatus: Todo[] = useMemo(() => {
    {
      switch (status) {
        case STATUS.COMPLETED:
          return list.filter((listItem) => listItem.isDone)
        case STATUS.ACTIVE:
          return list.filter((listItem) => !listItem.isDone)
        default:
          return list.map((listItem) => listItem)
      }
    }
  }, [list, status])

  return (
    listWithStatus.map((listItem) => <ListItem key={listItem.id} todo={listItem} />)
  )
}

export default List

