import { Helmet } from 'react-helmet'

import GameController from '../../assets/svg/picture/controller.svg'
import Button from '../../ui/Button'
import LogoSvg from '../../assets/svg/components_icon/LogoSvg'
import VkSvg from '../../assets/svg/components_icon/VkSvg'
import TgSvg from '../../assets/svg/components_icon/TgSvg'
import GitHubSvg from '../../assets/svg/components_icon/GitHubSvg'
import MailSvg from '../../assets/svg/components_icon/MailSvg'

import './home.scss'


const Home = () => {
   return (
      <>
         <Helmet>
            <title> Game Shest </title>
         </Helmet>
         <main className='home'>
            <div className='home__cntr'>
               <div className='home__main-banner'>
                  <img 
                     src={GameController} 
                     alt='game controller' 
                  />
                  <div className='main-banner__content'>
                     <div className='main-banner__logo'>
                        <LogoSvg />
                        <p> GAME SHEST </p>
                     </div>
                     <p> Here you will find both old classics and new big game projects, good luck :) </p>
                     <Button 
                        className='main-banner__btn'
                        text='Buy game'
                     />
                  </div>
               </div>
               <p className='home__info'> Game Shest is an online service for the distribution of computer games. Here you can either simply purchase a torrent file or download it. The web application developer understands that the distribution of pirated copies of the game is illegal, so I want to apologize to the copyright holders of the original games. The web application was written just for the sake of learning the React.js library </p>
               <div className='home__contact'>
                  <p> Developer contacts </p>
                  <div className='contact__link'>
                     <a
                        href='http://vk.com/shest_ernev'
                        target='_blank'
                     >
                        <VkSvg />
                     </a>
                     <a
                        href='http://t.me/shest_ernev'
                        target='_blank'
                     >
                        <TgSvg />
                     </a>
                     <a
                        href='https://github.com/shest-ernev'
                        target='_blank'
                     >
                        <GitHubSvg />
                     </a>
                     <a
                        href='mailto:shest_ernev@mail.ru'
                        target='_blank'
                     >
                        <MailSvg />
                     </a>
                  </div>
               </div>
            </div>
         </main>
      </>
   )
}

export default Home