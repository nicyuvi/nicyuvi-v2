'use client'
import { sendEmail } from '@/actions/send-email'
import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import SectionHeader from '@/components/ui/section-header'
import { Textarea } from '@/components/ui/textarea'
import { zodResolver } from '@hookform/resolvers/zod'
import { Loader2 } from 'lucide-react'
import { useForm } from 'react-hook-form'
import * as z from 'zod'

export default function Contact() {
  const formSchema = z.object({
    honey_pot: z.any(),
    name: z.string().min(1).max(50),
    email: z.string().min(1).max(50),
    subject: z.string().min(1).max(50),
    message: z
      .string()
      .min(15, {
        message: 'message must contain at least 15 characters.',
      })
      .max(255, {
        message: 'message must not be longer than 255 characters.',
      }),
  })
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      honey_pot: '',
      name: '',
      email: '',
      subject: '',
      message: '',
    },
  })
  const { isSubmitting } = form.formState

  const action: () => void = form.handleSubmit(async (data) => {
    console.log('look for honey', data)
    await sendEmail(data)
    form.reset()
  })

  return (
    <>
      <SectionHeader variant="center">Get In Touch</SectionHeader>
      <Form {...form}>
        <form action={action}>
          <div className="sm:flex">
            <FormField
              control={form.control}
              name="honey_pot"
              render={({ field }) => (
                <FormItem className="absolute -left-full">
                  <FormLabel>Leave this field blank</FormLabel>
                  <FormControl>
                    <Input tabIndex="-1" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem className="mb-4 sm:mr-4 sm:w-1/2">
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="mb-4 sm:w-1/2">
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name="subject"
            render={({ field }) => (
              <FormItem className="mb-4">
                <FormLabel>Subject</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem className="mb-4">
                <FormLabel>Message</FormLabel>
                <FormControl>
                  <Textarea {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex justify-center">
            {isSubmitting ? (
              <Button disabled>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Please wait
              </Button>
            ) : (
              <Button type="submit" variant="outline">
                Contact Me
              </Button>
            )}
          </div>
        </form>
      </Form>
    </>
  )
}
