import { configureStore } from '@reduxjs/toolkit'
import todoReducer from './todoSlice.ts'
import statusReducer from './statusSlice.tsx'

const store = configureStore({
  reducer: {
    tasks: todoReducer,
    status: statusReducer,
  }
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export default store
