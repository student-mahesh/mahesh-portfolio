import { motion } from 'framer-motion'
import { Award, Trophy } from 'lucide-react'
import SectionHeading from '../components/ui/SectionHeading'
import GlassCard from '../components/ui/GlassCard'
import { CERTIFICATIONS, ACHIEVEMENTS } from '../data/profile-data'

export default function Certifications() {
  return (
    <section id="certifications" className="section-shell py-24 scroll-mt-16">
      <SectionHeading eyebrow="credentials" title="Certifications &amp; Achievements" />

      <div className="mt-12">
        <h3 className="font-display font-semibold text-lg mb-6 text-slate-900 dark:text-white flex items-center gap-2">
          <Award size={20} className="text-[var(--color-primary)]" />
          Professional Certifications
        </h3>
        <div className="grid sm:grid-cols-2 gap-5">
          {CERTIFICATIONS.map((cert, i) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
            >
              <GlassCard className="p-5 flex items-start gap-4 h-full">
                <span className="w-10 h-10 rounded-lg bg-[var(--color-primary)]/10 flex items-center justify-center shrink-0">
                  <Award size={18} className="text-[var(--color-primary)]" />
                </span>
                <div>
                  <h4 className="font-display font-medium text-base text-slate-900 dark:text-white leading-snug">
                    {cert.title}
                  </h4>
                  <p className="text-sm text-[var(--color-primary)] mt-1">
                    {cert.issuer}
                  </p>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>

      {ACHIEVEMENTS && ACHIEVEMENTS.length > 0 && (
        <div className="mt-16">
          <h3 className="font-display font-semibold text-lg mb-6 text-slate-900 dark:text-white flex items-center gap-2">
            <Trophy size={20} className="text-[var(--color-primary)]" />
            Achievements &amp; Participation
          </h3>
          <div className="grid sm:grid-cols-2 gap-5">
            {ACHIEVEMENTS.map((ach, i) => (
              <motion.div
                key={ach.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
              >
                <GlassCard className="p-5 flex items-start gap-4 h-full">
                  <span className="w-10 h-10 rounded-lg bg-[var(--color-primary)]/10 flex items-center justify-center shrink-0">
                    <Trophy size={18} className="text-[var(--color-primary)]" />
                  </span>
                  <div>
                    <h4 className="font-display font-medium text-base text-slate-900 dark:text-white leading-snug">
                      {ach.title}
                    </h4>
                    <p className="text-xs text-[var(--color-text-dim)] mt-1.5 leading-relaxed">
                      {ach.description}
                    </p>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      )}
    </section>
  )
}
