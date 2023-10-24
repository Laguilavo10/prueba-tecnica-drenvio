import { Router } from 'express'
import { ProductController } from '../controller/products.controller.js'

export const products = Router()

products.get('/', ProductController.getProducts)
