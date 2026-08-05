import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Github, Linkedin, Send, Loader2 } from 'lucide-react'
import { toast } from 'react-toastify'
import SectionHeading from '../components/ui/SectionHeading'
import GlassCard from '../components/ui/GlassCard'
import Button from '../components/ui/Button'
import { PROFILE } from '../data/nav'
import { sendContactMessage } from '../services/emailjs'

const initialForm = { name: '', email: '', subject: '', message: '' }

function validate(form) {
  const errors = {}
  if (!form.name.trim()) errors.name = 'Name is required'
  if (!form.email.trim()) errors.email = 'Email is required'
  else if (!/^\S+@\S+\.\S+$/.test(form.email)) errors.email = 'Enter a valid email'
  if (!form.subject.trim()) errors.subject = 'Subject is required'
  if (!form.message.trim()) errors.message = 'Message is required'
  else if (form.message.trim().length < 10) errors.message = 'Message should be at least 10 characters'
  return errors
}

export default function Contact() {
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
    setErrors((err) => ({ ...err, [e.target.name]: undefined }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const validationErrors = validate(form)
    if (Object.keys(validationErrors).length) {
      setErrors(validationErrors)
      return
    }

    setLoading(true)
    try {
      await sendContactMessage(form)
      toast.success("Message sent — I'll get back to you soon!")
      setForm(initialForm)
    } catch (err) {
      toast.error('Something went wrong. Please try again or email me directly.')
    } finally {
      setLoading(false)
    }
  }

  const fieldClass = (hasError) =>
    `w-full rounded-xl bg-black/5 dark:bg-white/5 border ${
      hasError ? 'border-red-400/60' : 'border-white/10 focus:border-[var(--color-primary)]/60'
    } px-4 py-3 text-sm outline-none transition-colors placeholder:text-[var(--color-text-dim)]`

  return (
    <section id="contact" className="section-shell py-24 scroll-mt-16">
      <SectionHeading
        eyebrow="contact"
        title="Let's build something together"
        description="Have a role, project, or just want to talk backend architecture? My inbox is open."
      />

      <div className="grid lg:grid-cols-[1fr_1.2fr] gap-10 mt-12">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.55 }}
          className="space-y-4"
        >
          {[
            { icon: Mail, label: 'Email', value: PROFILE.email, href: `mailto:${PROFILE.email}` },
            { icon: Phone, label: 'Phone', value: PROFILE.phone, href: `tel:${PROFILE.phone.replace(/\s/g, '')}` },
            { icon: MapPin, label: 'Location', value: PROFILE.location, href: null },
            { icon: Github, label: 'GitHub', value: 'kalpanapatil', href: PROFILE.social.github },
            { icon: Linkedin, label: 'LinkedIn', value: 'Kalpana Patil', href: PROFILE.social.linkedin },
          ].map(({ icon: Icon, label, value, href }) => {
            const content = (
              <GlassCard className="p-4 flex items-center gap-4" hover={false}>
                <span className="w-11 h-11 rounded-xl bg-[var(--color-primary)]/10 flex items-center justify-center shrink-0">
                  <Icon size={18} className="text-[var(--color-primary)]" />
                </span>
                <div>
                  <p className="text-xs text-[var(--color-text-dim)]">{label}</p>
                  <p className="text-sm font-medium text-slate-900 dark:text-white">{value}</p>
                </div>
              </GlassCard>
            )
            return href ? (
              <a key={label} href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noreferrer" className="block">
                {content}
              </a>
            ) : (
              <div key={label}>{content}</div>
            )
          })}
        </motion.div>

        <motion.form
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.55, delay: 0.1 }}
          onSubmit={handleSubmit}
          noValidate
        >
          <GlassCard className="p-6 sm:p-8" hover={false}>
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="name" className="text-xs font-medium text-slate-700 dark:text-slate-300 mb-1.5 block">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className={fieldClass(errors.name)}
                />
                {errors.name && <p className="text-xs text-red-400 mt-1">{errors.name}</p>}
              </div>
              <div>
                <label htmlFor="email" className="text-xs font-medium text-slate-700 dark:text-slate-300 mb-1.5 block">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className={fieldClass(errors.email)}
                />
                {errors.email && <p className="text-xs text-red-400 mt-1">{errors.email}</p>}
              </div>
            </div>

            <div className="mt-5">
              <label htmlFor="subject" className="text-xs font-medium text-slate-700 dark:text-slate-300 mb-1.5 block">
                Subject
              </label>
              <input
                id="subject"
                name="subject"
                value={form.subject}
                onChange={handleChange}
                placeholder="What's this about?"
                className={fieldClass(errors.subject)}
              />
              {errors.subject && <p className="text-xs text-red-400 mt-1">{errors.subject}</p>}
            </div>

            <div className="mt-5">
              <label htmlFor="message" className="text-xs font-medium text-slate-700 dark:text-slate-300 mb-1.5 block">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={form.message}
                onChange={handleChange}
                placeholder="Tell me a bit about the opportunity or project..."
                className={fieldClass(errors.message)}
              />
              {errors.message && <p className="text-xs text-red-400 mt-1">{errors.message}</p>}
            </div>

            <div className="mt-6">
              <Button type="submit" disabled={loading} icon={loading ? Loader2 : Send} className={loading ? 'opacity-80' : ''}>
                {loading ? 'Sending...' : 'Send Message'}
              </Button>
            </div>
          </GlassCard>
        </motion.form>
      </div>
    </section>
  )
}
