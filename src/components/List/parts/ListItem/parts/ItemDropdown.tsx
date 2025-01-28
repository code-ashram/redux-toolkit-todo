import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from '@heroui/react'
import { DeleteDocumentIcon, EditDocumentIcon } from '../../../../../assets'
import { FC } from 'react'

type Props = {
  onEdit: () => void
  onDelete: () => void
}

const ItemDropdown: FC<Props> = ({ onEdit, onDelete }) => (
  <Dropdown placement="bottom-end">
    <DropdownTrigger>
      <Button size="sm" variant="bordered">...</Button>
    </DropdownTrigger>

    <DropdownMenu aria-label="Dropdown menu with icons" variant="faded">
      <DropdownItem
        key="edit"
        startContent={<EditDocumentIcon />}
        onPress={onEdit}
      >
        Edit
      </DropdownItem>

      <DropdownItem
        key="delete"
        className="text-danger"
        color="danger"
        startContent={<DeleteDocumentIcon />}
        onPress={onDelete}
      >
        Delete
      </DropdownItem>

    </DropdownMenu>
  </Dropdown>
)

export default ItemDropdown
