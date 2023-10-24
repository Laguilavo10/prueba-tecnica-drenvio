import { app, server } from '../app/index.js'
import request from 'supertest'

describe('Endpoint products', function () {
  test('get all products in stock', async () => {
    const response = await request(app).get('/products')
    expect(response.statusCode).toBe(200)
  }, 10000)
})

afterAll(() => {
  server.close()
})
