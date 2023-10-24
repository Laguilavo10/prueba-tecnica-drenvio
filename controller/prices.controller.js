import { PriceModel } from '../model/prices.model.js'

export const PricesController = {
  getSpecialProducts: async (req, res) => {
    try {
      const { user, product } = req.params
      const data = await PriceModel.getSpecialProductsByUser(user, product)
      if (!data) {
        res
          .send({
            error: 'user or product are not valid'
          })
          .status(400)
        return
      }
      res.send({ product, specialPrice: data }).status(200)
    } catch (error) {
      res.send('Error getting products').status(500)
    }
  }
}
