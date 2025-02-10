import { Priority } from './Priority.ts'

type Todo = {
  id: string,
  title: string,
  isDone: boolean,
  creationTime: string,
  priority: Priority,
}

export default Todo
