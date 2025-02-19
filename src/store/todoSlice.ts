import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import Todo from '../models/Todo.ts'
import mockData from '../api/mockData.ts'
import Status from '../models/Status.ts'
import { Priority } from '../models'

interface TodoListState {
  tasks: Todo[]
  search: string
  selectedTask: Todo | Partial<Todo> | null
  status: Status
}

const initialState: TodoListState = {
  tasks: mockData,
  search: '',
  selectedTask: null,
  status: Status.All
}

const todoSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    createTask: (state, { payload }: PayloadAction<Omit<Todo, 'id' | 'creationTime' | 'isDone'>>) => {
      state.tasks.unshift({
        id: crypto.randomUUID(),
        isDone: false,
        title: payload.title.trim(),
        creationTime: new Date().toISOString(),
        priority: payload.priority
      })
      state.selectedTask = null
    },
    deleteTask: (state, { payload }: PayloadAction<string>) => {
      state.tasks = state.tasks.filter((todo) => todo.id !== payload)
    },
    changeStatus: (state, { payload }: PayloadAction<string>) => {
      const todo = state.tasks.find((task) => task.id === payload)
      if (todo) todo.isDone = !todo.isDone
    },
    updateTask: (state) => {
      if (state.selectedTask) {
        const todo = state.tasks.find((task) =>
          task.id === state.selectedTask?.id
        )
        if (todo) {
          todo.title = state.selectedTask.title || ''
          todo.priority = state.selectedTask.priority ?? Priority.Mid
          state.selectedTask = null
        }
      }
    },
    findTodo (state, action) {
      state.search = action.payload
    },
    selectTask (state, { payload }: PayloadAction<Partial<Todo> | null>) {
      state.selectedTask = {
        ...state.selectedTask,
        ...payload
      }
    },
    sortByStatus: (state, action) => {
      state.status = action.payload
    }
  },
  selectors: {
    search: (state) => state.search,
    todos: (state) => state.tasks.filter((todo) =>
      todo.title.toLowerCase().includes(state.search.toLowerCase())),
    selectedTodo: (state) => state.selectedTask,
    status: (state) => state.status
  }
})

export const {
  createTask,
  deleteTask,
  changeStatus,
  updateTask,
  findTodo,
  selectTask,
  sortByStatus
} = todoSlice.actions

export const { search, todos, selectedTodo, status } = todoSlice.selectors

export default todoSlice.reducer
