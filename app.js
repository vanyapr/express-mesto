const { PORT = 3000 } = process.env; // Переменные окружения
const express = require('express'); // Экспресс
const bodyParser = require('body-parser'); // Body-parser для преобразования тела запроса
const path = require('path'); // Метод path
const mongoose = require('mongoose'); // Подключили mongoose

// Роутеры
const usersRouter = require('./routes/users'); // Роут пользователей
const notfound = require('./routes/notFound'); // Роут пользователей
// const router = require('./router'); // Подключили роутер

// Объявили экспресс
const app = express();

// Объявили публичную директорию
const publicFolder = express.static(path.join(__dirname, 'public'));

// Подключили публичную директорию как мидлвэр
app.use(publicFolder);

// Подключили body-parser
app.use(bodyParser.json());

// Запустили сервер на нужном порту
app.listen(PORT, () => {
  console.log(`App started. Listening at port ${PORT}`);
});

// Мидллвэр для обработки запросов роутером
// app.use('/', router);

// Подключились к Mongodb
mongoose.connect('mongodb://localhost:27017/mestodb', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});

// Объявляем роуты
app.use('/', usersRouter); // Роутер юзеров
app.use('*', notfound); // Роутер страницы 404
