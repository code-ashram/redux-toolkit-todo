import { configureStore } from '@reduxjs/toolkit'
import todoApi from '../api/todoApi.ts'

import todoReducer from './todoSlice.ts'

const store = configureStore({
  reducer: {
    tasks: todoReducer,
    [todoApi.reducerPath]: todoApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(todoApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export default store
