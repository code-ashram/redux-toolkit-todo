import { FC, useState } from 'react'

import TodoHeader from './components/TodoHeader'
import TodoContent from './components/TodoContent'
import TodoForm from './components/TodoForm'

import Todo from './models/Todo.ts'

import Period from './models/Period.ts'

import './App.scss'

export const App: FC = () => {
  const [selectedTask, setSelectedTask] = useState<Todo | Partial<Todo> | null>(null)
  const [period, setPeriod] = useState<Period>(Period.All)

  const onEdit = (todo: Todo) => {
    setSelectedTask(todo)
  }

  const handleClose = () => {
    setSelectedTask(null)
  }

  const handleChangePeriod = (period: Period) => {
    setPeriod(period)
  }

  return (
    <>
      <TodoHeader task={selectedTask} onSelect={setSelectedTask} />

      {selectedTask && (
        <TodoForm task={selectedTask} onClose={handleClose} />
      )}

      <TodoContent period={period} onEdit={onEdit} onChange={handleChangePeriod}/>
    </>
  )
}

export default App
