import { EmailTemplate } from '../../../components/EmailTemplate';
import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import type { NextApiRequest, NextApiResponse } from 'next'

const resend = new Resend("re_8eGnTiwx_PTjCamDzDwb9GBFCbqAiTBuF");

export async function POST(req: Request) {
    console.log(req.body)
  try {
    // const data = await resend.emails.send({
    //     from: 'Acme <onboarding@resend.dev>',
    //     to: ['yugg9826@gmail.com'],
    //     subject: 'New Request',
    //     react: EmailTemplate({ firstname: req.body.firstname,lastname:req.body.lastname,email:req.body.email,phonenumber:req.body.phonenumber,message:req.body.message }),
    // });
    

    return NextResponse.json(req.body);

  } catch (error) {
    console.log("hello")
    return NextResponse.json({ error });
  }

}