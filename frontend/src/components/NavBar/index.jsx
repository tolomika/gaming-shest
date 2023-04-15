import { NavLink } from 'react-router-dom'

import LogoSvg from '../../assets/svg/components_icon/LogoSvg'
import HomeSvg from '../../assets/svg/components_icon/HomeSvg'
import ShopSvg from '../../assets/svg/components_icon/ShopSvg'
import LikedSvg from '../../assets/svg/components_icon/LikedSvg'
import CartSvg from '../../assets/svg/components_icon/CartSvg'
import LibrarySvg from '../../assets/svg/components_icon/LibrarySvg'

import './navBar.scss'


const NavBar = () => {
   return (
      <nav className='nav-bar'>
         <div className='nav-bar__cntr'>
            <div className='nav-bar__logo'>
               <LogoSvg />
               <p> GAME SHEST </p>
            </div>
            <NavLink
               to='/'
               className={({isActive}) => isActive ? 'nav-bar__link  nav-bar__link-active' : 'nav-bar__link'}
            >
               <HomeSvg />
               <p> Home </p>
            </NavLink>
            <NavLink
               to='/game-store'
               className={({isActive}) => isActive ? 'nav-bar__link  nav-bar__link-active' : 'nav-bar__link'}
            >
               <ShopSvg />
               <p> Game store </p>
            </NavLink>
            <NavLink
               to='/profile'
               className={({isActive}) => isActive ? 'nav-bar__link  nav-bar__link-active' : 'nav-bar__link'}
            >
               <LibrarySvg />
               <p> Profile </p>
            </NavLink>
            <NavLink
               to='/liked'
               className={({isActive}) => isActive ? 'nav-bar__link  nav-bar__link-active' : 'nav-bar__link'}
            >
               <LikedSvg />
               <p> Liked </p>
            </NavLink>
            <NavLink
               to='/cart'
               className={({isActive}) => isActive ? 'nav-bar__link  nav-bar__link-active' : 'nav-bar__link'}
            >
               <CartSvg />
               <p> Cart </p>
            </NavLink>
         </div>
      </nav>
   )
}

export default NavBar