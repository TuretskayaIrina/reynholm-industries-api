const User = require('../models/user');
const NotFoundError = require('../errors/not-found-err');
const ValidationError = require('../errors/Validation-error');

// вернуть всех пользователей
const getAllUsers = (req, res, next) => {
  User.find({})
    .then((users) => {
      res.status(200).send({ data: users });
    })
    .catch((err) => next(err));
};

// создать пользователя
const createUser = (req, res, next) => {
  const {
    avatar,
    firstName,
    lastName,
    birthday,
    profession,
    relocation,
    adress,
  } = req.body;

  User.create({
    avatar,
    firstName,
    lastName,
    birthday,
    profession,
    relocation,
    adress,
  })

    .catch((err) => {
      if (err.name === 'ValidationError') {
        throw new ValidationError('Заполните обязательные поля: firstName, lastName, birthday, profession, adress');
      }
    })

    .then((user) => {
      res.status(200).send({ data: user });
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
        res.status(200).send({ data: user });
      }
    })
    .catch((err) => next(err));
};

// обновить пользователя
const updateUser = (req, res, next) => {
  const {
    avatar,
    firstName,
    lastName,
    birthday,
    profession,
    relocation,
    adress,
  } = req.body;
  User.findByIdAndUpdate(req.params.id, {
    avatar,
    firstName,
    lastName,
    birthday,
    profession,
    relocation,
    adress,
  }, {
    new: true,
    runValidators: true,
  })
    .catch((err) => {
      if (err.name === 'ValidationError') {
        throw new ValidationError('Ошибка валидации');
      }
    })
    .then((user) => {
      res.status(200).send({ data: user });
    })
    .catch((err) => next(err));
};

// удаляет пользователя по id
const deleteUser = (req, res, next) => {
  User.findByIdAndRemove(req.params.id)
    .then((user) => {
      if (!user) {
        throw new NotFoundError(`Пользователь с id ${req.params.id} не существует`);
      } else {
        res.status(200).send({ data: user });
      }
    })
    .catch((err) => next(err));
};

module.exports = {
  getAllUsers,
  createUser,
  getUsersById,
  updateUser,
  deleteUser,
};
