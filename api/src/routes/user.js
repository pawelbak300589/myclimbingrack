import express from 'express';
import { body } from 'express-validator';

import usersController from '../controllers/users';

const router = express.Router();

// TODO: add validations
// TODO: add validation middleware

router.get('/api/users/', usersController.getAll);
// router.get('/api/users/:id', usersController.getOne);
router.post('/api/users/', usersController.create);
router.put('/api/users/:id', usersController.update);
router.delete('/api/users/', usersController.remove);

export default router;
