import { motion, AnimatePresence } from 'framer-motion'

export default function Loader({ show }) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[9998] flex items-center justify-center bg-[var(--color-bg)]"
        >
          <div className="flex flex-col items-center gap-4">
            <span className="font-mono-alt text-2xl gradient-text font-semibold">
              &lt;MS /&gt;
            </span>
            <div className="w-40 h-1 rounded-full bg-white/10 overflow-hidden">
              <motion.div
                initial={{ x: '-100%' }}
                animate={{ x: '100%' }}
                transition={{ duration: 1, repeat: Infinity, ease: 'easeInOut' }}
                className="h-full w-1/2 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)]"
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
