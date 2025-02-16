import { createSlice } from '@reduxjs/toolkit'

interface searchState {
  search: string;
}

const initialState: searchState = {
  search: ''
}

const searchSlice = createSlice({
  initialState,
  name: 'search',
  reducers: {
    findTodo(state, action) {
      state.search = action.payload
    }
  }
})

export const { findTodo } = searchSlice.actions

export default searchSlice.reducer
