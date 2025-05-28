'use client'

import Link from 'next/link'

export default function CTA() {
  return (
    <section className="section bg-dark-card/30">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h2 className="heading">
            Ready to get paid in crypto —{' '}
            <span className="bg-gradient-to-r from-primary-from to-primary-to bg-clip-text text-transparent">
              professionally
            </span>
            ?
          </h2>
          <p className="subheading">
            Create your first Web3 invoice today.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
            <Link href="https://proof-pay.vercel.app" className="btn-primary">
              Generate My First Invoice
            </Link>
            <a
              href="https://t.me/proofpay"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link flex items-center justify-center"
            >
              Join our Community →
            </a>
          </div>
        </div>
      </div>
    </section>
  )
} 