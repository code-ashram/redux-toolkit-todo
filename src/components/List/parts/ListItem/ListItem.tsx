import { Card, CardBody, Checkbox } from '@heroui/react'

import Todo from '../../../../models/Todo.ts'
import { FC } from 'react'
import ItemDropdown from './parts/ItemDropdown.tsx'

type Props = {
  todo: Todo,
  item?: Todo
}

const ListItem: FC<Props> = ({ todo }) => {

  return (
    <Card className="listItem">
      <CardBody className="flex flex-row justify-between items-center p-2">
        <div>
          <Checkbox defaultSelected={todo.isDone} lineThrough>
            {todo.title}
          </Checkbox>
        </div>

        <div>
          <ItemDropdown />
        </div>
      </CardBody>
    </Card>
  )
}
export default ListItem
