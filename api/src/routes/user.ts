import express from 'express';
import { body } from 'express-validator';

import userController from '../controller/user';

const router = express.Router();

// TODO: add validations
// TODO: add validation middleware

router.get('/', userController.getAll);
router.get('/:id', userController.getOne);
router.post('/', userController.create);
router.put('/:id', userController.update);
router.delete('/', userController.remove);

export default router;
