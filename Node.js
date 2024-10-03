const express = require('express');
const app = express();
const port = 3000;
const puppeteer = require('puppeteer');

app.use(express.json());

app.post('/upload', async (req, res) => {
    const { videoPath, videoDescription } = req.body;

    try {
        const browser = await puppeteer.launch({ headless: false });
        const page = await browser.newPage();
        
        await page.goto('https://www.tiktok.com/login');
        // Далее аналогично скрипту выше выполняем авторизацию и загрузку
        
        await browser.close();
        res.send('Видео успешно загружено!');
    } catch (err) {
        res.status(500).send('Произошла ошибка: ' + err.message);
    }
});

app.listen(port, () => {
    console.log(`Сервер запущен на http://localhost:${port}`);
});
