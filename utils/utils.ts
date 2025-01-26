import Todo from '../src/models/Todo'

export const generateTodo = (): Todo => ({
  id: crypto.randomUUID(),
  title: '',
  isDone: false,
  priority: 'Mid',
  creationTime: new Date().toISOString()
})
