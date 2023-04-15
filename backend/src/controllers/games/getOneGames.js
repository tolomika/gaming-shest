import GamesModel from '../../models/gamesModel.js'


const getOneGames = async (req, res) => {
   try {
      const id = req.params.id

      await GamesModel
         .findOneAndUpdate(
            {
               _id: id,
            },
            {
               $inc: { views: 1 },
            },
            {
               new: true,
            }
         )
         .then((doc) => {
            if (!doc) {
               return res.status(404).json({
                  msg: 'Game not found',
               })
            }

            return res.status(200).json(doc)
         })
         .catch((err) => {
            console.log(err)

            return res.status(500).json({
               msg: 'Failed to get game'
            })
         })
   } catch (err) {
      console.log(err)
      res.status(500).json({
         msg: 'Failed to get game',
      })
   }
}

export default getOneGames