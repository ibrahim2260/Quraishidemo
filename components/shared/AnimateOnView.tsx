'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

type Props = {
  children: React.ReactNode
  className?: string
  delay?: number
  direction?: 'up' | 'left' | 'none'
  once?: boolean
}

export default function AnimateOnView({
  children,
  className,
  delay = 0,
  direction = 'up',
  once = true,
}: Props) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once, margin: '-80px' })

  const initial = {
    opacity: 0,
    y: direction === 'up' ? 28 : 0,
    x: direction === 'left' ? -20 : 0,
  }

  const animate = isInView ? { opacity: 1, y: 0, x: 0 } : initial

  return (
    <motion.div
      ref={ref}
      initial={initial}
      animate={animate}
      transition={{
        duration: 0.7,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
