import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import Todo from '../models/Todo.ts'
import { setTodos } from '../store/todoSlice.ts'

const BASE_URL = 'http://localhost:3000'

const todoApi = createApi({
  reducerPath: 'api',
  tagTypes: ['Todo'],
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getTodos: builder.query<Todo[], void>({
      query: () => '/todos',
      async onQueryStarted (_, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled
          dispatch(setTodos(data))
        } catch (error) {
          console.error('Error syncing data:', error)
        }
      }
    })
  })
})

export const { useGetTodosQuery } = todoApi

export default todoApi
