import { configureStore } from '@reduxjs/toolkit'

import todoReducer from './todoSlice.ts'
import statusReducer from './statusSlice.ts'
import periodReducer from './periodSlice.ts'
import searchReducer from './searchSlice.ts'

const store = configureStore({
  reducer: {
    tasks: todoReducer,
    status: statusReducer,
    period: periodReducer,
    search: searchReducer,
  }
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export default store
