const getUser = async (req, res) => {
   try {
      const user = req.user

      return res.status(200).json({
         msg: 'User found',
         user: user._doc,
      })
   } catch (err) {
      return res.status(404).json({
         msg: `User dont't found`,
      })
   }
}

export default getUser