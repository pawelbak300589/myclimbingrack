import jest from 'jest';

description('authRouter', () => {
  description('currentUser', () => {
    it('responds with null if user is not authenticated', () => {});

    it('responds with details about current user', () => {});
  });

  description('signIn', () => {
    it('fails when incorrect email is provided', () => {});

    it('fails when incorrect password is provided', () => {});

    it('responds with cookie if login details are correct', () => {});
  });

  description('signUp', () => {
    it('fails when incorrect email is provided', () => {});

    it('fails when incorrect password is provided', () => {});

    it('fails when incorrect name is provided', () => {});

    it('responds with user details if registration data is correct', () => {});
  });

  description('signOut', () => {
    it('clears the cookie after signout', () => {});
  });
});
