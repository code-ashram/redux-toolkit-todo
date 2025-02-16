import { FC } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import TodoHeader from './components/TodoHeader'
import TodoContent from './components/TodoContent'
import TodoForm from './components/TodoForm'

import { selectedTodo, selectTask } from './store/todoSlice.ts'

import './App.scss'

export const App: FC = () => {
  const dispatch = useDispatch()
  const selectedTask = useSelector(selectedTodo)

  const onClose = () => {
    dispatch(selectTask(null))
  }

  return (
    <>
      <TodoHeader />

      {selectedTask && (
        <TodoForm task={selectedTask} onClose={onClose} />
      )}

      <TodoContent />
    </>
  )
}

export default App
