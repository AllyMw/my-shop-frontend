import nextConnect from 'next-connect';
import cors from 'cors';

const handler = nextConnect();

// Настройка CORS
handler.use(cors({

    origin: '*', // Разрешить все источники
}));

// Пример обработчика GET запроса
handler.get(async (req, res) => {
    res.json({ message: 'Это пример GET запроса' });
});

// Пример обработчика POST запроса
handler.post(async (req, res) => {
    // Обработка POST запроса
    res.json({ message: 'Это пример POST запроса' });
});

export default handler;