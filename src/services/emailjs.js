import emailjs from '@emailjs/browser'

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const CONTACT_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_CONTACT_TEMPLATE_ID;
const AUTO_REPLY_TEMPLATE_ID =
    import.meta.env.VITE_EMAILJS_AUTO_REPLY_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;


export async function sendContactMessage({ name, email, subject, message }) {
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
