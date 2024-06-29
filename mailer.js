const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
const port = 8000;

app.use(cors()); // Для обхода CORS политики
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
		console.log(req.query);
		res.send('Hello World');
});

app.post('/send', (req, res) => {
    const { name, email, subject, text } = req.body;

    // Настройка транспортера для отправки почты
    let transporter = nodemailer.createTransport({
				host: 'smtp.yandex.ru',
				port: 465,
				secure: true,
        auth: {
            user: 'mihhha985',
            pass: 'kidirvxtvynsjmjk'
        }
    });

    // Настройки для письма
    let mailOptions = {
        from: 'mihhha985@yandex.ru',
        to: 'biketoff.m@yandex.ru',
        subject: subject,
        text: `
					Имя: ${name}
					Email: ${email}
					---------------
					${text}`
    };

    // Отправка письма
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return res.status(500).send(error.toString());
        }
        res.status(200).send('Email sent: ' + info.response);
    });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});