const fs = require('fs'); // Подключили файловую систему
const path = require('path'); // Подключили модуль path
const jsonUrl = path.join(__dirname, '../data/cards.json'); // Вычисляем урл адрес файла

let cardsJSON = {};

// Читаем файл по урл адресу
fs.readFile(jsonUrl, { encoding: 'utf-8' }, (error, data) => {
  if (error) {
    console.log(error);
  }

  // Полученный поток преобразовали в данные JSON
  cardsJSON = JSON.parse(data);
});

// Вернули список карточек
const getCards = (req, res) => {
  res.send(cardsJSON);
};

module.exports = getCards;
