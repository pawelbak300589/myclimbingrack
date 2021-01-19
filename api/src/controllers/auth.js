const authService = require('../services/auth.js');
const { Role, setTokenCookie } = require('../helpers/index.js');

const authenticate = async (req, res, next) => {
  const { email, password } = req.body;
  const ipAddress = req.ip;

  try {
    const { refreshToken, ...account } = await authService.authenticate({
      email,
      password,
      ipAddress,
    });
    setTokenCookie(res, refreshToken);
    res.json(account);
  } catch (error) {
    next(error);
  }
};

const refreshToken = async (req, res, next) => {
  const token = req.cookies.refreshToken;
  const ipAddress = req.ip;

  try {
    const { refreshToken, ...account } = await authService.refreshToken({
      token,
      ipAddress,
    });
    setTokenCookie(res, refreshToken);
    res.json(account);
  } catch (error) {
    next(error);
  }
};

const revokeToken = async (req, res, next) => {
  // accept token from request body or cookie
  // const token = req.body.token || req.cookies.refreshToken;
  const token = req.cookies.refreshToken;
  const ipAddress = req.ip;

  if (!token) return res.status(400).json({ message: 'Token is required' });

  // users can revoke their own tokens and admins can revoke any tokens
  if (!req.user.ownsToken(token) && req.user.role !== Role.Admin) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  try {
    console.log('token', token);

    await authService.revokeToken({ token, ipAddress });
    res.json({ message: 'Token revoked' });
  } catch (error) {
    next(error);
  }
};

const register = async (req, res, next) => {
  try {
    await authService.register(req.body, req.get('origin'));
    res.json({
      message:
        'Registration successful, please check your email for verification instructions',
    });
  } catch (error) {
    next(error);
  }
};

const verifyEmail = async (req, res, next) => {
  try {
    await authService.verifyEmail(req.body);
    res.json({
      message: 'Verification successful, you can now login',
    });
  } catch (error) {
    next(error);
  }
};

const forgotPassword = async (req, res, next) => {
  try {
    await authService.forgotPassword(req.body, req.get('origin'));
    res.json({
      message: 'Please check your email for password reset instructions',
    });
  } catch (error) {
    next(error);
  }
};

const validateResetToken = async (req, res, next) => {
  try {
    await authService.validateResetToken(req.body);
    res.json({
      message: 'Token is valid',
    });
  } catch (error) {
    next(error);
  }
};

const resetPassword = async (req, res, next) => {
  try {
    await authService.resetPassword(req.body);
    res.json({
      message: 'Password reset successful, you can now login',
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  authenticate,
  refreshToken,
  revokeToken,
  register,
  verifyEmail,
  forgotPassword,
  validateResetToken,
  resetPassword,
};
