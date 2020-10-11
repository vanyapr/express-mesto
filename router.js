const router = require('express').Router(); // Объявили роутер
const getCards = require('./routes/cards'); // Подключили мидллвэр карточек
const notFound = require('./routes/notFound'); // Роут ошибки (ничего не найдено)
const { getUsersList, getUser } = require('./routes/users'); // Роут пользоватетей

// Если урл адрес существует, вернуть юзера или список
router.get('/cards', getCards);
router.get('/users/', getUsersList);
router.get('/users/:id', getUser);
router.get('*', notFound); // Если предыдущие маршруты не сработали, вернём страницу 404

module.exports = router;
