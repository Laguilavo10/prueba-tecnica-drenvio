import express from 'express'
import 'dotenv/config.js'
import { products } from './router/products.js'
import { prices } from './router/prices.js'

const PORT = 3000
const app = express()

app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`)
})

app.use('/products', products)
app.use('/prices', prices)
