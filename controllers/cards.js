const Card = require('../models/cards');

const getCards = (req, res) => {
  Card.find({}).populate('owner').then((data) => {
    res.send(data);
  }).catch((error) => {
    res.status(500).send(error);
  });
};

const createCard = (req, res) => {
  const { name, link } = req.body;

  Card.create({ name, link, owner: req.user._id }).then((data) => {
    res.send(data);
  }).catch((error) => {
    if (error.name === 'ValidationError') {
      res.status(400).send({ message: 'Ошибка валидации данных' });
    } else {
      res.status(500).send(error);
    }
  });
};

const deleteCard = (req, res) => {
  const { cardId } = req.params;

  Card.findByIdAndDelete(cardId).then((data) => {
    if (data) {
      res.send(data);
    } else {
      res.status(404).send({ message: 'Такой карточки нет' });
    }
  }).catch((error) => {
    res.status(500).send(error);
  });
};

module.exports = {
  getCards,
  createCard,
  deleteCard,
};
