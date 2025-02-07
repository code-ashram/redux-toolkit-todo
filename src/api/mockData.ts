import Todo from '../models/Todo.ts'

const mockData: Todo[] = [
  {
    id: '1',
    title: 'Write a markup',
    isDone: true,
    creationTime: '2025-01-01T10:00:00.000Z',
    priority: 'High'
  },
  {
    id: '2',
    title: 'Make the components',
    isDone: true,
    creationTime: '2025-01-02T11:00:00.000Z',
    priority: 'Mid'
  },
  {
    id: '3',
    title: 'Write a code',
    isDone: false,
    creationTime: '2025-01-20T11:30:00.000Z',
    priority: 'Low'
  },
  {
    id: '4',
    title: 'Make a code review',
    isDone: false,
    creationTime: '2025-01-20T14:10:00.000Z',
    priority: 'High'
  },
  {
    id: '5',
    title: 'Make code refactoring',
    isDone: false,
    creationTime: '2025-01-21T15:25:00.000Z',
    priority: 'Mid'
  },
  {
    id: '6',
    title: 'Finish the project',
    isDone: false,
    creationTime: '2025-01-21T15:55:00.000Z',
    priority: 'Low'
  },
  {
    id: '7',
    title: 'Write to Kishor',
    isDone: true,
    creationTime: '2025-02-06T16:34:00.000Z',
    priority: 'High'
  },
  {
    id: '8',
    title: 'Make a refactoring again',
    isDone: false,
    creationTime: '2025-02-07T17:20:00.000Z',
    priority: 'Mid'
  }
]

export default mockData
