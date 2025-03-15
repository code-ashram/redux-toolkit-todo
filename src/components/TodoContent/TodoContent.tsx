import { FC } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button, Select, SelectItem, Tab, Tabs } from '@heroui/react'

import { selectTask, order } from '../../store/todoSlice.ts'
import {
  sortByPeriod,
  sortByStatus,
  toggleOrderByDate,
  toggleOrderByTitle
} from '../../store/todoSlice.ts'

import List from '../List/List.tsx'

import Todo from '../../models/Todo.ts'
import Period from '../../models/Period.ts'
import Order from '../../models/Order.ts'
import Status from '../../models/Status.ts'
import { timePeriod } from '../../utils/utils.ts'

import FirstDateIco from '../../assets/FirstDateIco'
import DescendingIcon from '../../assets/DescendingIcon.tsx'
import LastDateIco from '../../assets/LastDateIco.tsx'
import AscendingIcon from '../../assets/AscendingIcon.tsx'

const TodoContent: FC = () => {
  const dispatch = useDispatch()
  const orderDirection = useSelector(order)

  const handleToggleOrderByDate = () => {
    dispatch(toggleOrderByDate())
  }

  const handleToggleOrderByTitle = () => {
    dispatch(toggleOrderByTitle())
  }

  const onEdit = (todo: Todo) => {
    dispatch(selectTask(todo))
  }

  const handleChangeStatus = (status: Status) => {
    dispatch(sortByStatus(status))
  }

  const handleChangePeriod = (period: Period) => {
    dispatch(sortByPeriod(period))
  }

  return (
    <div className="relative flex px-6 w-full flex-col">
      <div className="absolute top-[2px] right-[26px] flex items-center justify-center gap-4 z-10">
        <Button aria-label="Sort by ascending" variant="solid" isIconOnly onPress={handleToggleOrderByDate}>
          {orderDirection === Order.Date_Ascending
            ? <FirstDateIco />
            : <LastDateIco />
          }
        </Button>

        <Button aria-label="Sort by ascending" variant="solid" isIconOnly onPress={handleToggleOrderByTitle}>
          {orderDirection === Order.Title_Ascending
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
            <SelectItem key={period.key} onPress={() => handleChangePeriod(period.key)}>
              {period.value}
            </SelectItem>)
          }
        </Select>
      </div>

      <Tabs aria-label="Options" size="lg" onSelectionChange={(e) => handleChangeStatus(e as Status)}>
        {Object.values(Status).map((status) =>
          <Tab key={status} title={status}>
            <List onEdit={onEdit} />
          </Tab>
        )}
      </Tabs>
    </div>
  )
}

export default TodoContent
