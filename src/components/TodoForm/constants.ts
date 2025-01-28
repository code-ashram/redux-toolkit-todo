import Todo from '../../models/Todo.ts'
import { Priority } from '../../models'

export const INITIAL_FIELDS: Pick<Todo, 'title' | 'priority'> = {
  title: '',
  priority: Priority.Mid,
}
