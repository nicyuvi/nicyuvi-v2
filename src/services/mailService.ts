import { createTransport } from 'nodemailer'

export function sendMail(subject: string, message: string): Promise<any> {
  const transporter = createTransport({
    service: 'gmail',
    auth: {
      user: process.env.NODEMAILER_EMAIL,
      // pass: process.env.NODEMAILER_PW,
      pass: '',
    },
  })

  const mailOptions = {
    from: process.env.NODEMAILER_EMAIL,
    to: process.env.NODEMAILER_EMAIL,
    subject: subject,
    text: message,
  }

  // returns a promise
  return transporter.sendMail(mailOptions)
}
