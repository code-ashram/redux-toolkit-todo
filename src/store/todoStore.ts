import { configureStore } from '@reduxjs/toolkit'
import todoReducer from './todoSlice.ts'

const todoStore = configureStore({
  reducer: todoReducer,
})

export type RootState = ReturnType<typeof todoStore.getState>

export type AppDispatch = typeof todoStore.dispatch

export default todoStore
