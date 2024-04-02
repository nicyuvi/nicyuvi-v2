'use server'
import * as z from 'zod'
// @ts-ignore
import { createTransport } from 'nodemailer'

type FormData = {
  name: string
  email: string
  subject: string
  message: string
}

export async function sendEmail(formData: FormData) {
  const { name, email, subject, message } = formData

  const schema = z.object({
    name: z.string().min(1).max(50),
    email: z.string().min(1).max(50),
    subject: z.string().min(1).max(50),
    message: z.string().min(15).max(255),
  })

  // safe parse so we can handle errors when validation fails
  const parse = schema.safeParse({
    name,
    email,
    subject,
    message,
  })

  if (!parse.success) {
    return { error: 'Failed to parse contact data' }
  }

  const data = parse.data

  const transporter = createTransport({
    service: 'gmail',
    auth: {
      user: 'nickyuvienco@gmail.com',
      pass: 'wzjy glib axgt gckp', // DONT COMMIT THIS
    },
  })
  console.log('verify gmail transporter', transporter)

  const info = await transporter.sendMail({
    from: 'customer email here',
    to: 'nickyuvienco@gmail.com', // personal email static for now
    subject: 'Email subject',
    text: 'email body', // plain text body
  })

  console.log('Message sent: %s', info.messageId)

  // try {
  //   return 'sent email'
  // } catch (e) {
  //   return 'error send'
  // }
}
