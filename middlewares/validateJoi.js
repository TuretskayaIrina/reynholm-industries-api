const { celebrate, Joi } = require('celebrate');

// валидация создания пользователя
const validateСreateUser = celebrate({
  body: Joi.object().keys({
    avatar: Joi.string().min(2)
      .messages({
        'string.min': 'Поле "avatar" должно содержать не менее двух символов!',
      }),
    firstName: Joi.string().required().min(2).max(30)
      .messages({
        'any.required': 'Поле "firstName" обязательно для заполнения!',
        'string.min': 'Минимальная длина поля "firstName" 2 символа!',
        'string.max': 'Минимальная длина поля "firstName" 30 символов!',
      }),
    lastName: Joi.string().required().min(2).max(30)
      .messages({
        'any.required': 'Поле "lastName" обязательно для заполнения!',
        'string.min': 'Минимальная длина поля "lastName" 2 символа!',
        'string.max': 'Минимальная длина поля "lastName" 30 символов!',
      }),
    birthday: Joi.date().required()
      .messages({
        'any.required': 'Поле "birthday" обязательно для заполнения!',
      }),
    profession: Joi.string().required().min(2).max(30)
      .messages({
        'any.required': 'Поле "profession" обязательно для заполнения!',
        'string.min': 'Минимальная длина поля "profession" 2 символа!',
        'string.max': 'Минимальная длина поля "profession" 30 символов!',
      }),
    relocation: Joi.boolean(),
    // adress: Joi.string().required().min(2).max(80)
    //   .messages({
    //     'any.required': 'Поле "adress" обязательно для заполнения!',
    //     'string.min': 'Минимальная длина поля "adress" 2 символа!',
    //     'string.max': 'Минимальная длина поля "adress" 80 символов!',
    //   }),
    adress: Joi.string(),
  }),
});

// валидация удаления пользователя
const validateDeleteUser = celebrate({
  params: Joi.object().keys({
    id: Joi.string().required().hex().length(24),
  }),
});

// валидация запроса пользователя по id
const validateGetUsersById = celebrate({
  params: Joi.object().keys({
    id: Joi.string().required().hex().length(24),
  }),
});

// валидация обновления пользователя по id
const validateUpdateUser = celebrate({
  params: Joi.object().keys({
    id: Joi.string().required().hex().length(24),
  }),
});

module.exports = {
  validateСreateUser,
  validateDeleteUser,
  validateGetUsersById,
  validateUpdateUser,
};
