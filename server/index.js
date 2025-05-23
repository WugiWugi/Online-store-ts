import express from 'express';
import fs from 'fs';
import path from 'path';
import cors from 'cors';

const app = express();
const PORT = 3000;

const __dirname = path.resolve(); // Нужно для path.resolve в ES-модулях
const usersFilePath = path.join(__dirname, 'users.json');

// Middlewares
app.use(cors());
app.use(express.json()); // <--- ЭТО ОБЯЗАТЕЛЬНО

// Создание файла если его нет
if (!fs.existsSync(usersFilePath)) {
  fs.writeFileSync(usersFilePath, '[]');
}

// Роут регистрации
app.post('/register', (req, res) => {
  const { number, password } = req.body;
  const usersData = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));
  const isUserExist = usersData.find(user => user.number === number);

  if (isUserExist) {
    return res.status(400).json({ message: 'Пользователь уже существует' });
  }

  usersData.push({ number, password });
  fs.writeFileSync(usersFilePath, JSON.stringify(usersData, null, 2));
  res.status(201).json({ message: 'Регистрация прошла успешно' });
});

// Роут получения пользователей
app.get('/users', (req, res) => {
  const usersData = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));
  res.json(usersData);
});

// Запуск сервера
app.listen(PORT, () => {
  console.log(`Сервер запущен на http://localhost:${PORT}`);
});

