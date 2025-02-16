import { FC } from 'react'
import { useDispatch } from 'react-redux'
import { Button, Input, Navbar, NavbarBrand, NavbarContent } from '@heroui/react'

import ThemeSwitcher from '../ThemeSwitcher'

import { findTodo, selectTask } from '../../store/todoSlice.ts'

import { INITIAL_FIELDS } from '../TodoForm/constants.ts'

import { AddIcon, Logo, SearchIcon } from '../../assets'

const TodoHeader: FC = () => {
  const dispatch = useDispatch()

  const handleCreateTodo = () => {
    dispatch(selectTask(INITIAL_FIELDS))
  }

  const handleFindTodo = (todoTitle: string) => {
    dispatch(findTodo(todoTitle))
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

      <NavbarContent as="div" className="items-center" justify="center">
        <ThemeSwitcher />

        <Input
          classNames={{
            base: 'max-w-full sm:max-w-[10rem] h-10',
            mainWrapper: 'h-full',
            input: 'text-small',
            inputWrapper:
              'h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20'
          }}
          onChange={(e) => handleFindTodo(e.target.value)}
          placeholder="Type to search..."
          size="sm"
          startContent={<SearchIcon size={18} />}
          type="search"
        />
      </NavbarContent>

      <NavbarContent justify="end">
        <Button className="p-3 w-[70px]" isIconOnly color="primary" variant="shadow" onPress={handleCreateTodo}>
          <AddIcon />
        </Button>
      </NavbarContent>
    </Navbar>
  )
}

export default TodoHeader
