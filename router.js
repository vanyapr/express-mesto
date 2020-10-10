const router = require('express').Router(); // Объявили роутер
const { getCards } = require('./routes/cards'); // Подключили мидллвэр карточек
const {} = require('./routes/users'); // Роут пользоватетей

const isUrlValid = (req, res, next) => {
  //Если урл содержит строку юзер, или равен / или равен
  if (req.url === '/' || req.url === '/')

  next();
}

//Если урл адрес существует, вернуть юзера или список
router.get('/cards', getCards);
router.get('/users/', getCards);
router.get('/users/:id', getCards);

module.exports = router;
