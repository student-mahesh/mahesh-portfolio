import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { Github, ExternalLink, ArrowUpRight, Clock } from 'lucide-react'
import SectionHeading from '../components/ui/SectionHeading'
import GlassCard from '../components/ui/GlassCard'
import { PROJECTS, ALL_TECH_FILTERS } from '../data/projects'

export default function Projects() {
  const [filter, setFilter] = useState('All')

  const filtered = useMemo(
    () => (filter === 'All' ? PROJECTS : PROJECTS.filter((p) => p.tech.includes(filter))),
    [filter]
  )

  return (
    <section id="projects" className="section-shell py-24 scroll-mt-16">
      <SectionHeading
        eyebrow="projects"
        title="Selected work"
        description="A mix of full-stack builds — some shipped, some still in progress."
      />

      <div className="flex flex-wrap gap-2 mt-8 mb-10">
        {ALL_TECH_FILTERS.map((tech) => (
          <button
            key={tech}
            onClick={() => setFilter(tech)}
            className={`font-mono-alt text-xs px-4 py-2 rounded-full border transition-colors ${
              filter === tech
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
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {filtered.map((project, i) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: i * 0.04 }}
          >
            <GlassCard className="p-5 h-full flex flex-col">
                <div className="relative rounded-xl h-36 mb-4 bg-gradient-to-br from-[var(--color-primary)]/20 to-[var(--color-accent)]/5 flex items-center justify-center overflow-hidden">
                  <span className="font-display font-bold text-3xl text-[var(--color-primary)]/40">
                    {project.title.split(' ').map((w) => w[0]).join('').slice(0, 3)}
                  </span>
                  {project.comingSoon && (
                    <span className="absolute top-2 right-2 flex items-center gap-1 text-[10px] font-mono-alt px-2 py-1 rounded-full bg-black/40 text-amber-300">
                      <Clock size={11} /> Coming Soon
                    </span>
                  )}
                </div>

                <h3 className="font-display font-semibold text-lg text-slate-900 dark:text-white mb-1.5">
                  {project.title}
                </h3>
                <p className="text-sm text-[var(--color-text-dim)] leading-relaxed mb-4 flex-1">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.tech.map((t) => (
                    <span key={t} className="font-mono-alt text-[10px] px-2.5 py-1 rounded-full bg-black/5 dark:bg-white/5 text-[var(--color-text-dim)]">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-white/5">
                  <div className="flex gap-3">
                    <a href={project.github} target="_blank" rel="noreferrer" aria-label="GitHub repo"
                      className="text-[var(--color-text-dim)] hover:text-[var(--color-primary)] transition-colors">
                      <Github size={18} />
                    </a>
                    <a href={project.demo} target="_blank" rel="noreferrer" aria-label="Live demo"
                      className="text-[var(--color-text-dim)] hover:text-[var(--color-primary)] transition-colors">
                      <ExternalLink size={18} />
                    </a>
                  </div>
                  <button className="flex items-center gap-1 text-xs font-medium text-[var(--color-primary)]">
                    Read More <ArrowUpRight size={14} />
                  </button>
                </div>
            </GlassCard>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
