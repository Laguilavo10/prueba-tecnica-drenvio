import { Router } from 'express'
import { PricesController } from '../controller/prices.controller.js'

export const prices = Router()

prices.get('/:user/:product', PricesController.getSpecialProducts)
