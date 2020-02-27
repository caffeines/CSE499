const request = require('supertest');
const User = require('../models/User');
const app = require('../app');
const username = '8801710027639';
const token = 'bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Ijg4MDE3MTAwMjc2MzkiLCJyb2xlIjoiY3VzdG9tZXIiLCJpZCI6IjVlNTYzZTk1YmU2OGIwN2ZmYWEzMzM0YyIsImlhdCI6MTU4MjcxNTUwNCwiZXhwIjoxNTg1NzE1NTA0fQ.TvZsAXKGZ2Ah0EL2vGxQctKYxhnZKz4KcVWhS3i5_SM'
describe('GET /api/customer/profile/:username', () => {
  beforeEach(async () => {
    await User.deleteMany({});
    const user = await new User({ username }).save();
  });
  afterEach(async () => {
    await User.deleteMany({});
  });
  it('should return 200 and an user profile', async () => {
    const res = await request(app)
      .get(`/api/customer/profile`)
      .set('Authorization', token);

    expect(res.statusCode).toBe(200);
    expect(res.body.data).not.toBeUndefined();
    expect(res.body.data.username).toBe(username);
  });
  it('should return 403 for without token', async () => {
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
  beforeAll(async () => {
    await User.deleteMany({});
    const user = await new User({ username }).save();
  });
  afterAll(async () => {
    await User.deleteMany({});
  });
  const options = {
    name: 'Sadat',
    profilePic: 'https://cdn.vox-cdn.com/thumbor/yU7dbyR-N-m1lWDyLhaJPydUESg=/0x33:640x393/1600x900/cdn.vox-cdn.com/assets/1496753/stevejobs.jpg',
    address: 'Dhaka, Bangladesh'
  }
  it('should return 403 for without token', async () => {
    const res = await request(app)
      .patch('/api/customer');
    expect(res.statusCode).toBe(403);
  });

  it('should return 403 for invalid request data', async () => {
    const opt = {
      ...options,
      email: 'sadat.talks@gmail.com'
    };
    const res = await request(app)
      .patch('/api/customer')
      .send(opt)
      .set('Authorization', token);

    expect(res.statusCode).toBe(400);
    expect(res.body.errors.message).toMatch(/Invalid request/i);
  });
  it('should return 200 for valid request and token', async () => {
    const res = await request(app)
      .patch('/api/customer')
      .send(options)
      .set('Authorization', token);

    expect(res.statusCode).toBe(200);
    expect(res.body.data).not.toBeNull();
    expect(res.body.data.name).toMatch(/sadat/i);
  });
});