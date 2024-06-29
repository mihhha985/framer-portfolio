import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
	host: 'smtp.yandex.ru',
	port: 465,
	secure: true,
	auth: {
			user: 'mihhha985',
			pass: 'kidirvxtvynsjmjk'
	}
});

export async function POST(request) {
  const data = await request.json()

	const mailOptions = {
			from: 'mihhha985@yandex.ru',
			to: 'biketoff.m@yandex.ru',
			subject: data.subject,
			text: `
				Имя: ${data.name}
				Email: ${data.email}
				---------------
				${data.text}`
	};

	transporter.sendMail(mailOptions, (error, info) => {
			if (error) {
					return res.status(500).send(error.toString());
			}
			res.status(200).send('Email sent: ' + info.response);
	});
	
	return Response.json({ message: 'Email sent' });
}