import { Link } from 'react-router-dom'

import './cardStore.scss'


const CardStore = ({poster, name, link, price}) => {
   return (
      <div className='card-store'>
         <Link
            className='card-store__link'
            to={`/game-store/${link}`}
         >
            <img 
               src={poster}
               alt={name} 
            />
            <p> {name} </p>
         </Link>
         <div className='card-store__info'>
            <p> {price} $ </p>
         </div>
      </div>
   )
}

export default CardStore