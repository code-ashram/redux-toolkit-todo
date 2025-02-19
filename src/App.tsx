import { FC } from 'react'

import TodoHeader from './components/TodoHeader'
import TodoContent from './components/TodoContent'
import TodoForm from './components/TodoForm'

import './App.scss'

export const App: FC = () => {

  return (
    <>
      <TodoHeader />

      <TodoForm />

      <TodoContent />
    </>
  )
}

export default App
