const request = require('supertest');
const User = require('../models/User');
const app = require('../app');
const username = '8801710027639';
const token = 'bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Ijg4MDE3MTAwMjc2MzkiLCJyb2xlIjoiY3VzdG9tZXIiLCJpZCI6IjVlNTYzZTk1YmU2OGIwN2ZmYWEzMzM0YyIsImlhdCI6MTU4MjcxNTUwNCwiZXhwIjoxNTg1NzE1NTA0fQ.TvZsAXKGZ2Ah0EL2vGxQctKYxhnZKz4KcVWhS3i5_SM'
describe('GET /api/customer/profile/:username', () => {
  beforeEach(async () => {
    await User.remove({});
    const user = await new User({ username }).save();
  });
  afterEach(async () => {
    await User.remove({});
  });
  it('should return 200 and an user profile', async () => {
    const res = await request(app)
      .get(`/api/customer/profile`)
      .set('Authorization', token);

    expect(res.statusCode).toBe(200);
    expect(res.body.data).not.toBeUndefined();
    expect(res.body.data.username).toBe(username);
  });
  it('should return 403 without token', async () => {
    const res = await request(app)
      .get(`/api/customer/profile`);

    expect(res.statusCode).toBe(403);
    expect(res.body.errors.message).toMatch(/Not logged in/i);
  });
  it('should returnt 401 for invalid token', async () => {
    const res = await request(app)
      .get(`/api/customer/profile`)
      .set('Authorization', `${token}as`);
    expect(res.statusCode).toBe(401);
    expect(res.body.errors.message).toMatch(/unauthorized/i);
  });
});

describe('PATCH /api/customer', () => {
  it('should ', async () => {

  });
});