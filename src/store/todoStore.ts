import { configureStore } from '@reduxjs/toolkit'

const todoStore = configureStore({
  reducer: {},
})

export type RootState = ReturnType<typeof todoStore.getState>

export type AppDispatch = typeof todoStore.dispatch

export default todoStore
