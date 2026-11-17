import { motion } from 'framer-motion'
import { GraduationCap, FolderGit2, Award, Sparkles } from 'lucide-react'
import SectionHeading from '../components/ui/SectionHeading'
import GlassCard from '../components/ui/GlassCard'
import { EDUCATION, CERTIFICATIONS } from '../data/profile-data'
import { PROJECTS } from '../data/projects'

const CARDS = [
  {
    icon: FolderGit2,
    label: 'Projects',
    value: `${PROJECTS.length}`,
    note: 'Featured implementations: Leave Management & E-Commerce.',
  },
  {
    icon: Sparkles,
    label: 'Core Stack',
    value: 'Java & GenAI',
    note: 'Java 21, Spring Boot, React.js, MySQL, and Ollama.',
  },
  {
    icon: Award,
    label: 'Certifications',
    value: `${CERTIFICATIONS.length}`,
    note: 'Google Cloud GenAI & Infosys Springboard.',
  },
  {
    icon: GraduationCap,
    label: 'Academics',
    value: '8.93 CGPA',
    note: 'B.E. Computer Engineering, SPPU.',
  },
]

export default function About() {
  return (
    <section id="about" className="section-shell py-24 scroll-mt-16">
      <SectionHeading eyebrow="about" title="Building scalable, intelligent applications" />

      <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 mt-12">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="space-y-5 text-[var(--color-text-dim)] leading-relaxed"
        >
          <p>
            I'm a <span className="text-slate-800 dark:text-white font-medium">Java Full Stack Developer</span> with
            practical internship experience combining modern Java frameworks and Generative AI. My core strength
            lies in backend engineering with{' '}
            <span className="text-slate-800 dark:text-white font-medium">
              Java, Spring Boot, REST APIs, and MySQL
            </span>
            , paired with clean, responsive frontend applications built using{' '}
            <span className="text-slate-800 dark:text-white font-medium">React.js</span>.
          </p>
          <p>
            During my internship at <span className="text-slate-800 dark:text-white font-medium">Punari Pattern Private Ltd.</span>,
            I contributed to building the <span className="text-slate-800 dark:text-white font-medium">Adaptive Interview</span> platform,
            integrating Java 21, Spring Boot, Python, FastAPI, MySQL, and local LLMs (Ollama) to extract resume skills and evaluate responses.
          </p>
          <p>
            I am driven by clean code, sound object-oriented architecture, and building intelligent software solutions
            leveraging <span className="text-slate-800 dark:text-white font-medium">RAG, ChromaDB, and Docker</span>.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-2 gap-4"
        >
          {CARDS.map(({ icon: Icon, label, value, note }) => (
            <GlassCard key={label} className="p-5">
              <Icon className="text-[var(--color-primary)] mb-3" size={22} />
              <div className="font-display font-bold text-2xl text-slate-900 dark:text-white">{value}</div>
              <div className="text-sm font-medium mt-0.5 text-slate-700 dark:text-slate-200">{label}</div>
              <p className="text-xs text-[var(--color-text-dim)] mt-2 leading-relaxed">{note}</p>
            </GlassCard>
          ))}
        </motion.div>
      </div>

      <div className="mt-16">
        <h3 className="font-display font-semibold text-lg mb-6 text-slate-900 dark:text-white">
          Education
        </h3>
        <div className="grid sm:grid-cols-3 gap-5">
          {EDUCATION.map((edu, i) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <GlassCard className="p-6 h-full flex flex-col justify-between">
                <div>
                  <div className="w-11 h-11 rounded-xl bg-[var(--color-primary)]/10 flex items-center justify-center shrink-0 mb-4">
                    <GraduationCap size={20} className="text-[var(--color-primary)]" />
                  </div>
                  <h4 className="font-display font-semibold text-slate-900 dark:text-white text-base">
                    {edu.degree}
                  </h4>
                  <p className="text-sm text-[var(--color-primary)] mt-1">{edu.college}</p>
                  <p className="text-xs text-[var(--color-text-dim)] mt-0.5">{edu.university}</p>
                </div>
                <div className="mt-4 pt-3 border-t border-white/5 font-mono-alt text-xs font-semibold text-[var(--color-primary)]">
                  {edu.cgpa}
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
