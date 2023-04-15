import {  useRef } from 'react'

import './checkbox.scss'


const Checkbox = ({className, text, onCheck, onUnCheck, defaultChecked}) => {
   const checkboxRef = useRef()

   return (
      <label 
         className={`checkbox  ${className}`}
         onChange={() => {
            if (checkboxRef.current.checked) {
               return onCheck()
            } else {
               return onUnCheck()
            }
         }}
      >
         <input 
            type='checkbox'
            className='checkbox__btn'
            defaultChecked={defaultChecked}
            ref={checkboxRef}
         />
         <span className='checkbox__btn-custom'></span>
         <p> {text} </p>
      </label>
   )
}

export default Checkbox