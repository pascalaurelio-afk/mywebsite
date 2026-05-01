'use server'

import { createClient } from '@/utils/supabase/server'
import { revalidatePath } from 'next/cache'

export async function submitInquiry(formData: FormData) {
  const name = formData.get('name') as string
  const email = formData.get('email') as string
  const subject = formData.get('subject') as string
  const message = formData.get('message') as string

  if (!name || !email || !message) {
    return { error: 'Name, email, and message are required fields.' }
  }

  const supabase = await createClient()

  const { error } = await supabase
    .from('inquiries')
    .insert([
      { name, email, subject, message }
    ])

  if (error) {
    console.error('Error inserting inquiry:', error)
    return { error: 'Failed to submit inquiry. Please try again later.' }
  }

  revalidatePath('/') // Revalidate if needed
  return { success: true }
}
