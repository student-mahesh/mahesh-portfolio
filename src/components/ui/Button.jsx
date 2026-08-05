import { motion } from 'framer-motion'

const VARIANTS = {
  primary:
    'bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)] text-white shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40',
  outline:
    'border border-[var(--color-primary)]/50 text-[var(--color-primary)] hover:bg-[var(--color-primary)]/10 dark:text-[var(--color-accent)] dark:border-[var(--color-accent)]/40',
  ghost:
    'text-[var(--color-text-dim)] hover:text-[var(--color-primary)]',
}

export default function Button({
  as: Component = 'button',
  variant = 'primary',
  icon: Icon,
  iconPosition = 'right',
  className = '',
  children,
  ...props
}) {
  return (
    <motion.div
      whileHover={{ y: -2, scale: 1.02 }}
      whileTap={{ scale: 0.97 }}
      className="inline-block"
    >
      <Component
        className={`inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium text-sm transition-all duration-300 ${VARIANTS[variant]} ${className}`}
        {...props}
      >
        {Icon && iconPosition === 'left' && <Icon size={17} />}
        {children}
        {Icon && iconPosition === 'right' && <Icon size={17} />}
      </Component>
    </motion.div>
  )
}
