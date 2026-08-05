import { motion } from 'framer-motion'
import { Briefcase } from 'lucide-react'
import SectionHeading from '../components/ui/SectionHeading'
import GlassCard from '../components/ui/GlassCard'
import { EXPERIENCE } from '../data/profile-data'

export default function Experience() {
  return (
    <section id="experience" className="section-shell py-24 scroll-mt-16">
      <SectionHeading eyebrow="experience" title="Where I've worked" />

      <div className="relative mt-12 pl-8 sm:pl-10">
        <div className="absolute left-[9px] sm:left-[11px] top-2 bottom-2 w-px bg-gradient-to-b from-[var(--color-primary)] via-[var(--color-accent)]/50 to-transparent" />

        {EXPERIENCE.map((exp, i) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="relative mb-10 last:mb-0"
          >
            <span className="absolute -left-8 sm:-left-10 top-1.5 w-5 h-5 rounded-full bg-[var(--color-bg)] border-2 border-[var(--color-primary)] flex items-center justify-center">
              <span className="w-2 h-2 rounded-full bg-[var(--color-primary)]" />
            </span>

            <GlassCard className="p-6">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                <h3 className="font-display font-semibold text-lg text-slate-900 dark:text-white flex items-center gap-2">
                  <Briefcase size={18} className="text-[var(--color-primary)]" />
                  {exp.role}
                </h3>
                <span className="font-mono-alt text-xs px-3 py-1 rounded-full border border-[var(--color-primary)]/30 text-[var(--color-primary)]">
                  {exp.duration}
                </span>
              </div>
              <p className="text-sm font-medium text-[var(--color-primary)] mb-4">{exp.company}</p>

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wide text-slate-700 dark:text-slate-300 mb-2">
                    Responsibilities
                  </h4>
                  <ul className="space-y-1.5 text-sm text-[var(--color-text-dim)]">
                    {exp.responsibilities.map((r) => <li key={r}>• {r}</li>)}
                  </ul>
                </div>
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wide text-slate-700 dark:text-slate-300 mb-2">
                    Achievements
                  </h4>
                  <ul className="space-y-1.5 text-sm text-[var(--color-text-dim)]">
                    {exp.achievements.map((a) => <li key={a}>• {a}</li>)}
                  </ul>
                </div>
              </div>
            </GlassCard>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
