const { Gear } = require('../models/index.js');

const create = async (req) => {
  const { name, description } = req.body;
  const userId = req.currentUser.id;
  return await Gear.create({ name, description, userId });
};

const update = async (req) => {
  const { name, description } = req.body;
  const userId = req.currentUser.id;
  return await Gear.update(
    { name, description, userId },
    {
      where: {
        id: req.params.id,
        userId: userId,
      },
    }
  );
};

const remove = async (req) => {
  return await Gear.destroy({
    where: {
      id: req.params.id,
      userId: req.currentUser.id,
    },
  });
};

const getAll = async (req) => {
  const gears = await Gear.findAll({
    where: {
      userId: req.currentUser.id,
    },
  });
  if (gears === null) {
    throw new Error('No gears found!');
  }
  return gears;
};

const getOne = async (req) => {
  const gear = await Gear.findOne({
    where: { id: req.params.id, userId: req.currentUser.id },
  });
  if (gear === null) {
    throw new Error('Gear not found!');
  }
  return gear;
};

module.exports = { create, update, remove, getAll, getOne };
