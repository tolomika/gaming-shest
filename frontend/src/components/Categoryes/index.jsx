import { useDispatch } from 'react-redux'

import LupaSvg from '../../assets/svg/components_icon/LupaSvg'
import Input from '../../ui/Input'
import { setSearch, addCategory, delCategory, addOs, delOs } from '../../store/slices/categorySlice'
import { useCategory } from '../../hooks/useCategory'

import './category.scss'
import Checkbox from '../../ui/Checkbox'


const Categoryes = () => {
   const dispatch = useDispatch()
   const { search, os, category } = useCategory()

   const genreCategory = ['Shooter', 'Race', 'Adventure', 'Action RPG', 'Horror', 'Interactive Movie', "Sport", "Survival"]
   const osCategory = ['XP', '7', '8', '10', 'Vista']

   return (
      <>
         <div className='categoryes-menu'>
            <Input 
               svgIcon={<LupaSvg />}
               className='categoryes-menu__input'
               placeholder='Search'
               onChange={(event) => dispatch(setSearch(event.target.value))}
               value={search}
            />
            <p className='categoryes-menu__title'> Genre </p>
            {
               genreCategory.map((item, index) => (
                  <Checkbox
                     key={index}
                     text={item}
                     className='categoryes-menu__checkbox'
                     defaultChecked={category.includes(item.toLowerCase()) ? true : false}
                     onCheck={() => dispatch(addCategory(item.toLowerCase()))}
                     onUnCheck={() => dispatch(delCategory(item.toLowerCase()))}
                  />
               ))
            }
            <p className='categoryes-menu__title'> OS </p>
            {
               osCategory.map((item, index) => (
                  <Checkbox
                     key={index}
                     text={`Windows ${item}`}
                     className='categoryes-menu__checkbox'
                     defaultChecked={os.includes(item.toLowerCase()) ? true : false}
                     onCheck={() => dispatch(addOs(item.toLowerCase()))}
                     onUnCheck={() => dispatch(delOs(item.toLowerCase()))}
                  />
               ))
            }
         </div>
      </>
   )
}

export default Categoryes