import { createAsyncThunk } from '@reduxjs/toolkit'
import { postTodo, getTodos, deleteTodo, patchTodo } from '../api/client.ts'
import Todo from '../models/Todo.ts'

export const getTasks = createAsyncThunk(
  'tasks/getTasks',
  getTodos
)

export const postTask = createAsyncThunk<Todo, Pick<Todo, 'title' | 'priority'>>(
  'tasks/createTask',
  (todo) => postTodo({ ...todo, creationTime: new Date().toISOString(), isDone: false })
)

export const deleteTask = createAsyncThunk<Todo, string>(
  'tasks/deleteTask',
  (id: string) => deleteTodo(id)
)

export const patchTask = createAsyncThunk<Todo, { id: string, payload: Partial<Todo> }>(
  'tasks/patchTask',
  ({ id, payload }) => patchTodo(id, payload)
)
