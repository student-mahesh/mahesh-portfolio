import { motion } from 'framer-motion'
import {
  Code2,
  Server,
  Layout,
  Database,
  Sparkles,
  Cpu,
  Wrench,
  Layers,
} from 'lucide-react'
import SectionHeading from '../components/ui/SectionHeading'
import GlassCard from '../components/ui/GlassCard'
import { SKILL_CATEGORIES } from '../data/profile-data'

const CATEGORY_ICONS = {
  lang: Code2,
  backend: Server,
  frontend: Layout,
  db: Database,
  genai: Sparkles,
  arch: Cpu,
  tools: Wrench,
  core: Layers,
}

export default function Skills() {
  return (
    <section id="skills" className="section-shell py-24 scroll-mt-16">
      <SectionHeading
        eyebrow="skills"
        title="Technical Arsenal"
        description="Comprehensive technical skill set spanning full-stack development, database architecture, and generative AI."
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-12">
        {SKILL_CATEGORIES.map((cat, i) => {
          const Icon = CATEGORY_ICONS[cat.id] || Code2
          return (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.45, delay: (i % 4) * 0.08 }}
            >
              <GlassCard className="p-5 h-full flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-10 h-10 rounded-xl bg-[var(--color-primary)]/10 flex items-center justify-center shrink-0">
                    <Icon size={18} className="text-[var(--color-primary)]" />
                  </span>
                  <h3 className="font-display font-semibold text-sm text-slate-900 dark:text-white leading-snug">
                    {cat.category}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-1.5 mt-auto">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="font-mono-alt text-xs px-2.5 py-1 rounded-lg bg-black/5 dark:bg-white/5 border border-white/5 text-slate-700 dark:text-slate-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </GlassCard>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}
