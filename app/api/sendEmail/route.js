import nodemailer from 'nodemailer';

export async function POST(req) {
  try {
    const { service, doctor, email, numberPhone } = await req.json();

    // Формуємо рядок для всіх послуг
    const serviceDetails = service.map(item => 
      `Назва: ${item.titlE}\nНова ціна: ${item.costNew}\nСпеціальна ціна: ${item.costSpetial}\nСтара ціна: ${item.oldCost}\nАкція: ${item.actionPrice}`
    ).join('\n\n');

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.RECEIVER_EMAIL,
      subject: 'Заявка до стоматолога з веб-сервісу',
      text: `Послуга:\n${serviceDetails}\n\nЛікар: ${doctor?.lastName} ${doctor?.nameDoctor}\nEmail користувача: ${email}\nТелефон: ${numberPhone}`,
    });

    return new Response(JSON.stringify({ message: 'Email sent successfully!' }), { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: 'Error sending email', details: error.message }), { status: 500 });
  }
}
