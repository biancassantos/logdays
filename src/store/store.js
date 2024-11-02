import { configureStore } from '@reduxjs/toolkit'
import logsReducer from './logsSlice'
import usernameReducer from './userSlice'

export const store = configureStore({
  reducer: {
    logs: logsReducer,
    username: usernameReducer,
  },
})