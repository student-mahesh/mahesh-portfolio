import { motion } from 'framer-motion'
import { Briefcase, CheckCircle2, Github } from 'lucide-react'
import SectionHeading from '../components/ui/SectionHeading'
import GlassCard from '../components/ui/GlassCard'
import { EXPERIENCE } from '../data/profile-data'

export default function Experience() {
  return (
    <section id="experience" className="section-shell py-24 scroll-mt-16">
      <SectionHeading eyebrow="experience" title="Professional Experience" />

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

            <GlassCard className="p-6 sm:p-8">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                <h3 className="font-display font-semibold text-xl text-slate-900 dark:text-white flex items-center gap-2">
                  <Briefcase size={20} className="text-[var(--color-primary)]" />
                  {exp.role}
                </h3>
                <span className="font-mono-alt text-xs px-3 py-1 rounded-full border border-[var(--color-primary)]/30 text-[var(--color-primary)]">
                  {exp.duration}
                </span>
              </div>
              <p className="text-base font-medium text-[var(--color-primary)] mb-3">{exp.company}</p>

              {exp.project && (
                <div className="mb-4 p-3.5 rounded-xl bg-black/5 dark:bg-white/5 border border-white/5">
                  <p className="text-xs font-semibold uppercase tracking-wider text-[var(--color-primary)] mb-1">
                    Project Work
                  </p>
                  <p className="text-sm font-medium text-slate-900 dark:text-white">
                    {exp.project}
                  </p>
                </div>
              )}

              {exp.techStack && (
                <div className="mb-5 flex flex-wrap gap-1.5">
                  {exp.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="font-mono-alt text-[11px] px-2.5 py-0.5 rounded-md bg-[var(--color-primary)]/10 text-[var(--color-primary)]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}

              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wide text-slate-700 dark:text-slate-300 mb-3">
                  Key Responsibilities &amp; Implementations
                </h4>
                <ul className="space-y-2.5 text-sm text-[var(--color-text-dim)]">
                  {exp.responsibilities.map((r, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 leading-relaxed">
                      <CheckCircle2 size={16} className="text-[var(--color-primary)] shrink-0 mt-0.5" />
                      <span>{r}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {exp.github && (
                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between">
                  <a
                    href={exp.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-[var(--color-primary)] hover:underline"
                  >
                    <Github size={16} />
                    <span>View Repository</span>
                  </a>
                </div>
              )}
            </GlassCard>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
