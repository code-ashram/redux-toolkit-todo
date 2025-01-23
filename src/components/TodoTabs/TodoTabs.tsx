import { FC } from 'react'
import { Tab, Tabs } from '@heroui/react'

import List from '../List/List.tsx'

import { STATUS } from '../../models'
import mockData from '../../api/mockData.ts'

const TodoTabs: FC = () => (
  <div className="flex w-full flex-col">
    <Tabs aria-label="Options" size="lg">
      <Tab key="all" title={STATUS.ALL}>
        <List list={mockData} status={STATUS.ALL} />
      </Tab>

      <Tab key="active" title={STATUS.ACTIVE}>
        <List list={mockData} status={STATUS.ACTIVE} />
      </Tab>

      <Tab key="completed" title={STATUS.COMPLETED}>
        <List list={mockData} status={STATUS.COMPLETED} />
      </Tab>
    </Tabs>
  </div>
)

export default TodoTabs
