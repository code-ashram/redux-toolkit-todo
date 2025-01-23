import { createSlice } from '@reduxjs/toolkit'

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
    create: (state, { payload }) => {
      state.tasks.push({
        id: crypto.randomUUID(),
        isDone: (payload as Omit<Todo, 'id' | 'creationTime'>).isDone,
        title: (payload as Omit<Todo, 'id' | 'creationTime'>).title.trim(),
        creationTime: new Date().toISOString(),
        priority: (payload as Omit<Todo, 'id' | 'creationTime'>).priority
      })
    }
  }
})



export default todoSlice.reducer
