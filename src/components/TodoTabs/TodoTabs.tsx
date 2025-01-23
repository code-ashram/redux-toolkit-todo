import { FC } from 'react'
import { useSelector } from 'react-redux'
import { Tab, Tabs } from '@heroui/react'

import List from '../List/List.tsx'

import { RootState } from '../../store/todoStore.ts'

import { STATUS } from '../../models'

const TodoTabs: FC = () => {
  const { tasks } = useSelector((state: RootState) => state)

  return (
    <div className="flex w-full flex-col">
      <Tabs aria-label="Options" size="lg">
        {Object.values(STATUS).map((status) =>
          <Tab key={status} title={status}>
            <List list={tasks} status={status} />
          </Tab>
        )}
      </Tabs>
    </div>
  )
}

export default TodoTabs
