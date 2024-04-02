'use server'
import { sendMail } from '@/services/mailService'
import * as z from 'zod'
import { ZodIssue } from 'zod'

type FormData = {
  honey_pot?: any
  name: string
  email: string
  subject: string
  message: string
}

export async function sendEmail(formData: FormData) {
  const { honey_pot, name, email, subject, message } = formData
  if (honey_pot !== '') {
    throw new Error('Spam submission')
  }

  const schema = z.object({
    name: z.string().min(1).max(50),
    email: z.string().min(1).max(50),
    subject: z.string().min(1).max(50),
    message: z.string().min(15).max(255),
  })

  const parse = schema.safeParse({
    name,
    email,
    subject,
    message,
  })

  if (!parse.success) {
    const res = parse.error.flatten((issue: ZodIssue) => ({
      message: issue.message,
      errorCode: issue.code,
    }))

    console.error('form errors', res.formErrors)
    console.error('field errors', res.fieldErrors)
    throw new Error()
  }

  const data = parse.data
  const body = `
    name: ${data.name}, 
    email: ${data.email},
    body: ${data.message}
  `

  try {
    await sendMail(data.subject, body)
  } catch (err) {
    if (err instanceof Error) {
      throw new Error(err.message)
    }
  }
}
