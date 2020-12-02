import express from 'express';

import authController from '../controllers/auth';
import {
  authenticateSchema,
  revokeTokenSchema,
  registerSchema,
  verifyEmailSchema,
  forgotPasswordSchema,
  validateResetTokenSchema,
  resetPasswordSchema,
} from '../validators/auth';
import { authorize, validateRequest } from '../middlewares';

const router = express.Router();

router.post(
  '/authenticate',
  authenticateSchema(),
  validateRequest,
  authController.authenticate
);
router.post('/refresh-token', authController.refreshToken);
router.post(
  '/revoke-token',
  authorize(),
  revokeTokenSchema(),
  validateRequest,
  authController.revokeToken
);
router.post(
  '/register',
  registerSchema(),
  validateRequest,
  authController.register
);
router.post(
  '/verify-email',
  verifyEmailSchema(),
  validateRequest,
  authController.verifyEmail
);
router.post(
  '/forgot-password',
  forgotPasswordSchema(),
  validateRequest,
  authController.forgotPassword
);
router.post(
  '/validate-reset-token',
  validateResetTokenSchema(),
  validateRequest,
  authController.validateResetToken
);
router.post(
  '/reset-password',
  resetPasswordSchema(),
  validateRequest,
  authController.resetPassword
);

export default router;
