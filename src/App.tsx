import { Tabs, Tab, Card, CardBody, Navbar, NavbarContent, NavbarBrand, Input } from '@heroui/react'

import ThemeSwitcher from './components/ThemeSwitcher'

import { Logo, SearchIcon } from './assets'

import './App.scss'

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
          <Tabs aria-label="Options">
            <Tab key="all" title="All">
              <Card>
                <CardBody>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </CardBody>
              </Card>
            </Tab>
            <Tab key="incompleted" title="Incompleted">
              <Card>
                <CardBody>
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                  ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
                  esse cillum dolore eu fugiat nulla pariatur.
                </CardBody>
              </Card>
            </Tab>
            <Tab key="completed" title="Completed">
              <Card>
                <CardBody>
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </CardBody>
              </Card>
            </Tab>
          </Tabs>
        </div>
      </div>
    </>
  )
}

export default App
