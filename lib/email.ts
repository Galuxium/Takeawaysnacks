// email-utils.ts

import { createTransport } from 'nodemailer';
import Resend from 'resend';

const resendClient = Resend('YOUR_RESEND_API_KEY');
const nodemailerTransport = createTransport({
  host: 'smtp.example.com',
  port: 587,
  auth: {
    user: 'your-email@example.com',
    pass: 'your-email-password',
  },
});

export interface IEmailOptions {
  from: string;
  to: string;
  subject: string;
  text?: string;
  html?: string;
}

export const sendEmail = async (options: IEmailOptions) => {
  try {
    // Using Resend
    await resendClient.emails.send({
      from: options.from,
      to: options.to,
      subject: options.subject,
      text: options.text,
      html: options.html,
    });
  } catch (error) {
    console.error('Error sending email using Resend:', error);
  }

  try {
    // Using Nodemailer
    await nodemailerTransport.sendMail({
      from: options.from,
      to: options.to,
      subject: options.subject,
      text: options.text,
      html: options.html,
    });
  } catch (error) {
    console.error('Error sending email using Nodemailer:', error);
  }
};