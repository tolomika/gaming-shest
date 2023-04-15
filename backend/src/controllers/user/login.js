import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

import UserModel from '../../models/userModel.js'


const login = async (req, res) => {
   try {
      const user = await UserModel.findOne({ login: req.body.login })

         if (!user) {
            return res.status(404).json({
               msg: `Wrong login or password`,
            })
         }

         const userPassword = await bcrypt.compare(req.body.password, user._doc.password)

         if (!userPassword) {
            return res.status(404).json({
               msg: `Wrong login or password`,
            })
         }

         const token = jwt.sign(
            {
               _id: user._doc._id,
            },
            'gosling2004',
            {
               expiresIn: '10d',
            }
         )

         return res.status(200).json({
            msg: 'You authorization',
            user: user._doc,
            token,
         })
   } catch (err) {
      console.log(err)
      res.status(500).json({
         msg: 'Failed to login',
      })
   }
}

export default login