import { FC } from 'react'
import { Button, Select, SelectItem, Tab, Tabs } from '@heroui/react'

import List from '../List/List.tsx'

import { Status } from '../../models'
import Todo from '../../models/Todo.ts'
import Period from '../../models/Period.ts'

import DescendingIcon from '../../assets/DescendingIcon'
import FirstDateIco from '../../assets/FirstDateIco'

type Props = {
  onEdit: (todo: Todo) => void
}

const TodoContent: FC<Props> = ({ onEdit }) => (
  <div className="relative flex px-6 w-full flex-col">
    <div className="absolute top-[2px] right-[26px] flex items-center justify-center gap-4 z-10">
      <Button aria-label="Sort by ascending" variant="faded" >
        <FirstDateIco />
      </Button>

      <Button aria-label="Sort by ascending" variant="faded" >
        <DescendingIcon />
      </Button>

      <Select
        key="period"
        className="max-w-xs w-[150px]"
        color="default"
        defaultSelectedKeys={[Period.All]}
        placeholder="Select a period"
      >
        {Object.values(Period).map((period) =>
          <SelectItem key={period}>{period}</SelectItem>)
        }
      </Select>
    </div>

    <Tabs aria-label="Options" size="lg">
      {Object.values(Status).map((status) =>
        <Tab key={status} title={status}>
          <List status={status} onEdit={onEdit} />
        </Tab>
      )}
    </Tabs>
  </div>
)

export default TodoContent
