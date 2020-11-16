import express from 'express';
import { body } from 'express-validator';

import authController from '../controller/auth';

const router = express.Router();

// TODO: add validation middleware

router.get('/current-user', authController.currentUser);
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
    body('name')
    .not()
    .isEmpty()
    .withMessage('Please enter user name.')
    .trim(),
  ],
  authController.signUp
);
router.post('/signout', authController.signOut);

export default router;
