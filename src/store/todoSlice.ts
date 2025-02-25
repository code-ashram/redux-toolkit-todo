import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import Todo from '../models/Todo.ts'
import mockData from '../api/mockData.ts'
import Status from '../models/Status.ts'
import { Priority } from '../models'
import Period from '../models/Period.ts'
import Order from '../models/Order.ts'

interface TodoListState {
  tasks: Todo[]
  search: string
  selectedTask: Todo | Partial<Todo> | null
  status: Status
  period: Period
  order: Order
}

const initialState: TodoListState = {
  tasks: mockData,
  search: '',
  selectedTask: null,
  status: Status.All,
  period: Period.All,
  order: Order.Date_Ascending
}

const todoSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    createTask: (state, { payload }: PayloadAction<Omit<Todo, 'id' | 'creationTime' | 'isDone'>>) => {
      state.tasks.unshift({
        id: crypto.randomUUID(),
        isDone: false,
        title: payload.title.trim(),
        creationTime: new Date().toISOString(),
        priority: payload.priority
      })
      state.selectedTask = null
    },
    deleteTask: (state, { payload }: PayloadAction<string>) => {
      state.tasks = state.tasks.filter((todo) => todo.id !== payload)
    },
    changeStatus: (state, { payload }: PayloadAction<string>) => {
      const todo = state.tasks.find((task) => task.id === payload)
      if (todo) todo.isDone = !todo.isDone
    },
    updateTask: (state) => {
      if (state.selectedTask) {
        const todo = state.tasks.find((task) =>
          task.id === state.selectedTask?.id
        )
        if (todo) {
          todo.title = state.selectedTask.title || ''
          todo.priority = state.selectedTask.priority ?? Priority.Mid
          state.selectedTask = null
        }
      }
    },
    findTodo (state, action) {
      state.search = action.payload
    },
    selectTask (state, { payload }: PayloadAction<Partial<Todo> | null>) {
      state.selectedTask = {
        ...state.selectedTask,
        ...payload
      }
    },
    sortByStatus: (state, { payload }: PayloadAction<Status>) => {
      state.status = payload
    },
    sortByPeriod: (state, { payload }: PayloadAction<Period>) => {
      state.period = payload
    },
    sortByOrder: (state, { payload }: PayloadAction<Order>) => {
      state.order = payload
    }
  },
  selectors: {
    search: (state) => state.search,
    todos: (state) => state.tasks.filter((todo) => {
        let isVisible: boolean

        const isAvailable: boolean = state.period === Period.All
          ? true
          : new Date(todo.creationTime) > new Date(new Date().setDate(new Date().getDate() - state.period))

        switch (state.status) {
          case Status.Completed:
            isVisible = todo.isDone
            break
          case Status.Active:
            isVisible = !todo.isDone
            break
          default:
            isVisible = true
        }

        return isAvailable && isVisible && todo.title.toLowerCase().includes(state.search.toLowerCase())
      }
    ),
    selectedTodo: (state) => state.selectedTask,
    status: (state) => state.status,
    period: (state) => state.period,
    order: (state) => state.order
  }
})

export const {
  createTask,
  deleteTask,
  changeStatus,
  updateTask,
  findTodo,
  selectTask,
  sortByStatus,
  sortByPeriod,
  sortByOrder
} = todoSlice.actions

export const { search, todos, selectedTodo, status, period, order } = todoSlice.selectors

export default todoSlice.reducer
