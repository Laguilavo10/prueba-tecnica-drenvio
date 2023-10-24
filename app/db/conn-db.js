import mongoose from 'mongoose'
import { MONGO_URI } from '../constant/const.js'

// const uri =
//   'mongodb+srv://andres_laguilavo:Makita23@certifications.nbieyel.mongodb.net/?retryWrites=true&w=majority'

export const connection = mongoose.connection

export async function connectDB() {
  try {
    if (connection.readyState === 1) {
      console.log('Already connected to the database.')
      return
    }

    await mongoose.connect(MONGO_URI)

    console.log('Connected to the database.')
  } catch (error) {
    console.error('Error connecting to the database:', error)
  }
}

export async function disconnectDB() {
  try {
    if (connection.readyState !== 0) {
      await mongoose.disconnect()
      console.log('Disconnected from the database.')
    } else {
      console.log('Not disconnected; no active connection.')
    }
  } catch (error) {
    console.error('Error disconnecting from the database:', error)
  }
}
