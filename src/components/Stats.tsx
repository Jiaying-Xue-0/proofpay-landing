'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const stats = [
  {
    value: '25K+',
    label: 'Invoices Generated',
    description: 'Verifiable Web3 invoices created',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  },
  {
    value: '$2.5M+',
    label: 'Transaction Volume',
    description: 'Total value processed',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 6V18M9 12L12 15L15 12M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  },
  {
    value: '12+',
    label: 'Supported Chains',
    description: 'Multi-chain compatibility',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13.5 2C13.5 2 15.8335 2.21213 18.8033 5.18198C21.7731 8.15183 21.9853 10.4853 21.9853 10.4853" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M10.4853 21.9853C10.4853 21.9853 8.15183 21.7731 5.18198 18.8033C2.21213 15.8335 2 13.5 2 13.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    )
  },
  {
    value: '99.9%',
    label: 'Uptime',
    description: 'Reliable service guarantee',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12Z" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  }
]

function Counter({ value, isInView }: { value: string, isInView: boolean }) {
  const [count, setCount] = useState(0)
  
  // Better parsing for different number formats
  const getNumericValue = (str: string) => {
    if (str.includes('%')) {
      return parseFloat(str.replace('%', ''))
    } else if (str.includes('K')) {
      return parseFloat(str.replace(/[K+]/g, ''))
    } else if (str.includes('M')) {
      return parseFloat(str.replace(/[M+$]/g, ''))
    } else {
      return parseFloat(str.replace(/[^0-9.]/g, ''))
    }
  }
  
  const numericValue = getNumericValue(value)
  
  useEffect(() => {
    if (!isInView) return
    
    const duration = 2000
    const steps = 50
    const increment = numericValue / steps
    let current = 0
    
    const timer = setInterval(() => {
      current += increment
      if (current >= numericValue) {
        setCount(numericValue)
        clearInterval(timer)
      } else {
        setCount(current)
      }
    }, duration / steps)
    
    return () => clearInterval(timer)
  }, [isInView, numericValue])
  
  const formatDisplayValue = (num: number) => {
    if (value.includes('%')) {
      return `${num.toFixed(1)}%`
    } else if (value.includes('K')) {
      return `${Math.floor(num)}K${value.includes('+') ? '+' : ''}`
    } else if (value.includes('M')) {
      return `$${num.toFixed(1)}M${value.includes('+') ? '+' : ''}`
    } else {
      return `${Math.floor(num)}${value.includes('+') ? '+' : ''}`
    }
  }
  
  return <span>{formatDisplayValue(count)}</span>
}

export default function Stats() {
  const [isInView, setIsInView] = useState(false)
  
  return (
    <section className="relative py-16 overflow-hidden">
      {/* Unified Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background-light/20 to-background-light/40" />
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-8" />
      
      {/* Subtle glow effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-primary/6 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-accent/6 rounded-full blur-[80px] animate-pulse delay-1000" />
      </div>
      
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-text via-text/90 to-text bg-clip-text text-transparent">
            Trusted by the Web3 Community
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Join thousands of creators, freelancers, and businesses who trust ProofPay for their Web3 invoicing needs
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          onViewportEnter={() => setIsInView(true)}
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center group"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r from-primary/20 to-accent/20 text-primary mb-4 group-hover:scale-110 transition-transform duration-300">
                {stat.icon}
              </div>
              <div className="text-3xl md:text-4xl font-bold text-text mb-2">
                <Counter value={stat.value} isInView={isInView} />
              </div>
              <div className="text-sm font-semibold text-text-secondary mb-1">
                {stat.label}
              </div>
              <div className="text-xs text-text-secondary/80">
                {stat.description}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
} 