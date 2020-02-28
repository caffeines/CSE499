const { createProduct } = require('../../../logic/product/create');
const app = require('../../../app');
describe.skip('LOGIC create', () => {
  it('should create new product', async () => {
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
    const product = await createProduct(productObj);
    expect(product).not.toBeNull();
    expect(product._id).not.toBeNull();
  });
  it('should reject with erorrs for invalid product object', async () => {
    const productObj = {
      name: 'Nazirshail',
      price: 56,
      picture: ['adasda.jpg']
    }
    try {
      const product = await createProduct(productObj);
    } catch (error) {
      expect(error).not.toBeNull();
    }
  });
  
});