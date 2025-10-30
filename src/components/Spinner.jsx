
import { motion } from 'framer-motion'

export default function Spinner({ label = 'Loading...' }) {
  return (
    <div className="flex items-center justify-center p-6" role="status" aria-live="polite">
      <motion.div
        className="w-10 h-10 rounded-full border-4 border-slate-300 border-t-vbTeal"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
      />
      <span className="sr-only">{label}</span>
    </div>
  )
}
