const usersService = require('../services/users.js');

const getAll = async (req, res) => {
  return res.status(200).json({
    test: 'test',
  });
};

const create = async (req, res) => {
  try {
    const user = await usersService.create(req.body);
    return res.status(201).json({
      user,
    });
  } catch (error) {
    // TODO: more inteligent error handling
    return res.status(500).json({ error: error.message });
  }
};

const update = async (req, res) => {
  // TODO
};

const remove = async (req, res) => {
  // TODO
};

module.exports = { getAll, create, update, remove };
