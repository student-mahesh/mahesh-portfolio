import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { ArrowRight, Download, Mail, Code2, Coffee, Database, Sparkles } from 'lucide-react'
import Button from '../components/ui/Button'
import { PROFILE } from '../data/nav'

const FLOATING_ICONS = [
  { Icon: Coffee, top: '10%', left: '8%', delay: 0 },
  { Icon: Code2, top: '65%', left: '4%', delay: 1 },
  { Icon: Database, top: '20%', left: '82%', delay: 0.5 },
  { Icon: Sparkles, top: '72%', left: '80%', delay: 1.5 },
]

export default function Hero() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-16">
      {/* Ambient gradient backdrop */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-32 left-1/3 w-[36rem] h-[36rem] rounded-full bg-[var(--color-primary)]/25 blur-[120px] animate-glow" />
        <div className="absolute bottom-0 right-0 w-[28rem] h-[28rem] rounded-full bg-[var(--color-accent)]/20 blur-[100px] animate-glow" style={{ animationDelay: '1.5s' }} />
        <div
          className="absolute inset-0 opacity-[0.15]"
          style={{
            backgroundImage:
              'radial-gradient(circle, rgba(96,165,250,0.5) 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
        />
      </div>

      <div className="section-shell grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center py-20">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <span className="prompt-label font-mono-alt text-sm text-[var(--color-primary)]">
            hello world
          </span>

          <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl mt-3 leading-[1.1] text-slate-900 dark:text-white">
            I'm {PROFILE.name}
          </h1>

          <div className="font-mono-alt text-xl sm:text-2xl mt-4 h-9 gradient-text font-semibold">
            <TypeAnimation
              sequence={PROFILE.taglineRoles}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              cursor
            />
          </div>

          <p className="mt-6 text-[var(--color-text-dim)] text-base sm:text-lg leading-relaxed max-w-xl">
            {PROFILE.intro}
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <Button onClick={() => scrollTo('projects')} icon={ArrowRight}>
              View Projects
            </Button>
            <Button as="a" href={PROFILE.resumeUrl} download="Mahesh_Savkar_Resume.pdf" variant="outline" icon={Download}>
              Download Resume
            </Button>
            <Button onClick={() => scrollTo('contact')} variant="ghost" icon={Mail}>
              Contact Me
            </Button>
          </div>
        </motion.div>

        {/* Right — avatar with floating tech icons */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.15 }}
          className="relative h-[340px] sm:h-[420px] flex items-center justify-center"
        >
          <div className="absolute w-64 h-64 sm:w-80 sm:h-80 rounded-full bg-gradient-to-br from-[var(--color-primary)]/30 to-[var(--color-accent)]/10 blur-2xl" />

          <div className="relative w-56 h-56 sm:w-72 sm:h-72 rounded-full glass border-2 border-[var(--color-primary)]/40 p-2 sm:p-2.5 flex items-center justify-center animate-float shadow-2xl shadow-[var(--color-primary)]/20">
            <div className="w-full h-full rounded-full overflow-hidden bg-slate-800">
              <img
                src="/images/Mahesh_Savkar.jpg"
                alt={PROFILE.name}
                className="w-full h-full object-cover object-center"
                loading="eager"
              />
            </div>
          </div>

          {FLOATING_ICONS.map(({ Icon, top, left, delay }, i) => (
            <motion.div
              key={i}
              className="absolute w-12 h-12 rounded-xl glass flex items-center justify-center text-[var(--color-primary)]"
              style={{ top, left }}
              animate={{ y: [0, -14, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay }}
            >
              <Icon size={20} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
