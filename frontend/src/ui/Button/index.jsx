import './button.scss'


const Button = ({className, text, onClick, type}) => {
   return (
      <button
         onClick={onClick}
         className={`btn  ${className}`}
         type={type}
      >
         <div className='btn__text'> 
            <div className='btn__cntr'>
               <p> {text} </p>
            </div>
         </div>
         <span></span>
         <span></span>
         <span></span>
         <span></span>
      </button>
   )
}

export default Button