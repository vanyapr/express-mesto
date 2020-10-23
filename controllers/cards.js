const Card = require('../models/cards');

const getCards = (req, res) => {
  Card.find({}).then((data) => {
    res.send(data);
  }).catch((error) => {
    res.status(500).send(error);
  });
};

const createCard = (req, res) => {
  const { cardId, user } = req.params;

  Card.create({}).then((data) => {
    res.send(data);
  }).catch((error) => {
    res.status(500).send(error);
  });
};

const deleteCard = (req, res) => {

}

module.exports = {
  getCards,
  createCard,
  deleteCard,
}
