// const users = require('../data/users.json'); // Подключили JSON файл с пользователями
const fs = require('fs');
const path = require('path');
const jsonPath = path.join(__dirname, '../data/users.json');

let users = {}; // Создали пустой объект с пользователями

fs.readFile(jsonPath, { encoding: 'utf-8' }, (error, data) => {
  if (error) {
    console.log(error);
  }

  users = JSON.parse(data);
});

// Отдаём список пользователей
const getUsersList = (req, res) => {
  res.send(users);
};

// Проверяем, существует ли юзер с таким айди?
const getUser = (req, res, next) => {
  // Ищем юзера в базе данных
  const user = users.find((item) => item._id === req.params.id);

  if (user) {
    res.send(user);
    return; // Не забывать выходить из функции, если достигнуто нужное условие
  }

  next(); // Если юзера нет в базе данных, передали управление далее
};

// Пользователь не существует
const userNotFound = (req, res) => {
  res.status(404).send({ message: 'Нет пользователя с таким id' });
};

module.exports = {
  getUsersList,
  userNotFound,
  getUser,
};
