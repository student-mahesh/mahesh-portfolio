import emailjs from '@emailjs/browser'

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID
const CONTACT_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_CONTACT_TEMPLATE_ID
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

export function isEmailJsConfigured() {
  return Boolean(
    SERVICE_ID &&
    !SERVICE_ID.includes('xxxxx') &&
    CONTACT_TEMPLATE_ID &&
    !CONTACT_TEMPLATE_ID.includes('xxxxx') &&
    PUBLIC_KEY &&
    !PUBLIC_KEY.includes('xxxx')
  )
}

export async function sendContactMessage({ name, email, subject, message }) {
  if (!isEmailJsConfigured()) {
    throw new Error('EMAILJS_NOT_CONFIGURED')
  }

  return emailjs.send(
    SERVICE_ID,
    CONTACT_TEMPLATE_ID,
    {
      from_name: name,
      from_email: email,
      subject,
      message,
    },
    PUBLIC_KEY
  )
}
