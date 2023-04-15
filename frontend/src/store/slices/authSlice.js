import { createSlice } from '@reduxjs/toolkit'


const initialState = {
   auth: false,
   user: {},
}

const authSlice = createSlice({
   name: 'auth',
   initialState,
   reducers: {
      setAuth: (state, action) => void(state.auth = action.payload),
      setUser: (state, action) => void(state.user = action.payload),
   },
})

export const { setAuth, setUser } = authSlice.actions

export default authSlice.reducer