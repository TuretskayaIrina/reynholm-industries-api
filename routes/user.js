const router = require('express').Router();
// const { celebrate, Joi } = require('celebrate');

const { getAllUsers } = require('../controllers/user');
const { createUser } = require('../controllers/user');
const { getUsersById } = require('../controllers/user');
const { updateUser } = require('../controllers/user');
const { deleteUsers } = require('../controllers/user');

const { validateСreateUser } = require('../middlewares/validateJoi');
// const { validateDeleteUser } = require('../middlewares/validateJoi');
const { validateGetUsersById } = require('../middlewares/validateJoi');
// const { validateUpdateUser } = require('../middlewares/validateJoi');

// вернуть всех пользователей
router.get('/users', getAllUsers);

// создать пользователя
router.post('/users', validateСreateUser, createUser);

// вернуть пользователя по id
router.get('/users/:id', validateGetUsersById, getUsersById);

// обновить пользователя
// router.patch('/users/:id', validateUpdateUser, updateUser);
router.patch('/users/:id/update', updateUser);
// router.patch('/users/update', updateUser);

// удалить пользователя по id
// router.delete('/users/:id', validateDeleteUser, deleteUser);
router.post('/users/deleteMany', deleteUsers);

module.exports = router;
