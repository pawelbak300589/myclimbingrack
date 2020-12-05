const express = require('express');
const { body } = require('express-validator');

const gearsController = require('../controllers/gears.js');
const { validateRequest, requireAuth } = require('../middlewares/index.js');
const { Gear } = require('../models/index.js');

const router = express.Router();

// TODO: add validations
// TODO: add validation middleware

router.get('/', requireAuth, gearsController.getAll);
router.get('/:id', requireAuth, gearsController.getOne);
router.post(
  '/',
  requireAuth,
  [
    body('name')
      .not()
      .isEmpty()
      .withMessage('Please enter gear name.')
      .custom(async (name) => {
        const exists = await Gear.findOne({
          where: {
            name: name,
          },
        });
        if (exists) {
          throw new Error('Gear name already in use');
        }
      })
      .trim()
      .escape(),
    body('description').trim().escape(),
    body('userId')
      .not()
      .isNumeric()
      .withMessage('UserID must be numeric.')
      .isEmpty()
      .withMessage('UserID is mandatory.'),
  ],
  validateRequest,
  gearsController.create
);
router.put(
  '/:id',
  requireAuth,
  [
    body('name')
      .not()
      .isEmpty()
      .withMessage('Please enter gear name.')
      .trim()
      .escape(),
    body('description').trim().escape(),
    body('userId')
      .not()
      .isNumeric()
      .withMessage('UserID must be numeric.')
      .isEmpty()
      .withMessage('UserID is mandatory.'),
  ],
  validateRequest,
  gearsController.update
);
router.delete('/', requireAuth, gearsController.remove);

module.exports = router;
