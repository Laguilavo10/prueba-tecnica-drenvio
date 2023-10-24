import { connectDB, disconnectDB } from '../db/conn-db.js'
import User from '../db/schema/user.js'
import { ProductModel } from './products.model.js'

export const PriceModel = {
  getSpecialProductsByUser: async (user, productName) => {
    try {
      await connectDB()
      // find user
      const data = await User.find({
        id: user
      })
      // if user doesn't exist return null
      if (data === undefined || data?.length === 0) {
        return null
      }

      const specialProducts = data[0]?.metadata?.precios_especiales

      // find index of product
      const indexProduct = specialProducts?.findIndex(
        (item) => item.nombre_producto === productName
      )

      // if product doesn't exist return search original price
      if (indexProduct === -1) {
        const product = await ProductModel.getProductsByName(productName)
        // if product doesn't exist return null
        return product?.precio_base ?? null
      }

      await disconnectDB()
      return specialProducts[indexProduct].precio_especial_personal
    } catch (error) {
      throw new Error({ error })
    }
  }
}
