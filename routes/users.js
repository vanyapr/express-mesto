// const users = require('../data/users.json'); // Подключили JSON файл с пользователями
const fs = require('fs'); // Файловая система
const path = require('path'); // Метод path
const jsonPath = path.join(__dirname, '../data/users.json'); // Подключили данные

// Отдаём список пользователей
const getUsersList = (req, res) => {
  fs.readFile(jsonPath, { encoding: 'utf-8' }, (error, data) => {
    try {
      if (error) {
        throw error;
      }

      const users = JSON.parse(data);
      res.send(users);
    } catch (err) {
      res.status(500).send({ message: 'Ошибка на сервере' });
    }
  });
};

// Проверяем, существует ли юзер с таким айди?
const getUser = (req, res) => {
  fs.readFile(jsonPath, { encoding: 'utf-8' }, (error, data) => {
    try {
      if (error) {
        throw error;
      }

      const users = JSON.parse(data);
      const user = users.find((item) => item._id === req.params.id);

      // Если юзера нет есть, возвращаем 404
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
