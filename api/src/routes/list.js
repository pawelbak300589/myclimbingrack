import express from 'express';
import { body } from 'express-validator';

import listsController from '../controllers/lists';
import { validateRequest } from '../middlewares';
import { List } from '../models';

const router = express.Router();

// TODO: add validations
// TODO: add validation middleware

router.get('/', listsController.getAll);
router.get('/:id', listsController.getOne);
router.post(
  '/',
  [
    body('name')
      .not()
      .isEmpty()
      .withMessage('Please enter list name.')
      .custom(async (name) => {
        const exists = await List.findOne({
          where: {
            name: name,
          },
        });
        if (exists) {
          throw new Error('List name already in use');
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
  listsController.create
);
router.put(
  '/:id',
  [
    body('name')
      .not()
      .isEmpty()
      .withMessage('Please enter list name.')
      .custom(async (name) => {
        const exists = await List.findOne({
          where: {
            name: name,
          },
        });
        if (exists) {
          throw new Error('List name already in use');
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
  listsController.update
);
router.delete('/', listsController.remove);

export default router;
