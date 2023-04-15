import GamesModel from '../../models/gamesModel.js'


const getGames = async (_, res) => {
   try {
      const games = await GamesModel.find()

      const gameCard = games.map((obj) => {
         const item = {
            id: obj.id,
            name: obj.name,
            poster: obj.poster,
            genre: obj.genre,
            price: obj.price,
            os: obj.require.os
         }

         return item
      })

      res.status(200).json({
         msg: 'OK',
         games: gameCard,
      })
   } catch (err) {
      console.log(err)
      return res.status(500).json({
         msh: 'Failed to get games',
      })
   }
}

export default getGames