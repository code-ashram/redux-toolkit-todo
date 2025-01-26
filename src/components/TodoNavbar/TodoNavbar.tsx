import { FC } from 'react'
import { useDispatch } from 'react-redux'
import {createTask} from '../../store/todoSlice.ts'
import { Input, Navbar, NavbarBrand, NavbarContent } from '@heroui/react'

import TodoForm from '../TodoForm'
import ThemeSwitcher from '../ThemeSwitcher'

import { Logo, SearchIcon } from '../../assets'
import Todo from '../../models/Todo.ts'

const TodoNavbar: FC = () => {
  const dispatch = useDispatch()

  const handleCreateTodo = (data: Pick<Todo, 'title' | 'priority'>) => {
    dispatch(createTask(data))
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
        <TodoForm onSubmit={handleCreateTodo} />
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
