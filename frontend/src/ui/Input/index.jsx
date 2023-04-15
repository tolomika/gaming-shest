import './input.scss'


const Input = ({svgIcon, placeholder, onChange, className, value}) => {
   return (
      <div className={`custom-input  ${className}`}>
         {svgIcon}
         <input 
            type='text'
            placeholder={placeholder}
            onChange={(event) => onChange(event)}
            value={value}
         />
      </div>
   )
}

export default Input