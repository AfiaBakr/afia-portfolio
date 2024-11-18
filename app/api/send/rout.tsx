//import { EmailTemplate } from '../../../components/EmailTemplate';
import {NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail =process.env.FROM_EMAIL;

export async function POST(req:NextRequest, res: NextResponse) {
  const {body} = await req.json();
  const {email, message, subject} =body;
  try {
    const { data, error } = await resend.emails.send({
      from: 'fromEmail ',
      to: ['afiabakr8602@gmail.com', email],
      subject: 'Hello world',
      react: <>
      <h1>{subject}</h1>
      <p>Thank you for connecting me!</p>
      <p>New message submmited!</p>
      <p>{message}</p>
      </>,
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
