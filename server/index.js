import express from 'express';
import fs from 'fs/promises';
import path from 'path';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 3000;

const __dirname = path.resolve();
const usersFilePath = path.join(__dirname, 'users.json');

app.use(cors());
app.use(express.json());

async function ensureUsersFileExists() {
  try {
    await fs.access(usersFilePath);
  } catch {
    await fs.writeFile(usersFilePath, '[]', 'utf-8');
  }
}

app.post('/register', async (req, res) => {
  try {
    const { number, password } = req.body;

    if (!number || !password) {
      return res.status(400).json({ message: 'Номер и пароль обязательны' });
    }

    const usersRaw = await fs.readFile(usersFilePath, 'utf-8');
    const users = JSON.parse(usersRaw);

    const isUserExist = users.find(user => user.number === number);
    if (isUserExist) {
      return res.status(400).json({ message: 'Пользователь уже существует' });
    }

    users.push({ number, password });
    await fs.writeFile(usersFilePath, JSON.stringify(users, null, 2), 'utf-8');

    res.status(201).json({ message: 'Регистрация прошла успешно' });
  } catch (err) {
    console.error('Ошибка регистрации:', err);
    res.status(500).json({ message: 'Ошибка сервера' });
  }
});

app.get('/users', async (req, res) => {
  try {
    const usersRaw = await fs.readFile(usersFilePath, 'utf-8');
    const users = JSON.parse(usersRaw);
    res.json(users);
  } catch (err) {
    console.error('Ошибка получения пользователей:', err);
    res.status(500).json({ message: 'Ошибка сервера' });
  }
});

app.listen(PORT, async () => {
  await ensureUsersFileExists();
  console.log(`✅ Сервер запущен на http://localhost:${PORT}`);
});