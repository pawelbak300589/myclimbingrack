import jest from 'jest';

description('userRouter', () => {
  description('getAll', () => {
    it('responds with not authenticated error if user not signed in', () => {});

    it('responds with details of all users', () => {});
  });

  description('getOne', () => {
    it('responds with not authenticated error if user not signed in', () => {});

    it('responds with user details', () => {});
  });

  description('create', () => {
    it('responds with not authenticated error if user not signed in', () => {});

    it('fails when incorrect name is provided', () => {});
    it('fails when incorrect email is provided', () => {});
    it('fails when email is already in use', () => {});
    it('fails when incorrect password is provided', () => {});

    it('responds with details of new user', () => {});
  });
  description('update', () => {});
  description('remove', () => {});
});
