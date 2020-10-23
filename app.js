const express = require('express'); // Экспресс
const mongoose = require('mongoose'); // Подключили mongoose
const path = require('path'); // Метод path
const { PORT = 3000 } = process.env; // Переменные окружения
const router = require('./router'); // Подключили роутер

// Объявили экспресс
const app = express();

// Объявили публичную директорию
const publicFolder = express.static(path.join(__dirname, 'public'));

// Подключили публичную директорию как мидлвэр
app.use(publicFolder);

// Запустили сервер на нужном порту
app.listen(PORT, () => {
  console.log(`App started. Listening at port ${PORT}`);
});

// Мидллвэр для обработки запросов роутером
app.use('/', router);

// Подключились к Mongodb
mongoose.connect('mongodb://localhost:27017/mestodb', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});
