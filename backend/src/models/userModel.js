import mongoose from 'mongoose'


const userSchema = new mongoose.Schema({
   name: {
      type: String,
      required: true,
   },
   login: {
      type: String,
      required: true,
      unique: true,
   },
   password: {
      type: String,
      required: true,
   },
   liked: {
      type: Array,
      default: [],
   },
   library: {
      type: Array,
      default: [],
   }
}, { timestamps: true })

export default mongoose.model('users', userSchema)