import { Set } from '../models';

const create = async (name, description, order, userId) => {
  // TODO: check if set already exist
  return await Set.create({ name, description, order, userId });
};

const update = async (id, name, description, order, userId) => {
  return await Set.update(
    { name, description, order, userId },
    {
      where: {
        id: id,
      },
    }
  );
};

const remove = async (id) => {
  return await Set.destroy({
    where: {
      id: id,
    },
  });
};

const getAll = async () => {
  const sets = await Set.findAll();
  if (sets === null) {
    throw new Error('No sets found!');
  }
  return sets;
};

const getOne = async (id) => {
  const set = await Set.findByPk(id);
  if (set === null) {
    throw new Error('Set not found!');
  }
  return set;
};

export default { create, update, remove, getAll, getOne };
