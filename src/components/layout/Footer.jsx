import { Github, Linkedin, Mail } from 'lucide-react'
import { NAV_LINKS, PROFILE } from '../../data/nav'

export default function Footer() {
  const year = new Date().getFullYear()

  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <footer className="border-t border-white/5 mt-24">
      <div className="section-shell py-12 grid gap-10 md:grid-cols-3">
        <div>
          <button onClick={() => scrollTo('home')} className="font-display font-bold text-xl gradient-text">
            &lt;MS /&gt;
          </button>
          <p className="text-[var(--color-text-dim)] text-sm mt-3 max-w-xs">
            {PROFILE.title} building scalable, intelligent full-stack applications.
          </p>
        </div>

        <div>
          <h3 className="font-display font-semibold text-sm mb-4 text-slate-900 dark:text-white">Quick Links</h3>
          <ul className="grid grid-cols-2 gap-2 font-mono-alt text-sm text-[var(--color-text-dim)]">
            {NAV_LINKS.map((link) => (
              <li key={link.id}>
                <button onClick={() => scrollTo(link.id)} className="hover:text-[var(--color-primary)] transition-colors">
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display font-semibold text-sm mb-4 text-slate-900 dark:text-white">Connect</h3>
          <div className="flex gap-3">
            <a href={PROFILE.social.github} target="_blank" rel="noreferrer" aria-label="GitHub"
              className="w-10 h-10 rounded-full glass flex items-center justify-center hover:text-[var(--color-primary)] transition-colors">
              <Github size={18} />
            </a>
            <a href={PROFILE.social.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"
              className="w-10 h-10 rounded-full glass flex items-center justify-center hover:text-[var(--color-primary)] transition-colors">
              <Linkedin size={18} />
            </a>
            <a href={`mailto:${PROFILE.email}`} aria-label="Email"
              className="w-10 h-10 rounded-full glass flex items-center justify-center hover:text-[var(--color-primary)] transition-colors">
              <Mail size={18} />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/5 py-5">
        <p className="section-shell text-center text-xs font-mono-alt text-[var(--color-text-dim)]">
          © {year} {PROFILE.name}. Built with React &amp; Tailwind CSS.
        </p>
      </div>
    </footer>
  )
}
