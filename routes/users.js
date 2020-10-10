const users = require('../data/users.json'); // Подключили JSON файл с пользователями

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
  }

  next(); // Если юзера нет в базе данных, передали управление далее
};

// Пользователь не существует
const userNotFound = (req, res, next) => {
  res.status(404).send({ message: 'Нет пользователя с таким id' });
  next();
};

module.exports = {
  getUsersList,
  userNotFound,
  getUser,
};
