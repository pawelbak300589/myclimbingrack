import express from 'express';
import { body } from 'express-validator';

import usersController from '../controllers/users';

const router = express.Router();

// TODO: add validations
// TODO: add validation middleware

router.get('/', usersController.getAll);
// router.get('/:id', usersController.getOne);
router.post('/', usersController.create);
router.put('/:id', usersController.update);
router.delete('/', usersController.remove);

export default router;
