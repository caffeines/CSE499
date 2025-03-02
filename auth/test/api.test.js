const request = require('supertest');
const app = require('../app');

const postEnter = async (username) => {
  const res = await request(app)
    .post('/api/auth/enter')
    .send({ username: username })
    .set('Accept', 'application/json');
  return res;
}

describe('POST /api/auth/enter', () => {
  it('should return status 200 with valid contact', async () => {
    const res = await postEnter('8801710027639');
    expect(res.statusCode).toBe(200);
  });

  it('should return success message with valid contact', async () => {
    const res = await postEnter('8801710027639');
    expect(res.body.data.message).toMatch(/OTP sent/i);
  });

  it('should return 400 and Username required message', async () => {
    const res = await postEnter();
    expect(res.statusCode).toBe(400);
    expect(res.body.errors.message).toMatch(/username required/i);
  });

  it('should return 400 and not valid massage', async () => {
    const res = await postEnter('01710027639');
    expect(res.statusCode).toBe(400);
    expect(res.body.errors.message).toMatch(/Contact number is not valid/i);
  });
});

const postResendOtp = async (username) => {
  const res = await request(app)
    .post('/api/auth/resend-otp')
    .send({ username: username })
    return res;
}

describe('POST /api/auth/resend-otp', () => {
  it('should return 400 and Username required message', async () => {
    const res = await postResendOtp();
    expect(res.statusCode).toBe(400);
    expect(res.body.errors.message).toMatch(/username required/i);
  });

  it('should return 400 and not valid massage', async () => {
    const res = await postResendOtp('01710027639');
    expect(res.statusCode).toBe(400);
    expect(res.body.errors.message).toMatch(/Contact number is not valid/i);
  });
  it('should return status 200 with valid contact', async () => {
    const res = await postResendOtp('8801710027639');
    expect(res.statusCode).toBe(200);
  });

  it('should return success message with valid contact', async () => {
    const res = await postResendOtp('8801710027639');
    expect(res.body.data.message).toMatch(/OTP sent/i);
  });
});


const postVerifyOtp = async (username, otp) => {
  const res = await request(app)
    .post('/api/auth/verify-otp')
    .send({ username, otp })
    return res;
}

describe('POST /api/auth/verify-otp', () => {
  it('should return 400 and OTP not provided message', async () => {
    const res = await postVerifyOtp('8801710027639',);
    expect(res.statusCode).toBe(400);
    expect(res.body.errors.message).toMatch(/OTP not provided/i);
  });

  it('should return 404 and OTP not matched message', async () => {
    const res = await postVerifyOtp('8801710027639', '123456');
    expect(res.statusCode).toBe(404);
    expect(res.body.errors.message).toMatch(/OTP not matched/i);
  });
  
  it('should it return 200, with token and profile', async () => {
    const res = await postVerifyOtp('8801710027639','111111');    
    expect(res.statusCode).toBe(200);
    expect(res.body.data.token).not.toBeUndefined();
    expect(res.body.data.token).not.toBeNull();
    expect(res.body.data.message).toMatch(/User OTP verified/i);
    expect(typeof(res.body.data.token)).toBe('string');
    expect(res.body.data.profile._id).not.toBeNull();
    expect(res.body.data.profile._id).not.toBeUndefined();
  });
});