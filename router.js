const router = require('express').Router(); // Объявили роутер
const getCards = require('./routes/cards'); // Подключили мидллвэр карточек
const { getUsersList, getUser, userNotFound } = require('./routes/users'); // Роут пользоватетей
const notFound = require('./routes/notFound');


// Если урл адрес существует, вернуть юзера или список
router.get('/cards', getCards);
router.get('/users/', getUsersList);
router.get('/users/:id', getUser);
router.get('/users/:id', userNotFound);
router.get('*', notFound); // Если предыдущие маршруты не сработали, вернём страницу 404

module.exports = router;
