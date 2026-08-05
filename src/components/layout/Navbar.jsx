import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Moon, Sun, Download } from 'lucide-react'
import { NAV_LINKS, PROFILE } from '../../data/nav'
import { useActiveSection } from '../../hooks/useActiveSection'
import { useTheme } from '../../context/ThemeContext'

const SECTION_IDS = NAV_LINKS.map((l) => l.id)

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const active = useActiveSection(SECTION_IDS)
  const { theme, toggleTheme } = useTheme()

  const scrollTo = (id) => {
    setOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <nav className="glass border-b border-white/5">
        <div className="section-shell flex items-center justify-between h-16">
          <button
            onClick={() => scrollTo('home')}
            className="font-display font-bold text-lg gradient-text whitespace-nowrap shrink-0"
          >
            &lt;KP /&gt;
          </button>

          <ul className="hidden xl:flex items-center gap-0.5 font-mono-alt text-sm whitespace-nowrap">
            {NAV_LINKS.map((link, i) => (
              <li key={link.id}>
                <button
                  onClick={() => scrollTo(link.id)}
                  className={`px-2.5 py-2 rounded-lg transition-colors duration-200 ${
                    active === link.id
                      ? 'text-[var(--color-primary)]'
                      : 'text-[var(--color-text-dim)] hover:text-[var(--color-primary)]'
                  }`}
                >
                  <span className="opacity-50 mr-1">{String(i).padStart(2, '0')}.</span>
                  {link.label}
                </button>
              </li>
            ))}
          </ul>

          <div className="hidden xl:flex items-center gap-3">
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="w-9 h-9 rounded-full flex items-center justify-center text-[var(--color-text-dim)] hover:text-[var(--color-primary)] transition-colors"
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <a
              href={PROFILE.resumeUrl}
              download
              className="inline-flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-full border border-[var(--color-primary)]/40 text-[var(--color-primary)] hover:bg-[var(--color-primary)]/10 transition-colors"
            >
              <Download size={15} /> Resume
            </a>
          </div>

          <button
            className="xl:hidden text-[var(--color-text-dim)]"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="xl:hidden glass border-b border-white/5 overflow-hidden"
          >
            <ul className="section-shell py-4 flex flex-col gap-1 font-mono-alt text-sm">
              {NAV_LINKS.map((link, i) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollTo(link.id)}
                    className={`w-full text-left px-3 py-2.5 rounded-lg ${
                      active === link.id ? 'text-[var(--color-primary)]' : 'text-[var(--color-text-dim)]'
                    }`}
                  >
                    <span className="opacity-50 mr-1">{String(i).padStart(2, '0')}.</span>
                    {link.label}
                  </button>
                </li>
              ))}
              <li className="flex items-center gap-3 px-3 pt-2">
                <button onClick={toggleTheme} className="flex items-center gap-2 text-sm text-[var(--color-text-dim)]">
                  {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />} Toggle theme
                </button>
              </li>
              <li className="px-3 pt-1">
                <a
                  href={PROFILE.resumeUrl}
                  download
                  className="inline-flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-full border border-[var(--color-primary)]/40 text-[var(--color-primary)]"
                >
                  <Download size={15} /> Resume
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
