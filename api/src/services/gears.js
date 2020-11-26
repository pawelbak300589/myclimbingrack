import { Gear } from '../models/';

const create = async (name, description, userId) => {
  // TODO: check if gear already exist
  return await Gear.create({ name, description, userId });
};

const update = async (id, name, description, userId) => {
  return await Gear.update(
    { name, description, userId },
    {
      where: {
        id: id,
      },
    }
  );
};

const remove = async (id) => {
  return await Gear.destroy({
    where: {
      id: id,
    },
  });
};

const getAll = async () => {
  const gears = await Gear.findAll();
  if (gears === null) {
    throw new Error('No gears found!');
  }
  return gears;
};

const getOne = async (id) => {
  const gear = await Gear.findByPk(id);
  if (gear === null) {
    throw new Error('Gear not found!');
  }
  return gear;
};

export default { create, update, remove, getAll, getOne };
