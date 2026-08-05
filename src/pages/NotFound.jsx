import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Home as HomeIcon } from 'lucide-react'
import Button from '../components/ui/Button'

export default function NotFound() {
  return (
    <section className="min-h-screen flex items-center justify-center section-shell text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <p className="font-mono-alt text-sm text-[var(--color-primary)] mb-2">error 404</p>
        <h1 className="font-display font-extrabold text-6xl sm:text-8xl gradient-text mb-4">404</h1>
        <p className="text-[var(--color-text-dim)] max-w-md mx-auto mb-8">
          This route doesn't exist — looks like a broken endpoint. Let's get you back to something real.
        </p>
        <Button as={Link} to="/" icon={HomeIcon}>
          Back to Home
        </Button>
      </motion.div>
    </section>
  )
}
