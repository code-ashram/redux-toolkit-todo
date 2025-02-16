import Period from '../models/Period.ts'
import { createSlice } from '@reduxjs/toolkit'

interface periodState {
  period: Period;
}

const initialState: periodState = {
  period: Period.All
}

const periodSlice = createSlice({
  initialState,
  name: 'period',
  reducers: {
    changePeriod(state, action) {
      state.period = action.payload
    }
  }
})

export const { changePeriod } = periodSlice.actions

export default periodSlice.reducer
