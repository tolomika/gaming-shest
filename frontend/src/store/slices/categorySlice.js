import { createSlice } from '@reduxjs/toolkit'


const initialState = {
   search: '',
   category: [],
   os: [],
}

const categorySlice = createSlice({
   name: 'category',
   initialState,
   reducers: {
      setSearch: (state, action) => void(state.search = action.payload),
      addCategory: (state, action) => void(state.category.push(action.payload)),
      delCategory: (state, action) => void(state.category = state.category.filter((item) => item !== action.payload)),
      addOs: (state, action) => void(state.os.push(action.payload)),
      delOs: (state, action) => void(state.os = state.os.filter((item) => item !== action.payload)),
   }
})

export const { setSearch, addCategory, delCategory, addOs, delOs } = categorySlice.actions

export default categorySlice.reducer