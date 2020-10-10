const express = require('express'); // Экспресс
const path = require('path'); // Метод path
const { PORT = 3000 } = process.env; // Переменные окружения

// Объявили экспресс
const app = express();

// Объявили публичную директорию
const publicFolder = express.static(path.join(__dirname, 'public'));

// Подключили публичную директорию как мидлвэр
app.use(publicFolder);

app.listen(PORT, () => {
  console.log(`App started. Listening at port ${PORT}`);
});
