import { FC, useState } from 'react'
import TodoHeader from './components/TodoHeader'
import TodoContent from './components/TodoContent'

import './App.scss'
import Todo from './models/Todo.ts'
import TodoForm from './components/TodoForm'

type Props = {
  onPress: (id: string) => void
}



export const App: FC = () => {
  const [selectedTask, setSelectedTask] = useState<Todo | Partial<Todo> | null>(null)

  const onEdit = (todo: Todo) => {
    setSelectedTask(todo)
  }

  const handleClose = () => {
    setSelectedTask(null)
  }

  return (
    <>
      <TodoHeader task={selectedTask} onSelect={setSelectedTask} />

      {selectedTask && (
        <TodoForm task={selectedTask} onClose={() => handleClose} />
      )}

      <TodoContent onEdit={onEdit} />
    </>
  )
}

export default App
