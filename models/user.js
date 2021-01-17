const mongoose = require('mongoose');

const adressSchema = new mongoose.Schema({
  city: {
    type: String,
  },
  street: {
    type: String,
  },
  home: {
    type: String,
  },
  apartment: {
    type: String,
  },
});

const userSchema = new mongoose.Schema({
  avatar: {
    type: String, // тип данных - строка
    minlength: 2,
  },
  firstName: {
    type: String, // тип данных - строка
    required: true, // поле обязательно для заполнения
    minlength: 2, // минимальная длина — 2 символа
    maxlength: 30, // максимальная длина - 30 символов
  },
  lastName: {
    type: String, // тип данных - строка
    required: true, // поле обязательно для заполнения
    minlength: 2, // минимальная длина — 2 символа
    maxlength: 30, // максимальная длина - 30 символов
  },
  birthday: {
    type: Date, // тип данных - дата
    required: true, // поле обязательно для заполнения
  },
  profession: {
    type: String, // тип данных - строка
    required: true, // поле обязательно для заполнения
    minlength: 2, // минимальная длина — 2 символа
    maxlength: 30, // максимальная длина - 30 символов
  },
  relocation: {
    type: Boolean, // тип данных - логическое: true или false
    default: false,
  },
  adress: adressSchema,
});

module.exports = mongoose.model('user', userSchema);
