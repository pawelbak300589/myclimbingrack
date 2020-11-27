import express from 'express';
import { body } from 'express-validator';

import gearsController from '../controllers/gear';
import { validateRequest } from '../middlewares';
import { Gear } from '../models';

const router = express.Router();

// TODO: add validations
// TODO: add validation middleware

router.get('/api/gears/', gearsController.getAll);
router.get('/api/gears/:id', gearsController.getOne);
router.post(
  '/api/gears/',
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
  '/api/gears/:id',
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
router.delete('/api/gears/', gearsController.remove);

export default router;
