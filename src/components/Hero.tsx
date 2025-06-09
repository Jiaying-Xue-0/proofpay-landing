'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col bg-gradient-to-br from-background via-background-light to-background">
      {/* Navigation */}
      <motion.nav 
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 left-0 right-0 z-50 bg-background/50 backdrop-blur-xl border-b border-text/5"
      >
        <div className="container mx-auto px-4 h-20 flex items-center justify-between">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="flex items-center"
          >
            <Image 
              src="/logo-proofpay.png" 
              alt="ProofPay Logo" 
              width={140} 
              height={36} 
              className="hover:scale-105 transition-transform"
            />
          </motion.div>
          <div className="flex items-center gap-8">
            <Link href="#" className="nav-link">Start for Free</Link>
            <Link href="https://x.com/proof_pay" className="nav-link">Twitter</Link>
            <Link href="#" className="nav-link">Docs</Link>
            <Link 
              href="https://proof-pay.vercel.app/" 
              className="btn-primary"
            >
              Launch App
            </Link>
          </div>
        </div>
      </motion.nav>

      {/* Background Pattern */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/20 via-primary/5 to-transparent" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
        {/* Animated glow effects */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[80px] animate-pulse delay-1000" />
          <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-primary/15 rounded-full blur-[100px] animate-pulse delay-2000" />
        </motion.div>
      </div>

      {/* Content */}
      <div className="flex-1 flex items-center justify-center">
        <div className="container relative z-10 text-center pt-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-4xl mx-auto space-y-8"
          >
            <h1 className="text-6xl md:text-7xl font-bold tracking-tight text-text">
              Generate Web3 Invoices{' '}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent animate-gradient">
                Instantly
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-text-secondary max-w-2xl mx-auto leading-relaxed">
              Create verifiable invoices for your freelance or DAO work.
            </p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-6 justify-center pt-8"
            >
              <Link 
                href="https://proof-pay.vercel.app/" 
                className="group relative inline-flex items-center justify-center"
              >
                <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-primary to-accent opacity-70 blur group-hover:opacity-100 transition duration-300" />
                <span className="relative flex items-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-primary to-primary-dark text-text font-medium">
                  <span>Generate Your First Invoice</span>
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13 5L20 12L13 19M4 12H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
              </Link>
              <Link 
                href="https://discord.gg/gYK3Rths" 
                className="group relative inline-flex items-center justify-center"
              >
                <div className="absolute -inset-0.5 rounded-2xl bg-accent/20 opacity-0 blur group-hover:opacity-100 transition duration-300" />
                <span className="relative flex items-center gap-2 px-8 py-4 rounded-2xl bg-background-light/80 backdrop-blur-sm text-text font-medium border border-accent/20 group-hover:border-accent/40 transition-colors">
                  <svg className="w-5 h-5 text-accent group-hover:text-accent-dark transition-colors" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"/>
                  </svg>
                  Join Discord
                </span>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  )
} 