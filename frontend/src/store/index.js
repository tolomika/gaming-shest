import { configureStore  } from '@reduxjs/toolkit'

import auth from './slices/authSlice'
import category from './slices/categorySlice'


export const store = configureStore({
   reducer: {
      auth,
      category,
   }
})

export default store