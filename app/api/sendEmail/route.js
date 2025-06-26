export async function POST(req) {
  try {
    const { service, doctor, email, numberPhone } = await req.json();

    const webhookUrl = process.env.N8N_PUBLIC_WEBHOOK_URL;

    const payload = {
      service,
      doctor,
      email,
      numberPhone,
    };

    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    const responseBody = await response.json();

console.log('Відправка даних в n8n? route:',  responseBody);

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Помилка від n8n:', errorText);
      return new Response(JSON.stringify({ error: 'n8n error', details: errorText }), { status: response.status });
    }

    return new Response(JSON.stringify({ message: responseBody }), { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: 'Помилка сервера', details: error.message }), { status: 500 });
  }
}
