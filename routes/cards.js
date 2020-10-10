const fs = require('fs'); // Подключили файловую систему
const path = require('path'); // Подключили модуль path
const jsonUrl = path.join(__dirname, '../data/cards.json'); // Вычисляем урл адрес файла
let cardsJSON = {}; // Назначили переменную для записи данных ответа
let status = 200; // Назначили статус ответа по умолчанию

// Вернули список карточек
const getCards = (req, res) => {
  // Читаем файл
  fs.readFile(jsonUrl, { encoding: 'utf-8' }, (error, data) => {
    // Отлавливаем возможные ошибки чтения
    try {
      if (error) {
        throw error;
      }

      // Полученный поток преобразовали в данные JSON
      cardsJSON = JSON.parse(data);
    } catch (err) {
      cardsJSON = { message: 'Ошибка на сервере' };
      status = 500;
    } finally {
      res.status(status).send(cardsJSON);
    }
  });
};

module.exports = getCards;
