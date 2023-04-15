import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { validationResult } from 'express-validator'

import UserModel from '../../models/userModel.js'


const registration = async (req, res) => {
   const err = validationResult(req)

   try {
      if (!err.isEmpty()) {
         return res.status(500).json({
            msg: 'Failed to registration',
         })
      }
   
      if (await UserModel.findOne({ login: req.body.login })) {
         return res.status(500).json({
            msg: 'This user already exists',
         })
      }

      const salt = await bcrypt.genSalt(10)
      const passwordHash = await bcrypt.hash(req.body.password, salt)

      const doc = new UserModel({
         name: req.body.name,
         login: req.body.login,
         password: passwordHash,
      })

      const user = await doc.save()

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
         msg: 'Successfully registration',
         user: user._doc,
         token,
      })
   } catch (err) {
      return res.status(500).json({
         msg: 'Failed to register',
      })
   }
}

export default registration