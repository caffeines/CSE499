const app = require('../app');
const request = require('supertest');
const token = 'bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Ijg4MDE3MTAwMjc2MzkiLCJyb2xlIjoiY3VzdG9tZXIiLCJpZCI6IjVlNTYzZTk1YmU2OGIwN2ZmYWEzMzM0YyIsImlhdCI6MTU4MjcxNTUwNCwiZXhwIjoxNTg1NzE1NTA0fQ.TvZsAXKGZ2Ah0EL2vGxQctKYxhnZKz4KcVWhS3i5_SM'

const productObj = {
  name: 'Nazirshail',
  price: 56,
  picture: ['adasda.jpg'],
  description: 'adashgfdaghs dadbnadb abgd;s',
  unit: 'kg',
  size: 1,
  totalUnit: 500,
  category: 'Rice'
}

describe('POST create product', () => {
  it('should return 403 forbidden for without token', async () => {
    const res = await request(app)
      .post('/api/product/create')
      .send(productObj);
    expect(res.statusCode).toBe(403);
  });
  it('should return 200 for valid request and token', async () => {
    const res = await request(app)
      .post('/api/product/create')
      .send(productObj)
      .set('Authorization', token);
          
    expect(res.statusCode).toBe(200);
  });
  
});