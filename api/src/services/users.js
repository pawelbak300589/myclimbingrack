const { User } = require('../models/index.js');

const create = async (firstName, lastName, email, password) => {
  // TODO: validate email and throw errors if email exists etc.
  // TODO: generate hash for password

  return await User.create({ firstName, lastName, email, password });
};

const update = async (id, firstName, lastName, email, password) => {
  // TODO: should be able to update email? maybe add emailValidation process???
  // TODO: generate hash for password

  return await User.update(
    { firstName, lastName, email, password },
    {
      where: {
        id: id,
      },
    }
  );
};

const remove = async (id) => {
  return await User.destroy({
    where: {
      id: id,
    },
  });
};

const getAll = async () => {
  const users = await User.findAll();
  if (users === null) {
    throw new Error('No users found!');
  }
  return users;
};

const getOne = async (id) => {
  const user = await User.findByPk(id);
  if (user === null) {
    throw new Error('User not found!');
  }
  return user;
};

module.exports = { create, update, remove, getAll, getOne };
