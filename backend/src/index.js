import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'

import { regVal } from './validators/regVal.js'
import checkToken from './middleware/checkToken.js'
import login from './controllers/user/login.js'
import registration from './controllers/user/registration.js'
import getUser from './controllers/user/getUser.js'
import getGames from './controllers/games/getGames.js'
import getOneGames from './controllers/games/getOneGames.js'



mongoose
   .set('strictQuery', false)
   .connect('') // Сюда ссылку на кластер для базы Mongo (можно как и локальный так и глобальный)
   .then(() => console.log('DB ok'))
   .catch((err) => console.log('DB error', err))

const app = express()

app.use(express.json())
app.use(cors())
app.use(express.static('public'))

app.post('/auth/login', login)
app.post('/auth/register', regVal, registration)
app.post('/auth/get-user', checkToken, getUser)

app.get('/games', getGames)
app.get('/games/:id', getOneGames)

app.listen('7777', (err) => {
   if (err) {
      return console.log('Server error', err)
   } else {
      return console.log('Server started http://localhost:7777')
   }
})
