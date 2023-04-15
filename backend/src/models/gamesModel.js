import mongoose from 'mongoose'


const gamesSchema = new mongoose.Schema({
   name: {
      type: String,
      required: true,
   },
   poster: {
      type: String,
      required: true,
   },
   images: {
      type: Array,
      required: true,
   },
   genre: {
      type: Array,
      required: true,
   },
   magnet: {
      type: String,
      required: true,
   },
   description: {
      type: String,
      required: true,
   },
   require: {
      cpu: {
         type: String,
         required: true,
      },
      ram: {
         type: String,
         required: true,
      },
      videoCard: {
         type: String,
         required: true,
      },
      memory: {
         type: String,
         required: true,
      },
      os: {
         type: Array,
         required: true,
      },
   },
   views: {
      type: Number,
      default: 0
   },
   price: {
      type: Number,
      required: true,
   },
})

export default mongoose.model('games', gamesSchema)