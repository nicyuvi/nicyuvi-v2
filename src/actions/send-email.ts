'use server'
import * as z from 'zod'
import { revalidatePath } from 'next/cache'

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

  // try {
  //   await db.note.create({
  //     data,
  //   })
  //   revalidatePath('/')
  //   return { success: `Created note: ${data.title}` }
  // } catch (e) {
  //   return { error: 'Failed to create note' }
  // }
}
