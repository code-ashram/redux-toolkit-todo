import { FC } from 'react'
import { Button, Input, Navbar, NavbarBrand, NavbarContent } from '@heroui/react'

import TodoForm from '../TodoForm'
import ThemeSwitcher from '../ThemeSwitcher'

import Todo from '../../models/Todo.ts'
import { INITIAL_FIELDS } from '../TodoForm/constants.ts'

import { AddIcon, Logo, SearchIcon } from '../../assets'


type Props = {
  task: Todo | Partial<Todo> | null
  onSelect: (task: Todo | Partial<Todo> | null) => void
}

const TodoNavbar: FC<Props> = ({ task, onSelect }) => {
  const onClose = () => {
    onSelect(null)
  }

  const handleCreateTodo = () => {
    onSelect(INITIAL_FIELDS)
  }

  return (
    <Navbar>
      <NavbarContent justify="start">
        <NavbarBrand>
          <a className="flex items-center content-center" href="https://github.com/code-ashram">
            <Logo />
            <p className="hidden sm:block font-bold text-inherit ml-1">Code Ashram</p>
          </a>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent justify="center">
        <Button className="w-[100px]" color="primary" variant="shadow" onPress={handleCreateTodo}>
          <AddIcon />
        </Button>

        {task && (
          <TodoForm task={task} onClose={onClose} />
        )}
      </NavbarContent>

      <NavbarContent as="div" className="items-center" justify="end">
        <ThemeSwitcher />

        <Input
          classNames={{
            base: 'max-w-full sm:max-w-[10rem] h-10',
            mainWrapper: 'h-full',
            input: 'text-small',
            inputWrapper:
              'h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20'
          }}
          placeholder="Type to search..."
          size="sm"
          startContent={<SearchIcon size={18} />}
          type="search"
        />
      </NavbarContent>
    </Navbar>
  )
}

export default TodoNavbar
