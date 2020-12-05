const request = require('supertest');
const app = require('../../app');

describe('gearRouter', () => {
  describe('create', () => {
    // it('responds with not authenticated error if user not signed in', () => {});
    // it('fails when incorrect name is provided', () => {});
    // it('fails when incorrect email is provided', () => {});
    // it('fails when email is already in use', () => {});
    // it('fails when incorrect password is provided', () => {});
    // it('responds with details of new user', () => {});
  });
  describe('update', () => { });
  describe('remove', () => { });
  describe('getAll', () => {
    it('responds with not authenticated error if user not signed in', async () => {
      await request(app).get('/api/gears').expect(401);
    });

    it('successfully responds with list of all gears', async () => {
      const res = await request(app)
        // .set('Cookie', global.signin())
        .get('/api/gears');

      expect(res.status).toEqual(200);
      expect(res.body).toHaveProperty('gears');
    });
  });

  describe('getOne', () => {
    // it('responds with not authenticated error if user not signed in', () => {});
    // it('responds with user details', () => {});
  });
});
