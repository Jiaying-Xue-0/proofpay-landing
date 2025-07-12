'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

const features = [
  {
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13.5 2C13.5 2 15.8335 2.21213 18.8033 5.18198C21.7731 8.15183 21.9853 10.4853 21.9853 10.4853" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M10.4853 21.9853C10.4853 21.9853 8.15183 21.7731 5.18198 18.8033C2.21213 15.8335 2 13.5 2 13.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M13.5 21.9853C13.5 21.9853 15.8335 21.7731 18.8033 18.8033C21.7731 15.8335 21.9853 13.5 21.9853 13.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M10.4853 2C10.4853 2 8.15183 2.21213 5.18198 5.18198C2.21213 8.15183 2 10.4853 2 10.4853" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Blockchain-Verified',
    description: 'Every invoice includes immutable on-chain verification that anyone can audit for authenticity.',
    highlight: 'Tamper-proof',
    details: [
      'Immutable transaction records',
      'Cross-chain verification',
      'Audit trail transparency'
    ]
  },
  {
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M19 9V17.8C19 18.9201 19 19.4802 18.782 19.908C18.5903 20.2843 18.2843 20.5903 17.908 20.782C17.4802 21 16.9201 21 15.8 21H8.2C7.07989 21 6.51984 21 6.09202 20.782C5.71569 20.5903 5.40973 20.2843 5.21799 19.908C5 19.4802 5 18.9201 5 17.8V6.2C5 5.07989 5 4.51984 5.21799 4.09202C5.40973 3.71569 5.71569 3.40973 6.09202 3.21799C6.51984 3 7.0799 3 8.2 3H13M19 9L13 3M19 9H14C13.4477 9 13 8.55228 13 8V3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Professional PDFs',
    description: 'Generate clean, professional invoices that work seamlessly with traditional accounting systems.',
    highlight: 'Enterprise-Ready',
    details: [
      'Customizable templates',
      'Multi-currency support',
      'Automated tax calculations'
    ]
  },
  {
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M17 7C17 9.76142 14.7614 12 12 12C9.23858 12 7 9.76142 7 7C7 4.23858 9.23858 2 12 2C14.7614 2 17 4.23858 17 7Z" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M3 18C3 17.7271 3.00039 17.4603 3.00117 17.1996C3.00742 15.3162 3.05974 14.1905 3.92678 13.3235C4.79382 12.4564 5.91949 12.4041 7.80082 12.2995C9.42963 12.2079 11.2187 12.1667 12 12.1667C12.7813 12.1667 14.5704 12.2079 16.1992 12.2995C18.0805 12.4041 19.2062 12.4564 20.0732 13.3235C20.9403 14.1905 20.9926 15.3162 20.9988 17.1996C20.9996 17.4603 21 17.7271 21 18C21 18.4636 20.9987 18.8952 20.9934 19.2982C20.9756 20.4863 20.9198 21.1317 20.3255 21.6875C19.7312 22.2433 19.0662 22.2723 17.8335 22.2741C16.6959 22.2757 15.2342 22.25 12 22.25C8.76584 22.25 7.30409 22.2757 6.16648 22.2741C4.93376 22.2723 4.26876 22.2433 3.67445 21.6875C3.08015 21.1317 3.02444 20.4863 3.00657 19.2982C3.00127 18.8952 3 18.4636 3 18Z" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
    title: 'Web3 Native',
    description: 'Built specifically for the decentralized economy with seamless crypto payment integration.',
    highlight: 'Future-Proof',
    details: [
      'Multi-wallet support',
      'DAO contributor friendly',
      'NFT creator optimized'
    ]
  },
  {
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2L2 7V17C2 17.5523 2.44772 18 3 18H21C21.5523 18 22 17.5523 22 17V7L12 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 22V12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M2 7L12 12L22 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Instant Payments',
    description: 'Accept cryptocurrency payments instantly with automatic conversion to stablecoins.',
    highlight: 'Lightning Fast',
    details: [
      'Real-time settlement',
      'Auto-conversion to USDC',
      'Low transaction fees'
    ]
  },
  {
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Compliance Ready',
    description: 'Automatically generate tax-compliant documentation for global regulatory requirements.',
    highlight: 'Regulatory Safe',
    details: [
      'Auto tax calculations',
      'Regulatory reporting',
      'Global compliance'
    ]
  },
  {
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7 8L3 12L7 16M17 8L21 12L17 16M14 4L10 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'API Integration',
    description: 'Seamlessly integrate with existing workflows through our comprehensive REST API.',
    highlight: 'Developer First',
    details: [
      'RESTful API endpoints',
      'Webhook notifications',
      'SDK libraries'
    ]
  }
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
}

export default function Features() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section id="features" className="relative py-24 overflow-hidden">
      {/* Unified Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background-light/40 via-background-light/20 to-background" />
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-8" />
      
      {/* Subtle glow effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-primary/6 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/2 left-1/4 w-[500px] h-[500px] bg-accent/6 rounded-full blur-[100px] animate-pulse delay-1000" />
      </div>
      
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M13 10V3L4 14H11L11 21L20 10L13 10Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Powerful Features
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-text via-text/90 to-text bg-clip-text text-transparent">
            Everything You Need for{' '}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Web3 Invoicing
            </span>
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            ProofPay combines the best of traditional invoicing with cutting-edge blockchain technology 
            to deliver a complete solution for the decentralized economy.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={item}
              className="group relative"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500" />
              <div className="relative h-full p-8 rounded-2xl bg-background-light/40 backdrop-blur-sm border border-text/5 transition-all duration-500 group-hover:border-accent/20 group-hover:bg-background-light/60">
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-3 rounded-xl bg-gradient-to-r from-primary/10 to-accent/10 text-primary transition duration-500 group-hover:scale-110 group-hover:from-primary/20 group-hover:to-accent/20">
                    {feature.icon}
                  </div>
                  <div className="flex-1">
                    <div className="mb-3">
                      <h3 className="text-xl font-semibold text-text mb-2">{feature.title}</h3>
                      <span className="inline-block px-3 py-1 text-xs font-medium bg-accent/10 text-accent rounded-full">
                        {feature.highlight}
                      </span>
                    </div>
                    <p className="text-text-secondary text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
                
                <div className="space-y-2">
                  {feature.details.map((detail, detailIndex) => (
                    <motion.div
                      key={detailIndex}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{
                        opacity: hoveredIndex === index ? 1 : 0.7,
                        x: hoveredIndex === index ? 0 : -10,
                      }}
                      transition={{
                        duration: 0.3,
                        delay: detailIndex * 0.1,
                      }}
                      className="flex items-center gap-3 text-sm text-text-secondary"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-accent/50 flex-shrink-0" />
                      {detail}
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center gap-4">
            <a
              href="https://www.prfpay.com"
              className="group relative inline-flex items-center justify-center px-8 py-4 rounded-2xl bg-gradient-to-r from-primary to-primary-dark text-white font-semibold overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-primary/25"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary-dark to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative flex items-center gap-2">
                Start Building
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13 5L20 12L13 19M4 12H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            </a>
            <a
              href="#demo"
              className="group inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-background-light/40 backdrop-blur-sm border border-accent/20 text-text font-semibold hover:border-accent/40 transition-all duration-300"
            >
              <svg className="w-5 h-5 text-accent" viewBox="0 0 24 24" fill="currentColor">
                <path d="M8 5v14l11-7z"/>
              </svg>
              Watch Demo
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 