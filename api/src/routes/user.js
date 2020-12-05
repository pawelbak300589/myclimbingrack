const express = require('express');
const { body } = require('express-validator');

const usersController = require('../controllers/users.js');

const router = express.Router();

// TODO: add validations
// TODO: add validation middleware

router.get('/', usersController.getAll);
// router.get('/:id', usersController.getOne);
router.post('/', usersController.create);
router.put('/:id', usersController.update);
router.delete('/', usersController.remove);

module.exports = router;
