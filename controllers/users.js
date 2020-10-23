const User = require('../models/users');

// Найти всех пользователей в базе
const getAllUsers = (req, res) => {
  User.find({}).then((data) => {
    res.send(data);
  }).catch((error) => {
    res.status(500).send(error);
  });
};

// Найти пользователя в базе
const getUser = (req, res) => {
  const { userId } = req.params;
  console.log(userId);
  User.findById(userId).then((data) => {
    res.send(data);
  }).catch((error) => {
    res.status(500).send(error);
  });
};

// Создать пользователя в базе
const createUser = (req, res) => {
  const { name, about, avatar } = req.body;

  User.create({ name, about, avatar }).then((data) => {
    res.send(data);
  }).catch((error) => {
    res.status(500).send(error);
  });
};

module.exports = {
  getAllUsers,
  getUser,
  createUser,
};
