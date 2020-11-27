import express from 'express';
import { body } from 'express-validator';

import setsController from '../controllers/sets';
import { validateRequest } from '../middlewares';
import { Set } from '../models';

const router = express.Router();

// TODO: add validations
// TODO: add validation middleware

router.get('/api/sets/', setsController.getAll);
router.get('/api/sets/:id', setsController.getOne);
router.post(
  '/api/sets/',
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
  '/api/sets/:id',
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
router.delete('/api/sets/', setsController.remove);

export default router;
