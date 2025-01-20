import { Card, CardBody, Checkbox } from '@heroui/react'

import Todo from '../../../models/Todo.ts'
import { FC } from 'react'

type Props = {
  todo: Todo,
  item?: Todo
}

const ListItem: FC<Props> = ({ todo }) => {

  return (
    <Card>
      <CardBody>
        <Checkbox defaultSelected={todo.isDone} lineThrough>
          {todo.title}
        </Checkbox>

      </CardBody>
    </Card>
  )
}
export default ListItem
