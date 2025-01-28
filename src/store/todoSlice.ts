import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import Todo from '../models/Todo.ts'
import mockData from '../api/mockData.ts'

export interface TodoListState {
  tasks: Todo[]
}

const initialState: TodoListState = {
  tasks: mockData
}

const todoSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    createTask: (state, { payload }: PayloadAction<Omit<Todo, 'id' | 'creationTime' | 'isDone'>>) => {
      state.tasks.push({
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
    }
  }
})

export const { createTask, deleteTask, changeStatus, updateTask } = todoSlice.actions

export default todoSlice.reducer
