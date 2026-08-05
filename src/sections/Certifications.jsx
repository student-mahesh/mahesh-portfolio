import { motion } from 'framer-motion'
import { Award } from 'lucide-react'
import SectionHeading from '../components/ui/SectionHeading'
import GlassCard from '../components/ui/GlassCard'
import { CERTIFICATIONS } from '../data/profile-data'

export default function Certifications() {
  return (
    <section id="certifications" className="section-shell py-24 scroll-mt-16">
      <SectionHeading eyebrow="certifications" title="Courses & credentials" />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-12">
        {CERTIFICATIONS.map((cert, i) => (
          <motion.div
            key={cert.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.45, delay: (i % 3) * 0.08 }}
          >
            <GlassCard className="p-5 flex items-start gap-4">
              <span className="w-10 h-10 rounded-lg bg-[var(--color-primary)]/10 flex items-center justify-center shrink-0">
                <Award size={18} className="text-[var(--color-primary)]" />
              </span>
              <div>
                <h3 className="font-display font-medium text-sm text-slate-900 dark:text-white leading-snug">
                  {cert.title}
                </h3>
                <p className="text-xs text-[var(--color-text-dim)] mt-1">
                  {cert.issuer} · {cert.year}
                </p>
              </div>
            </GlassCard>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
