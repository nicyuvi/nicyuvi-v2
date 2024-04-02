// @ts-nocheck
import { createTransport } from 'nodemailer'

export async function sendMail(subject, message) {
  const transporter = createTransport({
    service: 'gmail',
    auth: {
      user: process.env.NODEMAILER_EMAIL,
      pass: process.env.NODEMAILER_PW,
    },
  })

  const mailOptions = {
    from: process.env.NODEMAILER_EMAIL,
    to: process.env.NODEMAILER_EMAIL,
    subject: subject,
    text: message,
  }

  const info = await transporter.sendMail(mailOptions)

  console.log('Message sent: %s', info.messageId)

  //  transporter.sendMail(mailOptions, function (error, info) {
  //   if (error) {
  //     throw new Error(error)
  //   } else {
  //     console.log('Email Sent')
  //     return true
  //   }
  // })
}
