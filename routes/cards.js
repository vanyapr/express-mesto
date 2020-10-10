const cardsJSON = require('../data/cards.json');

const getCards = (req, res) => {
  res.send(cardsJSON);
};

module.exports = { getCards };
