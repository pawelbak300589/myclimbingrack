import jwt from 'jsonwebtoken';

beforeAll(async () => {
  process.env.JWT_KEY = 'asdasdasd';
});

beforeEach(async () => {});

afterAll(async () => {});

global.signin = async () => {
  const payload = {
    id: 1,
    email: 'test@test.com',
  };
  const token = jwt.sign(payload, process.env.JWT_KEY);
  const session = { jwt: token };
  const sessionJSON = JSON.stringify(session);
  const base64 = Buffer.from(sessionJSON).toString('base64');

  return [`express:sess=${base64}`];
};
