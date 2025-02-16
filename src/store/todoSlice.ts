import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import Todo from '../models/Todo.ts'
import mockData from '../api/mockData.ts'

interface TodoListState {
  tasks: Todo[]
  search: string
  selectedTask: Todo | Partial<Todo> | null
}

const initialState: TodoListState = {
  tasks: mockData,
  search: '',
  selectedTask: null,
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
    },
    deleteTask: (state, { payload }: PayloadAction<string>) => {
      state.tasks = state.tasks.filter((todo) => todo.id !== payload)
    },
    changeStatus: (state, { payload }: PayloadAction<string>) => {
      const todo = state.tasks.find((task) => task.id === payload)
      if (todo) todo.isDone = !todo.isDone
    },
    updateTask: (state, { payload }: PayloadAction<Todo>) => {
      const todo = state.tasks.find((task) => task.id === payload.id)
      if (todo) {
        todo.title = payload.title
        todo.priority = payload.priority
      }
    },
    findTodo(state, action) {
      state.search = action.payload
    },
    selectTask(state, action) {
      state.selectedTask = action.payload
    }
  },
  selectors: {
    search: (state) => state.search,
    todos: (state) => state.tasks.filter((todo) =>
      todo.title.toLowerCase().includes(state.search.toLowerCase())),
    selectedTodo: (state) => state.selectedTask
  }
})

export const { createTask, deleteTask, changeStatus, updateTask, findTodo, selectTask } = todoSlice.actions

export const { search, todos, selectedTodo } = todoSlice.selectors

export default todoSlice.reducer
