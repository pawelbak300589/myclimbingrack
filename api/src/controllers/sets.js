import setService from '../services/sets';

const create = async (req, res) => {
  const { name, description, order, userId } = req.body;
  try {
    const set = await setService.create(name, description, order, userId);
    return res.status(201).json({
      set,
    });
  } catch (error) {
    next(error);
  }
};

const update = async (req, res) => {
  const id = req.params.id;
  const { name, description, order, userId } = req.body;
  try {
    const set = await setService.update(id, name, description, order, userId);
    return res.status(200).json({
      set,
    });
  } catch (error) {
    next(error);
  }
};

const remove = async (req, res) => {
  const id = req.params.id;
  try {
    const set = await setService.remove(id);
    return res.status(200).json({
      set,
    });
  } catch (error) {
    next(error);
  }
};

const getAll = async (req, res) => {
  try {
    const sets = await setService.getAll();
    return res.status(200).json({
      sets,
    });
  } catch (error) {
    next(error);
  }
};

const getOne = async (req, res) => {
  const id = req.params.id;
  try {
    const set = await setService.getOne(id);
    return res.status(200).json({
      set,
    });
  } catch (error) {
    next(error);
  }
};

export default { create, update, remove, getAll, getOne };
