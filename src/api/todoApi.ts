import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import Todo from '../models/Todo.ts'
import { getTodos, setTodos, putTodo } from '../store/todoSlice.ts'

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
          dispatch(getTodos(data))
        } catch (error) {
          console.error('Error syncing data:', error)
        }
      },
      providesTags: () => [{ type: 'Todo' }]
    }),
    postTask: builder.mutation<Todo, Pick<Todo, 'title' | 'priority'>>({
      query: (todo) => ({
        url: '/todos',
        method: 'POST',
        body: {...todo, creationTime: new Date().toISOString(), isDone: false}
      }),
      async onQueryStarted (_, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled
          dispatch(setTodos(data))
        } catch (error) {
          console.error('Error syncing data:', error)
        }
      },
      invalidatesTags:
        () => [{ type: 'Todo' }]
    }),
    putTask: builder.mutation<Todo, Todo>({
      query: (updatedTodo) => ({
        url: `/todos/${updatedTodo.id}`,
        method: 'PUT',
        body: updatedTodo
      }),
      async onQueryStarted (_, { dispatch }) {
        try {
          dispatch(putTodo())
        } catch (error) {
          console.error('Error syncing data:', error)
        }
      },
      invalidatesTags:
        () => [{ type: 'Todo' }]
    }),
  })
})

export const { useGetTodosQuery, usePostTaskMutation, usePutTaskMutation } = todoApi

export default todoApi
