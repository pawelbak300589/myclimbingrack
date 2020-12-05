const listService = require('../services/lists.js');

const create = async (req, res) => {
  const { name, description, order, userId } = req.body;
  try {
    const list = await listService.create(name, description, order, userId);
    return res.status(201).json({
      list,
    });
  } catch (error) {
    next(error);
  }
};

const update = async (req, res) => {
  const id = req.params.id;
  const { name, description, order, userId } = req.body;
  try {
    const list = await listService.update(id, name, description, order, userId);
    return res.status(200).json({
      list,
    });
  } catch (error) {
    next(error);
  }
};

const remove = async (req, res) => {
  const id = req.params.id;
  try {
    const list = await listService.remove(id);
    return res.status(200).json({
      list,
    });
  } catch (error) {
    next(error);
  }
};

const getAll = async (req, res) => {
  try {
    const lists = await listService.getAll();
    return res.status(200).json({
      lists,
    });
  } catch (error) {
    next(error);
  }
};

const getOne = async (req, res) => {
  const id = req.params.id;
  try {
    const list = await listService.getOne(id);
    return res.status(200).json({
      list,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = { create, update, remove, getAll, getOne };
