import { Input, Navbar, NavbarBrand, NavbarContent, Tab, Tabs } from '@heroui/react'



import ThemeSwitcher from './components/ThemeSwitcher'

import { STATUS } from './models'
import { Logo, SearchIcon } from './assets'

import './App.scss'
import List from './components/List/List.tsx'
import mockData from './api/mockData.ts'

export const App = () => {


  return (
    <>
      <Navbar>
        <NavbarContent justify="start">
          <NavbarBrand>
            <a className="flex items-center content-center" href="https://github.com/code-ashram">
              <Logo />
              <p className="hidden sm:block font-bold text-inherit ml-1">Code Ashram</p>
            </a>
          </NavbarBrand>
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

      <div className="flex flex-col px-4">

        <div className="flex w-full flex-col">
          <Tabs aria-label="Options" size="lg">
            <Tab key="all" title={STATUS.ALL}>
              <List list={mockData} status={STATUS.ALL}/>
            </Tab>

            <Tab key="active" title={STATUS.ACTIVE}>
              <List list={mockData} status={STATUS.ACTIVE}/>
            </Tab>

            <Tab key="completed" title={STATUS.COMPLETED}>
              <List list={mockData} status={STATUS.COMPLETED}/>
            </Tab>
          </Tabs>
        </div>
      </div>
    </>
  )
}

export default App
