import { useSelector } from 'react-redux'


export const useAuth = () => {
   const auth = useSelector((state) => state.auth)

   return {
      auth: auth.auth,
      user: auth.user,
   }
}