import { List } from '../models';

const create = async (name, description, order, userId) => {
  // TODO: check if list already exist
  return await List.create({ name, description, order, userId });
};

const update = async (id, name, description, order, userId) => {
  return await List.update(
    { name, description, order, userId },
    {
      where: {
        id: id,
      },
    }
  );
};

const remove = async (id) => {
  return await List.destroy({
    where: {
      id: id,
    },
  });
};

const getAll = async () => {
  const lists = await List.findAll();
  if (lists === null) {
    throw new Error('No lists found!');
  }
  return lists;
};

const getOne = async (id) => {
  const list = await List.findByPk(id);
  if (list === null) {
    throw new Error('List not found!');
  }
  return list;
};

export default { create, update, remove, getAll, getOne };
