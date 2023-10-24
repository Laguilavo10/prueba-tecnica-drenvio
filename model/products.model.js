import { connectDB, disconnectDB } from '../db/conn-db.js'
import Product from '../db/schema/product.js'

export const ProductModel = {
  getProducts: async () => {
    try {
      await connectDB()
      const documents = await Product.find({ existencia: { $gt: 1 } })
      await disconnectDB()
      return documents
    } catch (error) {
      throw new Error({ error })
    }
  },

  getProductsByName: async (name) => {
    try {
      await connectDB()
      const documents = await Product.findOne({ nombre: name })
      await disconnectDB()
      return documents
    } catch (error) {
      throw new Error({ error })
    }
  }
}
