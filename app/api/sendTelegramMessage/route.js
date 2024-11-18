import { NextResponse } from 'next/server';

export async function POST(req) {

  const { message } = await req.json(); 
  const token = process.env.TELEGRAM_BOT_TOKEN; 
  const chatId = process.env.TELEGRAM_CHAT_ID; 

  try {
    const response = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ 
        chat_id: chatId, 
        text: `Новая заявочка!🔥
    ${message}
Согласие обработки персональных данных: ✅
    `
     }),
    });

    const data = await response.json();

    if (data.ok) {
      return NextResponse.json({ success: true, message: 'Message sent' });
    } else {
      console.error('Telegram error:', data);
      return NextResponse.json({ success: false, error: data.description }, { status: 500 });
    }
} catch (error) {
    console.error('Server error:', error);
    return NextResponse.json({ success: false, error: error.message || 'Server error' }, { status: 500 });
  }
}