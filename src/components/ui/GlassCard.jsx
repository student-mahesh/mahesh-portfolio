import { motion } from 'framer-motion'

export default function GlassCard({ children, className = '', hover = true, ...props }) {
  return (
    <motion.div
      whileHover={hover ? { y: -6, transition: { duration: 0.25 } } : undefined}
      className={`glass rounded-2xl shadow-xl shadow-black/10 dark:shadow-black/30 ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  )
}
