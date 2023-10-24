import { ProductModel } from '../model/products.model.js'

export const ProductController = {
  getProducts: async (req, res) => {
    try {
      const data = await ProductModel.getProducts()
      res.status(200).send(data)
    } catch (error) {
      console.log(error)
      res.status(500).send('Error getting products')
    }
  }
}
