import jwt from 'jsonwebtoken'
import UserModel from '../models/userModel.js'


const checkToken = async (req, res, next) => {
   try {
      const decodedToken = jwt.verify(req.body.token, 'gosling2004')

      const user = await UserModel.findOne({ _id: decodedToken })

      if (!user) {
         return res.status(404).json({
            msg: 'You are not authorized',
         })
      }

      req.user = user

      next()
   } catch (err) {
      return res.status(404).json({
         msg: 'You are not authorized',
      })
   }
}

export default checkToken