import express from 'express';
import { body } from 'express-validator';

import authController from '../controllers/auth';
import { authorize, validateRequest } from '../middlewares';

const router = express.Router();

router.post(
  '/authenticate',
  authenticateSchema,
  validateRequest,
  authController.authenticate
);
router.post('/refresh-token', authController.refreshToken);
router.post(
  '/revoke-token',
  authorize(),
  revokeTokenSchema,
  validateRequest,
  authController.revokeToken
);
router.post(
  '/register',
  registerSchema,
  validateRequest,
  authController.register
);
router.post(
  '/verify-email',
  verifyEmailSchema,
  validateRequest,
  authController.verifyEmail
);
router.post(
  '/forgot-password',
  forgotPasswordSchema,
  validateRequest,
  authController.forgotPassword
);
router.post(
  '/validate-reset-token',
  validateResetTokenSchema,
  validateRequest,
  authController.validateResetToken
);
router.post(
  '/reset-password',
  resetPasswordSchema,
  validateRequest,
  authController.resetPassword
);

const authenticateSchema = [
  body('email')
    .not()
    .isEmpty()
    .isEmail()
    .withMessage('Please enter correct email and password.')
    .normalizeEmail(),
  body('password')
    .not()
    .isEmpty()
    .withMessage('Please enter correct email and password.')
    .trim(),
];

const revokeTokenSchema = [
  body('token').not().isEmpty().withMessage('Token is mandatory.').trim(),
];

const registerSchema = [
  body('token').not().isEmpty().withMessage('Token is mandatory.').trim(),
  body('firstName')
    .not()
    .isEmpty()
    .withMessage('First name is mandatory.')
    .trim()
    .escape(),
  body('lastName')
    .not()
    .isEmpty()
    .withMessage('Last name is mandatory.')
    .trim()
    .escape(),
  body('email')
    .not()
    .isEmpty()
    .withMessage('Email address is mandatory.')
    .isEmail()
    .withMessage('Please enter correct email address.')
    .normalizeEmail(),
  body('password')
    .not()
    .isEmpty()
    .withMessage('Password is mandatory.')
    .isLength({ min: 6 })
    .withMessage('Please enter password longer than 6 characters.')
    .custom((value, { req }) => {
      if (value !== req.body.confirmPassword) {
        throw new Error('Password confirmation is incorrect');
      }
    })
    .trim(),
  body('acceptTerms')
    .isBoolean()
    .custom((value, { req }) => {
      if (value !== true) {
        throw new Error('You need to accept Terms & Conditions.');
      }
    }),
];

const verifyEmailSchema = [
  body('token')
    .not()
    .isEmpty()
    .withMessage('Email verification token is mandatory.')
    .trim(),
];

const forgotPasswordSchema = [
  body('email')
    .not()
    .isEmpty()
    .withMessage('Email address is mandatory.')
    .isEmail()
    .withMessage('Please enter correct email address.')
    .normalizeEmail(),
];

const validateResetTokenSchema = [
  body('token').not().isEmpty().withMessage('Reset token is mandatory.').trim(),
];

const resetPasswordSchema = [
  body('token')
    .not()
    .isEmpty()
    .withMessage('Reset password token is mandatory.')
    .trim(),
  body('password')
    .not()
    .isEmpty()
    .withMessage('Password is mandatory.')
    .isLength({ min: 6 })
    .withMessage('Please enter password longer than 6 characters.')
    .custom((value, { req }) => {
      if (value !== req.body.confirmPassword) {
        throw new Error('Password confirmation is incorrect');
      }
    })
    .trim(),
];

export default router;
