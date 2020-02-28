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
const create = async (n) => {
  for (let i = 1; i <= n; i++) {
    const productObj2 = {
      name: `Nazirshail${i}`,
      price: 56 + i,
      picture: ['adasda.jpg'],
      description: 'adashgfdaghs dadbnadb abgd;s',
      unit: 'kg',
      size: 1 + i,
      totalUnit: 500 + i,
      category: i % 2 ? 'Rice' : 'Vegitable',
      subCategory: i % 3 ? 'X' : 'Y'
    };
    await new Product(productObj2).save();
  }
}
describe('PRODUCT API', () => {
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
  describe('GET products', () => {
    it('should return first 20 products', async () => {
      await create(100);
      const res = await request(app)
        .get(`/api/product`);
      expect(res.statusCode).toBe(200);
      expect(res.body.data.products.length).toEqual(20);
      expect(res.body.data.hasMore).toBeTruthy();
    });
    it('should return next 20 products', async () => {
      const res = await request(app)
        .get(`/api/product`);
      const { _id: id } = res.body.data.products[19];
      const res2 = await request(app)
        .get(`/api/product?lastId=${id}&page=2`);
      expect(res2.statusCode).toBe(200);
      expect(res2.body.data.products.length).toEqual(20);
      expect(res2.body.data.hasMore).toBeTruthy();
      expect(res2.body.data.products[0]._id.toString()).not.toBe(res.body.data.products[0]._id.toString());
    });
    it('should return only Rice category product', async () => {
      const res = await request(app)
        .get(`/api/product?category=Rice`);
      expect(res.statusCode).toBe(200);
      expect(res.body.data.products.length).toEqual(20);
      expect(res.body.data.hasMore).toBeTruthy();
      res.body.data.products.forEach(product => {
        expect(product.category).toMatch(/Rice/i);
      });
    });

    it('should return only Y  subcategory product', async () => {
      const res = await request(app)
        .get(`/api/product?subcategory=Y`);
      expect(res.statusCode).toBe(200);
      expect(res.body.data.products.length).toEqual(20);
      expect(res.body.data.hasMore).toBeTruthy();
      res.body.data.products.forEach(product => {
        expect(product.subCategory).toMatch(/Y/i);
      });
    });
  });
});