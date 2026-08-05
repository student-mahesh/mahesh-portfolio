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
    value: `${PROJECTS.length}+`,
    note: 'Full-stack apps shipped, from internal tools to public demos.',
  },
  {
    icon: Sparkles,
    label: 'Core Stack',
    value: 'Java',
    note: 'Java, Spring Boot, Hibernate, React, and MySQL.',
  },
  {
    icon: Award,
    label: 'Certifications',
    value: `${CERTIFICATIONS.length}`,
    note: 'From backend architecture to frontend engineering.',
  },
  {
    icon: GraduationCap,
    label: 'Open to Work',
    value: 'Yes',
    note: 'Actively looking for full-stack developer roles.',
  },
]

export default function About() {
  return (
    <section id="about" className="section-shell py-24 scroll-mt-16">
      <SectionHeading eyebrow="about" title="Building things that hold up under real use" />

      <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 mt-12">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="space-y-5 text-[var(--color-text-dim)] leading-relaxed"
        >
          <p>
            I'm a Java Full Stack Developer who enjoys the whole path from a database schema
            to the pixel a user actually taps. My core strength is backend engineering with{' '}
            <span className="text-slate-800 dark:text-white font-medium">Java, Spring Boot, and Hibernate</span>,
            paired with a frontend layer built in <span className="text-slate-800 dark:text-white font-medium">React</span>.
          </p>
          <p>
            My career objective is simple: join a team where I can own features end-to-end,
            write code that's easy for the next developer to read, and keep getting sharper at
            system design.
          </p>
          <p>
            Right now I'm deepening my knowledge of{' '}
            <span className="text-slate-800 dark:text-white font-medium">
              microservices, Spring Security, and cloud deployment
            </span>{' '}
            — the pieces that turn a working app into a production-grade one.
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
        <div className="grid sm:grid-cols-2 gap-5">
          {EDUCATION.map((edu, i) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <GlassCard className="p-6 h-full">
                <div className="flex items-start gap-4">
                  <span className="w-11 h-11 rounded-xl bg-[var(--color-primary)]/10 flex items-center justify-center shrink-0">
                    <GraduationCap size={20} className="text-[var(--color-primary)]" />
                  </span>
                  <div>
                    <h4 className="font-display font-semibold text-slate-900 dark:text-white">
                      {edu.degree}
                    </h4>
                    <p className="text-sm text-[var(--color-primary)] mt-0.5">{edu.college}</p>
                    <p className="text-sm text-[var(--color-text-dim)]">{edu.university}</p>
                    <div className="flex gap-4 mt-3 font-mono-alt text-xs text-[var(--color-text-dim)]">
                      <span>CGPA: {edu.cgpa}</span>
                      <span>•</span>
                      <span>{edu.year}</span>
                    </div>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
