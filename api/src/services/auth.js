const bcrypt = require('bcryptjs');
const { Op } = require('sequelize');
const { User } = require('../models/index.js');
const {
  Role,
  generateJwtToken,
  generateRefreshToken,
  getRefreshToken,
  randomTokenString,
  hash,
} = require('../helpers/index.js');
const {
  sendAlreadyRegisteredEmail,
  sendPasswordResetEmail,
  sendVerificationEmail,
} = require('../emails/index.js');
const { basicDetails } = require('../helpers/auth');

const authenticate = async ({ email, password, ipAddress }) => {
  const user = await User.scope('withHash').findOne({
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

const refreshToken = async ({ token, ipAddress }) => {
  const refreshToken = await getRefreshToken(token);
  const user = await refreshToken.getUser();

  // replace old refresh token with a new one and save
  const newRefreshToken = generateRefreshToken(user, ipAddress);
  refreshToken.revoked = Date.now();
  refreshToken.revokedByIp = ipAddress;
  refreshToken.replacedByToken = newRefreshToken.token;
  await refreshToken.save();
  await newRefreshToken.save();

  // generate new jwt
  const jwtToken = generateJwtToken(user);

  // return basic details and tokens
  return {
    ...basicDetails(user),
    jwtToken,
    refreshToken: newRefreshToken.token,
  };
};

const revokeToken = async ({ token, ipAddress }) => {
  const refreshToken = await getRefreshToken(token);

  // revoke token and save
  refreshToken.revoked = Date.now();
  refreshToken.revokedByIp = ipAddress;
  await refreshToken.save();
};

const register = async (params, origin) => {
  // validate
  if (await User.findOne({ where: { email: params.email } })) {
    // send already registered error in email to prevent user enumeration
    return await sendAlreadyRegisteredEmail(params.email, origin);
  }

  // create user object
  const user = new User(params);

  // first registered user is an admin
  const isFirstAccount = (await User.count()) === 0;
  user.role = isFirstAccount ? Role.Admin : Role.User;
  user.verificationToken = randomTokenString();

  // hash password
  user.passwordHash = await hash(params.password);

  // save user
  await user.save();

  // send email
  await sendVerificationEmail(user, origin);
};

const verifyEmail = async ({ token }) => {
  const user = await User.findOne({
    where: { verificationToken: token },
  });

  if (!user) throw Error('Verification failed');

  user.verified = Date.now();
  user.verificationToken = null;
  await user.save();
};

const forgotPassword = async ({ email }, origin) => {
  const user = await User.findOne({ where: { email } });

  // always return ok response to prevent email enumeration
  if (!user) return;

  // create reset token that expires after 24 hours
  user.resetToken = randomTokenString();
  user.resetTokenExpires = new Date(Date.now() + 24 * 60 * 60 * 1000);
  await user.save();

  // send email
  await sendPasswordResetEmail(user, origin);
};

const validateResetToken = async ({ token }) => {
  const user = await User.findOne({
    where: {
      resetToken: token,
      resetTokenExpires: { [Op.gt]: Date.now() },
    },
  });

  if (!user) throw Error('Invalid token');

  return user;
};

const resetPassword = async ({ token, password }) => {
  const user = await validateResetToken({ token });

  // update password and remove reset token
  user.passwordHash = await hash(password);
  user.passwordReset = Date.now();
  user.resetToken = null;
  await user.save();
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
