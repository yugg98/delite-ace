import { EmailTemplate } from '../../../components/EmailTemplate';
import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import type { NextApiRequest, NextApiResponse } from 'next'

const resend = new Resend("re_8eGnTiwx_PTjCamDzDwb9GBFCbqAiTBuF");

export async function POST(req: Request) {
  const {firstname,lastname,email,phonenumber,message} = await req.json()
  try {
    const data = await resend.emails.send({
        from: 'Acme <onboarding@resend.dev>',
        to: ['yugg9826@gmail.com','umang@deliteace.com'],
        subject: 'New Request',
        react: EmailTemplate({ firstname: firstname,lastname:lastname,email:email,phonenumber:phonenumber,message:message }),
    });
    return NextResponse.json({ data });
  } catch (error) {
    console.log("hello")
    return NextResponse.json({ error });
  }
}