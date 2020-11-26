import express from 'express';
import { body } from 'express-validator';

import authController from '../controllers/auth';
import { currentUser, validateRequest } from '../middlewares';

const router = express.Router();

router.get('/current-user', currentUser, authController.currentUser);
router.post(
  '/signin',
  [
    body('email')
      .isEmail()
      .withMessage('Please enter correct email and password.')
      .normalizeEmail(),
    body('password')
      .not()
      .isEmpty()
      .withMessage('Please enter correct email and password.')
      .trim(),
  ],
  validateRequest,
  authController.signIn
);
router.put(
  '/signup',
  [
    body('email')
      .isEmail()
      .withMessage('Please enter correct email address.')
      .normalizeEmail(),
    body('password')
      .isLength({ min: 4 })
      .withMessage('Please enter password longer than 4 characters.')
      .trim(),
    body('name').not().isEmpty().withMessage('Please enter user name.').trim(),
  ],
  validateRequest,
  authController.signUp
);
router.post('/signout', authController.signOut);

export default router;
