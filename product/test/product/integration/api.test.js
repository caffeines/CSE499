const app = require('../../../app');
const Product = require('../../../models/Product');
const request = require('supertest');
const { jwtToken, jwtPublicToken } = require('../../../config/testEnv');

const token = `bearer ${jwtToken}`;

const productObj = {
  name: 'Nazirshail',
  price: 56,
  picture: ['adasda.jpg'],
  description: 'adashgfdaghs dadbnadb abgd;s',
  unit: 'kg',
  size: 1,
  totalUnit: 500,
  category: 'Rice',
  subCategory: 'Rice'
}
describe('PRODUCT API', () => {
  beforeEach(async () => {
    await Product.deleteMany({});
  });

  describe('POST create product', () => {
    it('should return 403 forbidden for without token', async () => {
      let res = await request(app)
        .post('/api/product')
        .send(productObj);
      expect(res.statusCode).toBe(401);
    });

    it('should return 200 for valid request and token', async () => {
      const res = await request(app)
        .post('/api/product')
        .send(productObj)
        .set('Authorization', token);
      expect(res.statusCode).toBe(200);
    });
  });

  describe('PATCH update product', () => {

    it('should update a product with 200', async () => {
      const product = await new Product(productObj).save();
      const res = await request(app)
        .patch(`/api/product/${product._id}`)
        .send({ ...productObj, name: 'Miniket' })
        .set('Authorization', token);

      expect(res.statusCode).toBe(200);
      expect(res.body.data.name).toMatch(/Miniket/i);
    });

    it('should reject with 403 for public token', async () => {
      const product = await new Product(productObj).save();

      const res = await request(app)
        .patch(`/api/product/${product._id}`)
        .send({ ...productObj, name: 'Miniket' })
        .set('Authorization', `bearer ${jwtPublicToken}`);

      expect(res.statusCode).toBe(403);
    });
  });

  describe('GET product by id', () => {
    it('should return a product without token', async () => {
      const product = await new Product(productObj).save();

      const res = await request(app)
        .get(`/api/product/${product._id}`);

      expect(res.statusCode).toBe(200);
    });
  });
});