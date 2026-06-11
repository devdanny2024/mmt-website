import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Email sending needs the Node runtime (nodemailer is not edge-compatible).
export const runtime = 'nodejs';

type Payload = {
  name?: string;
  phone?: string;
  email?: string;
  company?: string;
  message?: string;
  variant?: 'join' | 'contact';
};

export async function POST(request: Request) {
  let body: Payload;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request.' }, { status: 400 });
  }

  const { name, phone, email, company, message, variant } = body;

  if (!name || !phone || !email || !message) {
    return NextResponse.json({ error: 'Please fill in all required fields.' }, { status: 400 });
  }

  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, MAIL_TO, MAIL_FROM } = process.env;

  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) {
    return NextResponse.json(
      { error: 'Email is not configured on the server yet. Please try again later.' },
      { status: 503 },
    );
  }

  const port = Number(SMTP_PORT) || 465;
  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port,
    secure: port === 465,
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  });

  const isJoin = variant === 'join';
  const subject = isJoin ? 'New network application — Makruten' : 'New enquiry — Makruten';
  const lines = [
    `Type: ${isJoin ? 'Join the network' : 'Contact enquiry'}`,
    `Name: ${name}`,
    `Phone: ${phone}`,
    `Email: ${email}`,
    `Company: ${company || '—'}`,
    '',
    isJoin ? 'What they offer:' : 'Message:',
    message,
  ];

  try {
    await transporter.sendMail({
      from: MAIL_FROM || `Makruten Website <${SMTP_USER}>`,
      to: MAIL_TO || SMTP_USER,
      replyTo: email,
      subject,
      text: lines.join('\n'),
    });
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('Lead email failed:', err);
    return NextResponse.json({ error: 'Could not send your message. Please try again.' }, { status: 502 });
  }
}
