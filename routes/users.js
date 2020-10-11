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
      user = users.find((item) => item._id === req.params.id);

      // Если юзер есть, возвращаем его
      if (!user) {
        res.status(404).send({ message: 'Нет пользователя с таким id' });
        return; // Не забывать выходить из функции, если достигнуто нужное условие
      }

      res.send(user);
    } catch (err) {
      res.status(500).send({ message: 'Ошибка на сервере' });
    }
  });
};

module.exports = {
  getUsersList,
  getUser,
};
