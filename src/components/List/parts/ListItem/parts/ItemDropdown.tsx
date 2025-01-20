import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from '@heroui/react'
import { DeleteDocumentIcon, EditDocumentIcon } from '../../../../../assets'

const ItemDropdown = () => {

  return (
    <Dropdown placement="bottom-end">
      <DropdownTrigger >
        <Button size="sm" variant="bordered">...</Button>
      </DropdownTrigger>

      <DropdownMenu aria-label="Dropdown menu with icons" variant="faded">
        <DropdownItem
          key="edit"
          startContent={<EditDocumentIcon />}
        >
          Edit
        </DropdownItem>

        <DropdownItem
          key="delete"
          className="text-danger"
          color="danger"
          startContent={<DeleteDocumentIcon />}
        >
          Delete
        </DropdownItem>

      </DropdownMenu>
    </Dropdown>
  )
}

export default ItemDropdown
