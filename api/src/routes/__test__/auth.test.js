const request = require('supertest');
const app = require('../../app');

describe('authRouter', () => {
  describe('currentUser', () => {
    it('responds with null if user is not authenticated', () => { });

    it('responds with details about current user', () => { });
  });

  describe('signIn', () => {
    it('fails when incorrect email is provided', () => {
      // return request(app)
      //   .post('/api/auth/signin')
      //   .send({
      //     email: 'test@test.com',
      //     password: 'password',
      //   })
      //   .expect(400);
    });

    it('fails when incorrect password is provided', () => { });

    it('responds with cookie if login details are correct', () => { });
  });

  describe('signUp', () => {
    it('fails when incorrect email is provided', () => { });

    it('fails when incorrect password is provided', () => { });

    it('fails when incorrect name is provided', () => { });

    it('responds with user details if registration data is correct', () => { });
  });

  describe('signOut', () => {
    it('clears the cookie after signout', () => { });
  });
});
