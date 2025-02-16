import { FC, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Button, Select, SelectItem, Tab, Tabs } from '@heroui/react'
import { changeStatus } from '../../store/statusSlice.ts'
import { changePeriod } from '../../store/periodSlice.ts'

import List from '../List/List.tsx'

import Todo from '../../models/Todo.ts'
import Period from '../../models/Period.ts'
import Order from '../../models/Order.ts'

import DescendingIcon from '../../assets/DescendingIcon'
import FirstDateIco from '../../assets/FirstDateIco'
import AscendingIcon from '../../assets/AscendingIcon.tsx'
import LastDateIco from '../../assets/LastDateIco.tsx'
import Status from '../../models/Status.ts'
import { timePeriod } from '../../utils/utils.ts'

type Props = {
  onEdit: (todo: Todo) => void
}

const TodoContent: FC<Props> = ({ onEdit }) => {
  const dispatch = useDispatch()
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

  const handleChangeStatus = (status: Status) => {
    dispatch(changeStatus(status))
  }

  const handleChangePeriod = (period: Period) => {
    dispatch(changePeriod(period))
  }

  return (
    <div className="relative flex px-6 w-full flex-col">
      <div className="absolute top-[2px] right-[26px] flex items-center justify-center gap-4 z-10">
        <Button aria-label="Sort by ascending"
                variant="solid"
                isIconOnly
                onPress={handleToggleOrderByDate}>
          {
            orderDirection === Order.Date_Descending
              ? <LastDateIco />
              : <FirstDateIco />
          }
        </Button>

        <Button aria-label="Sort by ascending"
                variant="solid"
                isIconOnly
                onPress={handleToggleOrderByTitle}>
          {
            orderDirection === Order.Title_Descending
              ? <AscendingIcon />
              : <DescendingIcon />
          }
        </Button>

        <Select
          className="max-w-xs w-[150px]"
          color="default"
          defaultSelectedKeys={[String(Period.All)]}
          placeholder="Select a period"
        >
          {timePeriod.map((period) =>
            <SelectItem key={period.key} onPress={() =>handleChangePeriod(period.key)}>
              {period.value}
            </SelectItem>)
          }
        </Select>
      </div>

      <Tabs aria-label="Options" size="lg" onSelectionChange={(e) => handleChangeStatus(e as Status)}>
        {Object.values(Status).map((status) =>
          <Tab key={status} title={status}>
            <List orderDirection={orderDirection} onEdit={onEdit} />
          </Tab>
        )}
      </Tabs>
    </div>
  )
}

export default TodoContent
