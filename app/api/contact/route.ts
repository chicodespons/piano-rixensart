import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Must run on the Node.js runtime (nodemailer is not Edge-compatible).
export const runtime = 'nodejs';

function escapeHtml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

export async function POST(request: Request) {
  try {
    const body = await request.json().catch(() => null);

    const firstName = String(body?.firstName ?? '').trim();
    const lastName = String(body?.lastName ?? '').trim();
    const phone = String(body?.phone ?? '').trim();
    const email = String(body?.email ?? '').trim();
    const subject = String(body?.subject ?? '').trim();
    const message = String(body?.message ?? '').trim();

    if (!firstName || !lastName || !phone || !subject || !message) {
      return NextResponse.json({ error: 'missing_fields' }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT ?? 587),
      secure: process.env.SMTP_SECURE === 'true', // true for port 465
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const to = process.env.CONTACT_TO ?? 'info@pianorixensart.be';
    const from = process.env.CONTACT_FROM ?? 'info@pianorixensart.be';
    const fullName = `${firstName} ${lastName}`;

    const lines = [
      `Prénom / First name: ${firstName}`,
      `Nom / Last name: ${lastName}`,
      `Téléphone / Phone: ${phone}`,
      `Email: ${email || '—'}`,
      `Sujet / Subject: ${subject}`,
      '',
      'Message:',
      message,
    ];

    await transporter.sendMail({
      from: `"Piano Rixensart" <${from}>`,
      to,
      replyTo: email ? `"${fullName}" <${email}>` : undefined,
      subject: `Site pianorixensart.be — ${subject} (${fullName})`,
      text: lines.join('\n'),
      html: `
        <h2 style="font-family:sans-serif">Nouveau message du site</h2>
        <p style="font-family:sans-serif;line-height:1.6">
          <strong>Prénom :</strong> ${escapeHtml(firstName)}<br/>
          <strong>Nom :</strong> ${escapeHtml(lastName)}<br/>
          <strong>Téléphone :</strong> ${escapeHtml(phone)}<br/>
          <strong>Email :</strong> ${email ? escapeHtml(email) : '—'}<br/>
          <strong>Sujet :</strong> ${escapeHtml(subject)}
        </p>
        <p style="font-family:sans-serif;line-height:1.6;white-space:pre-wrap">
          ${escapeHtml(message).replace(/\n/g, '<br/>')}
        </p>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error('contact form error', error);
    return NextResponse.json({ error: 'send_failed' }, { status: 500 });
  }
}