import { FC, useState } from 'react'
import TodoNavbar from './components/TodoNavbar'
import TodoTabs from './components/TodoTabs'

import './App.scss'
import Todo from './models/Todo.ts'

export const App:FC = () => {
  const [selectedTask, setSelectedTask] = useState<Todo | Partial<Todo> | null>(null)

  const onEdit = (todo: Todo) => {
    setSelectedTask(todo)
  }

  return (
    <>
      <TodoNavbar task={selectedTask} onSelect={setSelectedTask} />

      <TodoTabs onEdit={onEdit} />
    </>
  )
}

export default App
