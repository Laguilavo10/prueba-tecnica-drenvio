import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
  id: { type: Number, required: true },
  Nombre: { type: String, required: true },
  metadata: {
    precios_especiales: [
      {
        nombre_producto: { type: String },
        precio_especial_personal: { type: Number }
      }
    ]
  }
})

const User = mongoose.models.User || mongoose.model('User', userSchema)

export default User
