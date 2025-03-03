import { createAsyncThunk } from '@reduxjs/toolkit'
import { getTodos } from '../api/client.ts'

export const getTasks = createAsyncThunk(
    'tasks/getTasks',
     getTodos
  )

