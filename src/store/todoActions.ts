import { createAsyncThunk } from '@reduxjs/toolkit'
import { postTodo, getTodos } from '../api/client.ts'
import Todo from '../models/Todo.ts'

export const getTasks = createAsyncThunk(
    'tasks/getTasks',
     getTodos
  )

export const postTask = createAsyncThunk<Todo, Pick<Todo, 'title' | 'priority'>>(
  'tasks/createTask',
  (todo) => postTodo({...todo, creationTime: new Date().toISOString(), isDone: false})
)
