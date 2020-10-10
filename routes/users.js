const users = require('../data/users.json');

// Список пользователей
const getUsersList = (req, res) => {
  res.send(users);
};

// Существует ли юзер?
const isUserExists = (req, res, next) => {
  next();
};

// Данные юзера, если он существует
const getUser = (req, res) => {
  res.send(`User ${req.params.id}`);
};

module.exports = {
  getUsersList,
  isUserExists,
  getUser,
};
