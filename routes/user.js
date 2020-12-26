const router = require('express').Router();
// const { celebrate, Joi } = require('celebrate');

const { getAllUsers } = require('../controllers/user');
const { createUser } = require('../controllers/user');
const { getUsersById } = require('../controllers/user');
const { deleteUser } = require('../controllers/user');

// вернуть всех пользователей
router.get('/users', getAllUsers);

// создать пользователя
router.post('/users', createUser);

// вернуть пользователя по id
router.get('/users/:id', getUsersById);

// удалить пользователя по id
router.delete('/users/:id', deleteUser);

module.exports = router;
