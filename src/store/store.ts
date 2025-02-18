import { configureStore } from '@reduxjs/toolkit'

import todoReducer from './todoSlice.ts'
import periodReducer from './periodSlice.ts'

const store = configureStore({
  reducer: {
    tasks: todoReducer,
    period: periodReducer,
  }
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export default store
