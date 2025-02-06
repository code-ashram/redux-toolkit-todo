import Todo from '../models/Todo.ts'

export const sortListByLastDate = (list: Todo[]): Todo[] =>
  list.sort((a: Todo, b: Todo) =>
    new Date(a.creationTime) < new Date(b.creationTime)
      ? 1
      : -1
  )

export const sortListByFirstDate = (list: Todo[]): Todo[] =>
  list.sort((a: Todo, b: Todo) =>
    new Date(a.creationTime) < new Date(b.creationTime)
      ? -1
      : 1
  )

export const sortListByAscendingTitle = (list: Todo[]): Todo[] =>
  list.sort((a: Todo, b: Todo) =>
    a.title.toLowerCase() < b.title.toLowerCase()
      ? 1
      : -1
  )

export const sortListByDescendingTitle = (list: Todo[]): Todo[] =>
  list.sort((a: Todo, b: Todo) =>
    a.title.toLowerCase() < b.title.toLowerCase()
      ? -1
      : 1
  )

export const convertTodoDate = (todoDate: string): string =>
  new Date(todoDate).toLocaleString('en-US', {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
      hour: 'numeric',
      minute: 'numeric'
    }
  )

