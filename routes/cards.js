const fs = require('fs'); // Подключили файловую систему
const path = require('path'); // Подключили модуль path
const jsonUrl = path.join(__dirname, '../data/cards.json'); // Вычисляем урл адрес файла

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
      const cardsJSON = JSON.parse(data);
      // И отправили ответом сервера
      res.send(cardsJSON);
    } catch (err) {
      res.status(500).send({ message: 'Ошибка на сервере' });
    }
  });
};

module.exports = getCards;
