import config from '../config/app.json';
import { User } from '../models';
import { generateJwtToken, generateRefreshToken } from '../helpers';

const authenticate = async ({ email, password, ipAddress }) => {
  const user = User.scope('withHash').findOne({
    where: { email },
  });

  if (
    !user ||
    !user.isVerified ||
    !(await bcrypt.compare(password, user.passwordHash))
  ) {
    throw Error('Email or password is incorrect');
  }

  // authentication successful so generate jwt and refresh tokens
  const jwtToken = generateJwtToken(user);
  const refreshToken = generateRefreshToken(user, ipAddress);

  // save refresh token
  await refreshToken.save();

  // return basic details and tokens
  return {
    ...basicDetails(user),
    jwtToken,
    refreshToken: refreshToken.token,
  };
};

const refreshToken = async () => {
  // TODO:
};

const revokeToken = async () => {
  // TODO:
};

const register = async () => {
  // TODO:
};

const verifyEmail = async () => {
  // TODO:
};

const forgotPassword = async () => {
  // TODO:
};

const validateResetToken = async () => {
  // TODO:
};

const resetPassword = async () => {
  // TODO:
};

export default {
  authenticate,
  refreshToken,
  revokeToken,
  register,
  verifyEmail,
  forgotPassword,
  validateResetToken,
  resetPassword,
};
