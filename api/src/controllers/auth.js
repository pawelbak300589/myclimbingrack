import usersService from '../services/users';
import jwt from 'jsonwebtoken';

const signIn = async (req, res) => {
  const { email, password } = req.body;
  // const existingUser = await User.findOne({ where: { email: email } });

  // if (!existingUser) {
    // throw new BadRequestError('Invalid credentials');
  // }

  // return res.status(200).send(existingUser);
  // return res.status(200).send(JSON.stringify(existingUser));
};

const signUp = async (req, res) => {
  // TODO
};

const signOut = async (req, res) => {
  // TODO
};

const currentUser = async (req, res) => {
  res.send({ currentUser: req.currentUser || null });
};

export default { signIn, signUp, signOut, currentUser };
