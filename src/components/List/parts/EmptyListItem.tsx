import { FC } from 'react'
import { Card, CardBody } from '@heroui/react'

const EmptyListItem: FC = () => (
  <Card className="listItem">
    <CardBody className="flex flex-row justify-center items-center p-2">
        <p className='text-center'>Todo list is empty!</p>
    </CardBody>
  </Card>
)

export default EmptyListItem
