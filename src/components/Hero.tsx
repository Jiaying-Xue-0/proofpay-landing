'use client'

import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary-from/10 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-30" />
      </div>

      {/* Content */}
      <div className="container relative z-10 text-center">
        <div className="max-w-3xl mx-auto space-y-8 animate-fade-up">
          <h1 className="heading">
            Generate Web3 Invoices{' '}
            <span className="bg-gradient-to-r from-primary-from to-primary-to bg-clip-text text-transparent">
              Instantly
            </span>
          </h1>
          <p className="subheading">
            Create verifiable invoices for your freelance or DAO work.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
            <Link href="https://proof-pay.vercel.app/" className="btn-primary">
              Generate Your First Invoice
            </Link>
            <button className="btn-secondary">
              See a Sample PDF
            </button>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-dark to-transparent" />
    </section>
  )
} 