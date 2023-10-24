import mongoose from 'mongoose'

const productSchema = new mongoose.Schema({
  nombre: String,
  precio_base: Number,
  existencia: Number
})

const Product = mongoose.models.Product || mongoose.model('Product', productSchema)

export default Product
