// const users = require('../data/users.json'); // Подключили JSON файл с пользователями
const fs = require('fs'); // Файловая система
const path = require('path'); // Метод path
const jsonPath = path.join(__dirname, '../data/users.json'); // Подключили данные
let users = {}; // Создали пустой объект с пользователями
let status = 200; // Задали статус ответа по умолчанию
let user = '';

// Отдаём список пользователей
const getUsersList = (req, res) => {
  fs.readFile(jsonPath, { encoding: 'utf-8' }, (error, data) => {
    try {
      if (error) {
        throw error;
      }

      users = JSON.parse(data);
    } catch (err) {
      users = { message: 'Ошибка на сервере' };
      status = 500;
    } finally {
      res.status(status).send(users);
    }
  });
};

// Проверяем, существует ли юзер с таким айди?
const getUser = (req, res, next) => {
  fs.readFile(jsonPath, { encoding: 'utf-8' }, (error, data) => {
    try {
      if (error) {
        throw error;
      }

      users = JSON.parse(data);

      if (status === 200) {
        // Ищем юзера в базе данных
        user = users.find((item) => item._id === req.params.id);
      }
    } catch (err) {
      /* Поскольку мы не проходили блоки try...catch, попробую наколхозить */
      user = { message: 'Ошибка на сервере' };
      // throw error выбросит ошибку в ноду, поэтому его нельзя использовать
      status = 500;
    }
  });

  // Если юзер есть, возвращаем его
  if (user) {
    res.status(status).send(user);
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
