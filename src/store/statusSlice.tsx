import Status from '../models/Status.ts'
import { createSlice } from '@reduxjs/toolkit'

interface statusState {
  status: Status;
}

const initialState: statusState = {
  status: Status.All
}

const statusSlice = createSlice({
  name: 'status',
  initialState,
  reducers: {
    changeStatus: (state, action) => {
      state.status = action.payload
    }
  }
})

export const { changeStatus } = statusSlice.actions
export default statusSlice.reducer

