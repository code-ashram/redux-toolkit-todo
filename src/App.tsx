import { FC } from 'react'
import TodoNavbar from './components/TodoNavbar'
import TodoTabs from './components/TodoTabs'

import './App.scss'

export const App:FC = () => {

  return (
    <>
      <TodoNavbar />

      <TodoTabs />
    </>
  )
}

export default App
