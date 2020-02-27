const { createProduct } = require('../../logic/product/create');
const { deleteProductById } = require('../../logic/product/delete');
const Product = require('../../models/Product');
const app = require('../../app');

let id;
const create = async (n) => {
  for (let i = 100; i <= 100 + n; i++) {
    const productObj = {
      name: `Nazirshail${i}`,
      price: 120,
      picture: ['adasda.jpg'],
      description: 'adashgfdaghs dadbnadb abgd;s',
      unit: 'kg',
      size: 1 + i,
      totalUnit: 500,
      category: i % 2 ? 'Rice' : 'Vegitable',
      subCategory: i % 3 ? 'x' : 'y'
    };
    ({ id } = await createProduct(productObj));
  }
}

describe('LOGIC deleteProductById', () => {
  beforeEach(async() => {
    await Product.deleteMany({});
    await create(2);
  });
  it('should delete a product by Id', async () => {
    const product = await deleteProductById(id);    
    expect(product).not.toBeNull();
    expect(product).not.toBeUndefined();
    expect(product._id.toString()).toMatch(id);
  });
});