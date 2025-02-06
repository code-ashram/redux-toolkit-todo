import { FC, useState } from 'react'
import { Button, Select, SelectItem, Tab, Tabs } from '@heroui/react'

import List from '../List/List.tsx'

import Todo from '../../models/Todo.ts'

import Period from '../../models/Period.ts'
import Order from '../../models/Order.ts'

import DescendingIcon from '../../assets/DescendingIcon'
import FirstDateIco from '../../assets/FirstDateIco'
import Status from '../../models/Status.ts'
import AscendingIcon from '../../assets/AscendingIcon.tsx'
import LastDateIco from '../../assets/LastDateIco.tsx'

type Props = {
  onEdit: (todo: Todo) => void
}

const TodoContent: FC<Props> = ({ onEdit }) => {
  const [orderDirection, setOrderDirection] = useState<Order>(Order.Date_Descending)
  const [orderMode, setOrderMode] = useState<boolean>(true)

  const handleToggleOrderByDate = () => {
    setOrderMode(prevOrderMode => !prevOrderMode)
    setOrderDirection(orderMode ? Order.Date_Ascending : Order.Date_Descending)
  }

  const handleToggleOrderByTitle = () => {
    setOrderMode(prevOrderMode => !prevOrderMode)
    setOrderDirection(orderMode ? Order.Title_Ascending : Order.Title_Descending)
  }

  return (
    <div className="relative flex px-6 w-full flex-col">
      <div className="absolute top-[2px] right-[26px] flex items-center justify-center gap-4 z-10">
        <Button aria-label="Sort by ascending" variant="faded" onPress={handleToggleOrderByDate}>
          {
            orderDirection === Order.Date_Descending
              ? <LastDateIco />
              : <FirstDateIco />
          }
        </Button>

        <Button aria-label="Sort by ascending" variant="faded" onPress={handleToggleOrderByTitle}>
          {
            orderDirection === Order.Title_Descending
              ? <AscendingIcon />
              : <DescendingIcon />
          }
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
            <List status={status} orderDirection={orderDirection} onEdit={onEdit} />
          </Tab>
        )}
      </Tabs>
    </div>
  )
}

export default TodoContent
