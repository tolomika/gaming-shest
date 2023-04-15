import { useEffect } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import cookie from 'js-cookie'
import axios from 'axios'

import Login from './pages/Login'
import Register from './pages/Register'
import Layout from './pages'
import { useAuth } from './hooks/useAuth'
import { setAuth, setUser } from './store/slices/authSlice'


const App = () => {
   const { auth } = useAuth()
   const userToken = cookie.get('token')
   const dispatch = useDispatch()

   useEffect(() => {
      if (userToken && !auth) {
         axios
            .post(
               'http://localhost:7777/auth/get-user',
               { token: userToken }
            )
            .then((res) => res.data)
            .then((data) => {
               dispatch(setAuth(true))
               dispatch(setUser({
                  id: data.user._id,
                  name: data.user.name,
                  login: data.user.login,
               }))
            })
      }
   }, [])

   return (
      <>
         <Routes>
            <Route path='/*' element={auth ? <Layout /> : <Navigate to='/login' replace />} />
            <Route path='/login' element={auth ? <Navigate to='/' replace /> : <Login />} />
            <Route path='/register' element={auth ? <Navigate to='/' replace /> : <Register />} />
         </Routes>
      </>
   )
}

export default App