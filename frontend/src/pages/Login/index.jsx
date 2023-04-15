import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Link, Navigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { Helmet } from 'react-helmet'
import cookie from 'js-cookie'

import LogoSvg from '../../assets/svg/components_icon/LogoSvg'
import Button from '../../ui/Button'
import axios from 'axios'
import { CloseEyeSvg, OpenEyeSvg } from '../../assets/svg/components_icon/EyeSvg'
import { setAuth, setUser } from '../../store/slices/authSlice'

import './login.scss'


const Login = () => {
   const [openPass, setOpenPass] = useState(false)
   const [errLogin, setErrLogin] = useState({
      open: false,
      msg: ''
   })

   const dispatch = useDispatch()

   const {register, handleSubmit, formState: { errors }} = useForm({
      defaultValues: {
         login: '',
         password: '',
      },
      mode: 'onChange',
   })

   const submitLogin = (value) => {
      axios
         .post(
            'http://localhost:7777/auth/login',
            {
               login: value.login,
               password: value.password,
            }
         )
         .then((res) => res.data)
         .then((data) => {
            dispatch(setAuth(true))
            dispatch(setUser({
               name: data.user.name,
               login: data.user.login,
            }))
            cookie.set('token', data.token, { expires: 10 })
         })
         .catch((err) => {
            setErrLogin({
               open: true,
               msg: err.response.data.msg,
            })

            return setTimeout(() => {
               setErrLogin({ open: false })
            }, 4000)
         })
   }

   return (
      <>
         <Helmet>
            <title> Login </title>
         </Helmet>
         <main className='login'>
            <form 
               className='login__form'
               onSubmit={handleSubmit(submitLogin)}
            >
               <div className='login__form-title'>
                  <LogoSvg />
                  <p> Authorization </p>
               </div>
               <input 
                  type='text' 
                  placeholder='Enter login'
                  autoComplete='off'
                  className={`login__input  ${errors.login && 'border-red'}`}
                  {...register('login', { required: true, })}
               />
               <p className='help-text'> {errors.login && 'Obligatory field'} </p>
               <div className={`login__password  ${errors.password && 'border-red'}`}>
                  <input 
                     type={openPass ? 'text' : 'password'} 
                     placeholder='Enter password'
                     autoComplete='off'
                     {...register('password', { required: true })}
                  />
                  <button
                     type='button'
                     onClick={() => setOpenPass(!openPass)}
                  >
                     {openPass ? <CloseEyeSvg /> : <OpenEyeSvg />}
                  </button>
               </div>
               <p className='help-text'> {errors.password && 'Obligatory field'} </p>
               <div className='login__form-actions'>
                  <Button
                     className='login__btn'
                     type='submit'
                     text='Enter'
                  />
                  <Link
                     className='login__link'
                     to='/register'
                  >
                     Register
                  </Link>
               </div>
            </form>
         </main>
         <div className={`err-auth  ${errLogin.open && 'err-auth-open'}`}> {errLogin.msg} </div>
      </>
   )
}

export default Login