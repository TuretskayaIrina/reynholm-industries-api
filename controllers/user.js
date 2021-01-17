const User = require('../models/user');
const NotFoundError = require('../errors/not-found-err');
const ValidationError = require('../errors/Validation-error');

// вернуть всех пользователей
const getAllUsers = (req, res, next) => {
  User.find({})
    .then((users) => {
      res.status(200).send(users);
    })
    .catch((err) => next(err));
};

// создать пользователя
const createUser = (req, res, next) => {
  User.create({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    birthday: req.body.birthday,
    profession: req.body.profession,
    relocation: req.body.relocation,
    adress: req.body.adress,
  })

    .catch((err) => {
      if (err.name === 'ValidationError') {
        throw new ValidationError('Заполните обязательные поля: firstName, lastName, birthday, profession, adress');
      }
    })

    .then((user) => {
      res.status(200).send(user);
    })

    .catch((err) => next(err));
};

// вернуть пользователя по id
const getUsersById = (req, res, next) => {
  User.findById(req.params.id)
    .then((user) => {
      if (user === null || undefined) {
        throw new NotFoundError(`Пользователь с id ${req.params.id} не существует`);
      } else {
        res.status(200).send(user);
      }
    })
    .catch((err) => next(err));
};

// обновить пользователя
const updateUser = (req, res, next) => {
  User.findByIdAndUpdate(req.params.id, {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    birthday: req.body.birthday,
    profession: req.body.profession,
    relocation: req.body.relocation,
    adress: req.body.adress,
  }, {
    new: true,
    runValidators: true,
  })
    .then((user) => {
      res.status(200).send(user);
    })
    .catch((err) => next(err));
};

// удаляет пользователей по id
const deleteUsers = (req, response, next) => {
  User.deleteMany({ _id: { $in: req.body.userIds } })
    .then((result) => {
      response.status(200).send(result);
    })
    .catch((err) => next(err));
};

module.exports = {
  getAllUsers,
  createUser,
  getUsersById,
  updateUser,
  deleteUsers,
};
