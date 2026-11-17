import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { Github, ExternalLink } from 'lucide-react'
import SectionHeading from '../components/ui/SectionHeading'
import GlassCard from '../components/ui/GlassCard'
import { PROJECTS, ALL_TECH_FILTERS } from '../data/projects'

export default function Projects() {
  const [filter, setFilter] = useState('All')

  const filtered = useMemo(
    () => (filter === 'All' ? PROJECTS : PROJECTS.filter((p) => p.tech.includes(filter))),
    [filter]
  )

  const getInitials = (title) => {
    if (title.includes('Leave Management')) return 'LMS'
    if (title.includes('E-Commerce')) return 'ECO'
    if (title.includes('Adaptive Interview')) return 'AAI'
    return title.split(' ').map((w) => w[0]).join('').slice(0, 3).toUpperCase()
  }

  return (
    <section id="projects" className="section-shell py-24 scroll-mt-16">
      <SectionHeading
        eyebrow="projects"
        title="Featured Projects"
        description="Production-grade full-stack, frontend, and generative AI applications built with clean architecture and modern engineering standards."
      />

      <div className="flex flex-wrap gap-2 mt-8 mb-10">
        {ALL_TECH_FILTERS.map((tech) => (
          <button
            key={tech}
            onClick={() => setFilter(tech)}
            className={`font-mono-alt text-xs px-4 py-2 rounded-full border transition-colors ${filter === tech
              ? 'bg-[var(--color-primary)] text-white border-[var(--color-primary)]'
              : 'border-white/10 text-[var(--color-text-dim)] hover:border-[var(--color-primary)]/50 hover:text-[var(--color-primary)]'
              }`}
          >
            {tech}
          </button>
        ))}
      </div>

      <motion.div
        key={filter}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {filtered.map((project, i) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: i * 0.05 }}
          >
            <GlassCard className="p-6 h-full flex flex-col justify-between">
              <div>
                <div className="relative rounded-xl h-36 mb-5 bg-gradient-to-br from-[var(--color-primary)]/20 to-[var(--color-accent)]/5 flex items-center justify-center overflow-hidden">
                  <span className="font-display font-bold text-4xl text-[var(--color-primary)]/40">
                    {getInitials(project.title)}
                  </span>
                </div>

                <h3 className="font-display font-semibold text-xl text-slate-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-sm text-[var(--color-text-dim)] leading-relaxed mb-4">
                  {project.description}
                </p>

                {project.highlights && (
                  <ul className="mb-4 space-y-1.5 text-xs text-[var(--color-text-dim)]">
                    {project.highlights.map((h, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-[var(--color-primary)] shrink-0">•</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                )}

                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="font-mono-alt text-[10px] px-2.5 py-1 rounded-full bg-black/5 dark:bg-white/5 border border-white/5 text-[var(--color-text-dim)]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-white/5">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-[var(--color-primary)] hover:underline"
                >
                  <Github size={16} />
                  <span>View Repository</span>
                </a>
                {project.demo && project.demo !== '#' && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-[var(--color-text-dim)] hover:text-[var(--color-primary)] transition-colors"
                  >
                    <ExternalLink size={14} />
                    <span>Demo</span>
                  </a>
                )}
              </div>
            </GlassCard>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
