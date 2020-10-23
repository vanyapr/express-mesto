const usersRouter = require('express').Router();
const { getAllUsers, getUser, createUser } = require('../controllers/users');

usersRouter.get('/users', getAllUsers);
usersRouter.get('/users/:userId', getUser);
usersRouter.post('/users', createUser);

module.exports = usersRouter;
