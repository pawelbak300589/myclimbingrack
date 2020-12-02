import { body } from 'express-validator';

export const authenticateSchema = () => {
  return [
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
};

export const revokeTokenSchema = () => {
  return [
    body('token').not().isEmpty().withMessage('Token is mandatory.').trim(),
  ];
};

export const registerSchema = () => {
  return [
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
      .trim(),
    body('confirmPassword')
      .not()
      .isEmpty()
      .withMessage('Confirm password is mandatory.')
      .custom((value, { req }) => {
        if (value !== req.body.password) {
          throw new Error('Password confirmation does not match password.');
        }
        return true;
      })
      .trim(),
    body('acceptTerms')
      .isBoolean()
      .custom((value, { req }) => {
        if (value !== true) {
          throw new Error('You need to accept Terms & Conditions.');
        }
        return true;
      }),
  ];
};

export const verifyEmailSchema = () => {
  return [
    body('token')
      .not()
      .isEmpty()
      .withMessage('Email verification token is mandatory.')
      .trim(),
  ];
};

export const forgotPasswordSchema = () => {
  return [
    body('email')
      .not()
      .isEmpty()
      .withMessage('Email address is mandatory.')
      .isEmail()
      .withMessage('Please enter correct email address.')
      .normalizeEmail(),
  ];
};

export const validateResetTokenSchema = () => {
  return [
    body('token')
      .not()
      .isEmpty()
      .withMessage('Reset token is mandatory.')
      .trim(),
  ];
};

export const resetPasswordSchema = () => {
  return [
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
};