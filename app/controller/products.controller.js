import { ProductModel } from '../model/products.model.js'

export const ProductController = {
  getProducts: async (req, res) => {
    try {
      const data = await ProductModel.getProducts()
      res.send(data).status(200)
    } catch (error) {
      console.log(error)
      res.send('Error getting products').status(500)
    }
  }
}
