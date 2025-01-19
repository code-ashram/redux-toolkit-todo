import { Card, CardBody } from '@heroui/react'

import Todo from '../../../models/Todo.ts'
import { FC } from 'react'

type Props = {
  todo: Todo
}

const ListItem: FC<Props> = ({todo}) => {

  return (
    <Card>
      <CardBody>
        <p>{todo.title}</p>
      </CardBody>
    </Card>
  )
}
export default ListItem
