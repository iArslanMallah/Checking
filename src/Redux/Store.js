import { configureStore } from '@reduxjs/toolkit'
import counterSlice from './Slices'
export const store = configureStore({
  reducer: {
    counter: counterSlice,
  },
})