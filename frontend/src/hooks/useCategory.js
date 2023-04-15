import { useSelector } from 'react-redux'


export const useCategory = () => {
   const category = useSelector((state) => state.category)

   return {
      search: category.search,
      category: category.category,
      os: category.os,
   }
}