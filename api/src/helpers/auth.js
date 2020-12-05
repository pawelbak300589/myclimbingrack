const bcrypt = require('bcryptjs');
const crypto = require('crypto');
const jwt = require('jsonwebtoken');

const db = require('../models/index.js');
const { User, RefreshToken } = require('../models/index.js');

exports.setTokenCookie = (res, token) => {
  // create cookie with refresh token that expires in 7 days
  const cookieOptions = {
    httpOnly: true,
    expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
  };
  res.cookie('refreshToken', token, cookieOptions);
};

// TODO: should I move it to user helpers???
exports.getUser = async (id) => {
  const user = await User.findByPk(id);
  if (!user) throw Error('User not found'); // TODO: create or use my custom errors
  return user;
};

// TODO: should I move it to refresh-token or token helpers???
exports.getRefreshToken = async (token) => {
  const refreshToken = await RefreshToken.findOne({ where: { token } });
  if (!refreshToken || !refreshToken.isActive) throw Error('Invalid token'); // TODO: create or use my custom errors
  return refreshToken;
};

// TODO: should I move it to password helpers???
exports.hash = async (password) => {
  return await bcrypt.hash(password, 10);
};

exports.generateJwtToken = (user) => {
  // create a jwt token containing the user id that expires in 15 minutes
  return jwt.sign({ sub: user.id, id: user.id }, config.secret, {
    expiresIn: '15m',
  });
};

exports.generateRefreshToken = (user, ipAddress) => {
  // create a refresh token that expires in 7 days
  return new RefreshToken({
    userId: user.id,
    token: randomTokenString(),
    expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
    createdByIp: ipAddress,
  });
};

exports.randomTokenString = () => {
  return crypto.randomBytes(40).toString('hex');
};

// TODO: should I move it to user helpers???
exports.basicDetails = (user) => {
  const {
    id,
    firstName,
    lastName,
    email,
    role,
    created,
    updated,
    isVerified,
  } = user;
  return {
    id,
    firstName,
    lastName,
    email,
    role,
    created,
    updated,
    isVerified,
  };
};
