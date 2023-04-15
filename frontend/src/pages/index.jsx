import { Routes, Route } from 'react-router-dom'

import NavBar from '../components/NavBar'
import Home from './Home'
import GameStore from './GameStore'


const Layout = () => {
   return (
      <>
         <NavBar />
         <Routes>
            <Route index element={<Home />} />
            <Route path='game-store' element={<GameStore />} />
         </Routes>
      </>
   )
}

export default Layout