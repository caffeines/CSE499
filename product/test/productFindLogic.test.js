const { findProductById, findProductsByName, findProducts } = require('../logic/product/find');
const { createProduct } = require('../logic/product/create');
const Product = require('../models/Product');
const app = require('../app');

let id;
const create = async (n) => {
  for (let i = 1; i <= n; i++) {
    const productObj = {
      name: `Nazirshail${i}`,
      price: 56 + i,
      picture: ['adasda.jpg'],
      description: 'adashgfdaghs dadbnadb abgd;s',
      unit: 'kg',
      size: 1 + i,
      totalUnit: 500 + i,
      category: i % 2 ? 'Rice' : 'Vegitable',
      subCategory: i % 3 ? 'x' : 'y'
    };
    ({ id } = await createProduct(productObj));
  }
}

describe('LOGIC findProductById', () => {
  beforeAll(async () => {
    await Product.deleteMany({});
    await create(10);
  });
  it('should return a product', async () => {
    const product = await findProductById(id);
    expect(product).not.toBeNull();
    expect(product).not.toBeUndefined();
    expect(product.name).toMatch(/Nazirshail/i);
  });
});

describe('LOGIC findProductsByName', () => {
  beforeAll(async () => {
    await Product.deleteMany({});
    await create(10);
  });
  it('should return product name with Nazirshail for Nazirs', async () => {
    const [product] = await findProductsByName('Nazirs');
    expect(product).not.toBeUndefined();
    expect(product).not.toBeNull();
    expect(product.name).toMatch(/Nazirshail/i);
  });

  it('should return product name with Nazirshail for nazirshail10', async () => {
    const [product] = await findProductsByName('nazirshail10');
    expect(product).not.toBeUndefined();
    expect(product).not.toBeNull();
    expect(product.name).toMatch(/Nazirshail10/i);
  });

  it('should return product name with Nazirshail for not present name', async () => {
    const product = await findProductsByName('nazirshail10a');
    expect(product).not.toBeUndefined();
    expect(product).not.toBeNull();
    expect(product.length).toBe(0);
  });
});

describe('LOGIC findProducts', () => {
  let lastId;
  beforeAll(async () => {
    await Product.deleteMany({});
    await create(100);
  });
  it('should return first 20 products for no params', async () => {
    const { products, hasMore } = await findProducts();
    lastId = products[19]._id;        
    expect(products).not.toBeNull();
    expect(products).not.toBeUndefined();
    expect(products.length).toBe(20);
    expect(hasMore).toBeTruthy();
  });

  it('should return next 20 products for lastId as param', async () => {
    const { products } = await findProducts(lastId);
    expect(products).not.toBeNull();
    expect(products).not.toBeUndefined();
    expect(products.length).toBe(20);
    expect(products[19].name).toMatch('Nazirshail40');    
  });

  it('should return Rice category products for Rice as param', async () => {
    const { products } = await findProducts(null, 'Rice');
    expect(products).not.toBeNull();
    expect(products).not.toBeUndefined();
    products.forEach(product => {
      expect(product.category).toMatch(/rice/i);
    });
  });

  it('should return Rice category and x subCategory products for Rice and x as param', async () => {
    const { products } = await findProducts(null, 'Rice', 'x');
    expect(products).not.toBeNull();
    expect(products).not.toBeUndefined();
    products.forEach(product => {
      expect(product.category).toMatch(/rice/i);
      expect(product.subCategory).toMatch(/x/i);
    });
  });

  it('should return only x subCategory products for x as param', async () => {
    const { products } = await findProducts(null, null, 'x');
    expect(products).not.toBeNull();
    expect(products).not.toBeUndefined();
    products.forEach(product => {
      expect(product.subCategory).toMatch(/x/i);
    });
  });
});