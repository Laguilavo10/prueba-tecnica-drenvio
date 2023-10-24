import { PriceModel } from '../model/prices.model.js'

export const PricesController = {
  getSpecialProducts: async (req, res) => {
    try {
      const { user, product } = req.params
      const data = await PriceModel.getSpecialProductsByUser(user, product)
      if (!data) {
        res.status(400).send({
          error: 'user or product are not valid'
        })
        return
      }
      res.status(200).send({ product, specialPrice: data })
    } catch (error) {
      res.status(500).send('Error getting products')
    }
  }
}
