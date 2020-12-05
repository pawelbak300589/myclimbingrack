const express = require('express');
const { body } = require('express-validator');

const setsController = require('../controllers/sets.js');
const { validateRequest } = require('../middlewares/index.js');
const { Set } = require('../models/index.js');

const router = express.Router();

// TODO: add validations
// TODO: add validation middleware

router.get('/', setsController.getAll);
router.get('/:id', setsController.getOne);
router.post(
  '/',
  [
    body('name')
      .not()
      .isEmpty()
      .withMessage('Please enter set name.')
      .custom(async (name) => {
        const exists = await Set.findOne({
          where: {
            name: name,
          },
        });
        if (exists) {
          throw new Error('Set name already in use');
        }
      })
      .trim()
      .escape(),
    body('description').trim().escape(),
    body('order')
      .not()
      .isNumeric()
      .withMessage('Order must be numeric.')
      .isEmpty()
      .withMessage('Order is mandatory.'),
    body('userId')
      .not()
      .isNumeric()
      .withMessage('UserID must be numeric.')
      .isEmpty()
      .withMessage('UserID is mandatory.'),
  ],
  validateRequest,
  setsController.create
);
router.put(
  '/:id',
  [
    body('name')
      .not()
      .isEmpty()
      .withMessage('Please enter set name.')
      .custom(async (name) => {
        const exists = await Set.findOne({
          where: {
            name: name,
          },
        });
        if (exists) {
          throw new Error('Set name already in use');
        }
      })
      .trim()
      .escape(),
    body('description').trim().escape(),
    body('order')
      .not()
      .isNumeric()
      .withMessage('Order must be numeric.')
      .isEmpty()
      .withMessage('Order is mandatory.'),
    body('userId')
      .not()
      .isNumeric()
      .withMessage('UserID must be numeric.')
      .isEmpty()
      .withMessage('UserID is mandatory.'),
  ],
  validateRequest,
  setsController.update
);
router.delete('/', setsController.remove);

module.exports = router;
