import gearService from '../services/gears';

const create = async (req, res) => {
  const { name, description, userId } = req.body;
  try {
    const gear = await gearService.create(name, description, userId);
    return res.status(201).json({
      gear,
    });
  } catch (error) {
    next(error);
  }
};

const update = async (req, res) => {
  const id = req.params.id;
  const { name, description, userId } = req.body;
  try {
    const gear = await gearService.update(id, name, description, userId);
    return res.status(200).json({
      gear,
    });
  } catch (error) {
    next(error);
  }
};

const remove = async (req, res) => {
  const id = req.params.id;
  try {
    const gear = await gearService.remove(id);
    return res.status(200).json({
      gear,
    });
  } catch (error) {
    next(error);
  }
};

const getAll = async (req, res) => {
  try {
    const gears = await gearService.getAll();
    return res.status(200).json({
      gears,
    });
  } catch (error) {
    next(error);
  }
};

const getOne = async (req, res) => {
  const id = req.params.id;
  try {
    const gear = await gearService.getOne(id);
    return res.status(200).json({
      gear,
    });
  } catch (error) {
    next(error);
  }
};

export default { create, update, remove, getAll, getOne };
