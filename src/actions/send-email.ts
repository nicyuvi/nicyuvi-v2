'use server'
import * as z from 'zod'
import { sendMail } from '@/services/mailService'

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
    return { error: 'Failed to parse email data' }
  }

  const data = parse.data
  const body = `
    name: ${data.name}, 
    email: ${data.email},
    body: ${data.message}
  `

  try {
    await sendMail(data.subject, body)
    // revalidate path '/'
    // TODO: modal confirmation popup maybe
  } catch (err) {
    if (err instanceof Error) {
      throw new Error(err.message)
    }
  }
}
