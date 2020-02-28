const { createProduct } = require('../../../logic/product/create');
const { updateProductById, makeDiscount, makeDiscountZero, makeSell } = require('../../../logic/product/update');
const Product = require('../../../models/Product');
const app = require('../../../app');

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

describe.skip('LOGIC updateProductById', () => {
  beforeEach(async () => {
    await Product.deleteMany({});
    await create(10);
  });
  afterEach(async () => {
    await Product.deleteMany({});
  });
  it('should return updated product', async () => {
    const product = await updateProductById(id, { name: 'Minicate', picture: ['xyz'],  });
    expect(product).not.toBeNull();
    expect(product).not.toBeUndefined();
    expect(product.name).toMatch(/Minicate/i);
    expect(product.picture[0]).toMatch(/xyz/);
  });
});

describe.skip('LOGIC makeSell', () => {
  beforeEach(async () => {
    await Product.deleteMany({});
    await create(10);
  });
  afterEach(async () => {
    await Product.deleteMany({});
  });
  it('should return product with totalNumberOfSell 1 and  totalUnit 499', async () => {
    const product = await makeSell(id);
    expect(product).not.toBeNull();
    expect(product).not.toBeUndefined();
    expect(product.totalUnit).toEqual(499);
    expect(product.totalNumberOfSell).toEqual(1);
  });
});

describe.skip('LOGIC makeDiscount', () => {
  beforeEach(async () => {
    await Product.deleteMany({});
    await create(10);
  });
  afterEach(async () => {
    await Product.deleteMany({});
  });
  it('should return a discount given product', async () => {
    const product = await makeDiscount(id, 10);
    expect(product).not.toBeNull();
    expect(product).not.toBeUndefined();
    expect(product.price).toEqual(108);
    expect(product.discountPrice.amount).toEqual(10);
    expect(product.discountPrice.originalPrice).toEqual(120);
  });
});

describe.skip('LOGIC makeDiscountZero', () => {
  beforeEach(async () => {
    await Product.deleteMany({});
    await create(10);
  });
  afterEach(async () => {
    await Product.deleteMany({});
  });
  it('should return a discount zero product', async () => {
    await makeDiscount(id, 10);

    const product = await makeDiscountZero(id, 10);
    expect(product).not.toBeNull();
    expect(product).not.toBeUndefined();
    expect(product.price).toEqual(120);
    expect(product.discountPrice.amount).toEqual(0);
    expect(product.discountPrice.originalPrice).toEqual(120);
  });
});