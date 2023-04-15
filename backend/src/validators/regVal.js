import { body } from 'express-validator'


export const regVal = [
   body('name', 'Name length must be 2-20 chars').isLength({ min: 2, max: 20, }),
   body('login', 'Login length must be 2-20 chars').isLength({ min: 2, max: 20, }),
   body('password', 'Password length must be 7-35 chars').isLength({ min: 7, max: 35, }),
]