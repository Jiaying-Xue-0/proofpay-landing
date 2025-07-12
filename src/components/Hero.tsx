'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

const features = [
  "Blockchain Verified",
  "Multi-Chain Support", 
  "Instant Payments",
  "Tax Compliant",
  "Professional PDFs"
]

export default function Hero() {
  const [currentFeature, setCurrentFeature] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % features.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative h-screen flex flex-col bg-gradient-to-br from-background via-background-light to-background overflow-hidden">
      {/* Navigation */}
      <motion.nav 
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-background/80 via-background/60 to-transparent backdrop-blur-md"
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
            <Link href="#features" className="text-text/80 hover:text-text transition-colors duration-200 font-medium">Features</Link>
            <Link href="https://x.com/proof_pay" className="text-text/80 hover:text-text transition-colors duration-200 font-medium">Twitter</Link>
            <Link href="#demo" className="text-text/80 hover:text-text transition-colors duration-200 font-medium">Demo</Link>
            <Link 
              href="https://www.prfpay.com" 
              className="relative group px-6 py-2.5 rounded-xl bg-gradient-to-r from-primary/90 to-accent/90 text-white font-medium hover:from-primary hover:to-accent transition-all duration-200 hover:shadow-lg hover:shadow-primary/20"
            >
              <span className="relative z-10">Get Started</span>
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
            </Link>
          </div>
        </div>
      </motion.nav>

      {/* Enhanced Background Pattern */}
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

        {/* Floating Elements */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 1 }}
          className="absolute inset-0"
        >
          <div className="absolute top-20 left-10 w-16 h-16 bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl blur-sm animate-float" />
          <div className="absolute top-40 right-20 w-12 h-12 bg-gradient-to-r from-accent/20 to-primary/20 rounded-full blur-sm animate-float delay-500" />
          <div className="absolute bottom-40 left-20 w-20 h-20 bg-gradient-to-r from-primary/15 to-accent/15 rounded-3xl blur-sm animate-float delay-1000" />
        </motion.div>
      </div>

      {/* Content */}
      <div className="flex-1 flex items-center justify-center">
        <div className="container relative z-10 text-center pt-28 pb-16 max-h-[80vh] flex flex-col justify-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-5xl mx-auto space-y-8"
          >
            {/* Main Heading */}
            <div className="space-y-6">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight">
                <span className="bg-gradient-to-r from-primary via-accent to-primary-dark bg-clip-text text-transparent animate-gradient drop-shadow-lg">
                  Global Invoicing,
                </span>
                <br />
                <span className="bg-gradient-to-r from-accent via-primary to-accent-dark bg-clip-text text-transparent animate-gradient">
                  Zero Borders
                </span>
              </h1>

              {/* Enhanced Slogan */}
              <div className="space-y-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="relative"
                >
                  <div className="absolute -inset-x-4 -inset-y-2 bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 rounded-2xl blur-xl"></div>
                  <p className="relative text-xl md:text-2xl lg:text-3xl font-semibold text-text-secondary leading-relaxed">
                    Enabling{' '}
                    <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent font-bold">
                      Stablecoin Payments
                    </span>
                    {' '}for Employees and Suppliers{' '}
                    <span className="text-text font-bold">Worldwide</span>
                  </p>
                </motion.div>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="text-base md:text-lg text-text-secondary/80 max-w-2xl mx-auto leading-relaxed"
                >
                  Professional invoicing for the decentralized economy.
                </motion.p>
              </div>

              {/* Dynamic Feature Display */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="flex items-center justify-center gap-3 h-8"
              >
                <span className="text-primary font-semibold">✓</span>
                <motion.span
                  key={currentFeature}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="text-text font-medium"
                >
                  {features[currentFeature]}
                </motion.span>
              </motion.div>
            </div>

            {/* Social Proof before CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="text-center"
            >
              <div className="text-text/50 text-sm font-medium">
                <span className="bg-gradient-to-r from-primary/60 to-accent/60 bg-clip-text text-transparent">
                  ✨ 25K+ Invoices Generated by Web3 Professionals
                </span>
              </div>
            </motion.div>

            {/* CTA Buttons - CRITICAL: Must be visible in viewport */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="flex flex-col sm:flex-row gap-4 justify-center pt-4"
            >
              <Link 
                href="https://www.prfpay.com" 
                className="group relative inline-flex items-center justify-center"
              >
                <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-primary to-accent opacity-70 blur group-hover:opacity-100 transition duration-300" />
                <span className="relative flex items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-primary to-primary-dark text-text font-semibold">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13 10V3L4 14H11L11 21L20 10L13 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span>Create Your First Invoice</span>
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13 5L20 12L13 19M4 12H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
              </Link>
              
              <Link 
                href="#demo" 
                className="group relative inline-flex items-center justify-center"
              >
                <div className="absolute -inset-0.5 rounded-2xl bg-accent/20 opacity-0 blur group-hover:opacity-100 transition duration-300" />
                <span className="relative flex items-center gap-3 px-8 py-4 rounded-2xl bg-background-light/80 backdrop-blur-sm text-text font-semibold border border-accent/20 group-hover:border-accent/40 transition-colors">
                  <svg className="w-5 h-5 text-accent" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                  <span>Watch Demo</span>
                </span>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Simple Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span className="text-text/40 text-xs font-medium">Scroll to explore</span>
        <motion.div 
          animate={{ y: [0, 4, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-4 h-6 border border-text/20 rounded-full flex justify-center items-start p-1"
        >
          <div className="w-0.5 h-1 bg-text/30 rounded-full"></div>
        </motion.div>
      </motion.div>

      {/* Next Section Preview Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background/60 via-background/30 to-transparent pointer-events-none" />
    </section>
  )
} 