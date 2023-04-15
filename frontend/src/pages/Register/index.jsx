import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Link, Navigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { Helmet } from 'react-helmet'
import cookie from 'js-cookie'
import axios from 'axios'

import LogoSvg from '../../assets/svg/components_icon/LogoSvg'
import Button from '../../ui/Button'
import { CloseEyeSvg, OpenEyeSvg } from '../../assets/svg/components_icon/EyeSvg'
import { setAuth, setUser, } from '../../store/slices/authSlice' 

import './register.scss'


const Register = () => {
   const [openPass, setOpenPass] = useState(false)
   const [errRegister, setErrRegister] = useState({
      open: false,
      msg: ''
   })

   const dispatch = useDispatch()

   const { register, handleSubmit, formState: { errors } } = useForm({
      defaultValues: {
         name: '',
         login: '',
         password: '',
      },
      mode: 'onChange'
   })

   const submitRegister = (value) => {
      axios
         .post(
            'http://localhost:7777/auth/register',
            {
               name: value.name,
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
               setErrRegister({ open: false })
            }, 4000)
         })
   }

   return (
      <>
         <Helmet>
            <title> Register </title>
         </Helmet>
         <main className='register'>
            <form 
               className='register__form'
               onSubmit={handleSubmit(submitRegister)}
            >
               <div className='register__form-title'>
                  <LogoSvg />
                  <p> Register </p>
               </div>
               <input 
                  type='text' 
                  placeholder='Enter name'
                  autoComplete='off'
                  maxLength={20}
                  className={`register__input  ${errors.name && 'border-red'}`}
                  {...register('name', { required: true, minLength: 2, maxLength: 20 })}
               />
               <p className='help-text'> {errors.name && 'Name length must be 2-20 chars'} </p>
               <input 
                  type='text' 
                  placeholder='Enter login'
                  autoComplete='off'
                  maxLength={20}
                  className={`register__input  ${errors.login && 'border-red'}`}
                  {...register('login', { required: true, minLength: 2, maxLength: 20 })}
               />
               <p className='help-text'> {errors.login && 'Login length must be 2-20 chars'} </p>
               <div className={`register__password  ${errors.password && 'border-red'}`}>
                  <input 
                     type={openPass ? 'text' : 'password'} 
                     placeholder='Enter password'
                     autoComplete='off'
                     maxLength={30}
                     {...register('password', { required: true, minLength: 7, maxLength: 30 })}
                  />
                  <button
                     type='button'
                     onClick={() => setOpenPass(!openPass)}
                  >
                     {openPass ? <CloseEyeSvg /> : <OpenEyeSvg />}
                  </button>
               </div>
               <p className='help-text'> {errors.password && 'Password length must be 7-30 chars'} </p>
               <div className='register__form-actions'>
                  <Button
                     className='register__btn'
                     type='submit'
                     text='Register'
                  />
                  <Link
                     className='register__link'
                     to='/login'
                  >
                     Login
                  </Link>
               </div>
            </form>
         </main>
         <div className={`err-auth  ${errRegister.open && 'err-auth-open'}`}> {errRegister.msg} </div>
      </>
   )
}

export default Register