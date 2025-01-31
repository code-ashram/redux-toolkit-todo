import { FC } from 'react'
import { Tab, Tabs } from '@heroui/react'

import List from '../List/List.tsx'

import { STATUS } from '../../models'
import Todo from '../../models/Todo.ts'

type Props = {
  onEdit: (todo: Todo) => void
}

const TodoContent: FC<Props> = ({ onEdit }) => (
  <div className="flex w-full flex-col">
    <Tabs aria-label="Options" size="lg">
      {Object.values(STATUS).map((status) =>
        <Tab key={status} title={status}>
          <List status={status} onEdit={onEdit} />
        </Tab>
      )}
    </Tabs>
  </div>
)

export default TodoContent
