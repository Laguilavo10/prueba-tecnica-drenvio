import { app, server } from '../app/index.js'
import request from 'supertest'

describe('Endpoint prices', function () {
  test('get special product', async () => {
    const user = 1 //   valid user id
    const productName = 'Nike Air Max 90' // valid product name
    const expectedPrice = 129.99 // basic price = 150.99
    const response = await request(app).get(`/prices/${user}/${productName}`)

    expect(response.statusCode).toBe(200)
    expect(response.body.specialPrice).toBe(expectedPrice)
  }, 10000)

  test('get basic product because are not in special product', async () => {
    const user = 1 //   valid user id
    const productName = 'Reebok Classic Leather' // user has not special price for this product
    const expectedPrice = 89.99
    const response = await request(app).get(`/prices/${user}/${productName}`)
    expect(response.statusCode).toBe(200)
    expect(response.body.specialPrice).toBe(expectedPrice)
  }, 10000)

  test('should fail with invalid user id', async () => {
    const user = 1000000 //   invalid user id
    const productName = 'New Balance 574'
    const response = await request(app).get(`/prices/${user}/${productName}`)
    expect(response.statusCode).toBe(400)
    expect(response.body.error).toBe('user or product are not valid')
  }, 10000)

  test('should fail with invalid product Name', async () => {
    const user = 1 //   invalid user id
    const productName = 'test'
    const response = await request(app).get(`/prices/${user}/${productName}`)
    expect(response.statusCode).toBe(400)
    expect(response.body.error).toBe('user or product are not valid')
  }, 10000)
})

afterAll(() => {
  server.close()
})
