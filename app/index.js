import express from 'express'
import 'dotenv/config.js'
import { products } from './router/products.js'
import { prices } from './router/prices.js'
import { PORT } from './constant/const.js'

const app = express()

const server = app.listen(PORT)

app.use('/products', products)
app.use('/prices', prices)

export { app, server }
