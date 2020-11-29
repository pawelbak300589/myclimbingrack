import gearService from '../services/gears';

const create = async (req, res) => {
  try {
    const gear = await gearService.create(req);
    return res.status(201).json({
      gear,
    });
  } catch (error) {
    next(error);
  }
};

const update = async (req, res) => {
  try {
    const gear = await gearService.update(req);
    return res.status(200).json({
      gear,
    });
  } catch (error) {
    next(error);
  }
};

const remove = async (req, res) => {
  try {
    const gear = await gearService.remove(req);
    return res.status(200).json({
      gear,
    });
  } catch (error) {
    next(error);
  }
};

const getAll = async (req, res) => {
  try {
    const gears = await gearService.getAll(req);
    return res.status(200).json({
      gears,
    });
  } catch (error) {
    next(error);
  }
};

const getOne = async (req, res) => {
  try {
    const gear = await gearService.getOne(req);
    return res.status(200).json({
      gear,
    });
  } catch (error) {
    next(error);
  }
};

export default { create, update, remove, getAll, getOne };
