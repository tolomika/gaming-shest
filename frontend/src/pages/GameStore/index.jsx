import { useState, useEffect } from 'react'
import Helmet from 'react-helmet'
import axios from 'axios'

import Categoryes from '../../components/Categoryes'
import CardStore from '../../components/CardStore'
import { useCategory } from '../../hooks/useCategory'

import './gameStore.scss'


const GameStore = () => {
   const [gameCard, setGameCard] = useState([])
   const { search, category, os } = useCategory()

   useEffect(() => {
      axios
         .get('http://localhost:7777/games')
         .then((res) => res.data.games)
         .then((data) => setGameCard([...data]))
         .catch((err) => console.log(err))
   }, [])

   return (
      <>
         <Helmet>
            <title> Store </title>
         </Helmet>
         <main className='game-store'>
            <div className='game-store__cntr'>
               {
                  gameCard
                     .filter((obj) => {
                        if (search === '') {
                           return obj
                        } else if (obj.name.toLowerCase().includes(search.toLowerCase())) {
                           return obj
                        }
                     })
                     .filter((obj) => {
                        if (category.length === 0) {
                           return obj
                        }

                        const filterArr = category.filter((item) => obj.genre.indexOf(item) !== -1)

                        if (filterArr.length !== 0) {
                           return obj
                        }
                     })
                     .filter((obj) => {
                        if (os.length === 0) {
                           return obj
                        }

                        const filterArr = os.filter((item) => obj.os.indexOf(item) !== -1)
                        
                        if (filterArr.length !== 0) {
                           return obj
                        }
                     })
                     .map((obj) => (
                        <CardStore 
                           key={obj.id}
                           name={obj.name}
                           poster={obj.poster}
                           link={obj.id}
                           price={obj.price}
                        />
                     ))
               }
            </div>
         </main>
         <Categoryes />
      </>
   )
}

export default GameStore