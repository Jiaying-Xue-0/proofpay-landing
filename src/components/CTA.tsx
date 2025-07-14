'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export default function CTA() {
  return (
    <section className="section relative overflow-hidden">
      {/* Unified Background with smooth transition */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background-light/30 to-background-light/50" />
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-8" />
      
      {/* Subtle glow effects similar to other sections */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/8 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-accent/8 rounded-full blur-[80px] animate-pulse delay-1000" />
      </div>
      
      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          {/* Enhanced Slogan Display */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="relative">
              <div className="absolute -inset-x-4 -inset-y-2 bg-gradient-to-r from-primary/8 via-accent/8 to-primary/8 rounded-3xl blur-2xl"></div>
              <h2 className="relative text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-primary via-accent to-primary-dark bg-clip-text text-transparent">
                  Global Invoicing,
                </span>
                <br />
                <span className="bg-gradient-to-r from-accent via-primary to-accent-dark bg-clip-text text-transparent">
                  Zero Borders
                </span>
              </h2>
            </div>
            
            <p className="text-xl md:text-2xl text-text-secondary leading-relaxed max-w-3xl mx-auto">
              Enabling{' '}
              <span className="text-text font-semibold">Stablecoin Payments</span>
              {' '}for Employees and Suppliers{' '}
              <span className="text-text font-semibold">Worldwide</span>
            </p>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-lg text-text-secondary/80">
              Create your first Web3 invoice today.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center pt-4">
              <Link 
                href="https://app.prfpay.com" 
                className="group relative inline-flex items-center justify-center px-10 py-5 rounded-2xl bg-gradient-to-r from-primary to-primary-dark text-white font-semibold text-lg overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-primary/25"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary-dark to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative flex items-center gap-3">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13 10V3L4 14H11L11 21L20 10L13 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Generate My First Invoice
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13 5L20 12L13 19M4 12H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
              </Link>
              
              <a
                href="https://discord.gg/gYK3Rths"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 px-10 py-5 rounded-2xl bg-background-light/60 backdrop-blur-sm border border-accent/20 text-text font-semibold text-lg hover:border-accent/40 hover:bg-background-light/80 transition-all duration-300"
              >
                <svg className="w-6 h-6 text-accent" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"/>
                </svg>
                Join our Community
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 