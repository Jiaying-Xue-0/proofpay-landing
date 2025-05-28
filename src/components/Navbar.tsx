'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glassmorphism">
      <div className="container flex items-center justify-between h-20">
        <Link href="/" className="flex items-center space-x-2">
          <div className="w-8 h-8 rounded-full bg-gradient-to-r from-primary-from to-primary-to" />
          <span className="text-xl font-bold">ProofPay</span>
        </Link>

        <div className="hidden md:flex items-center space-x-8">
          <Link href="https://proof-pay.vercel.app" className="nav-link">
            Start for Free
          </Link>
          <Link href="https://twitter.com/proofpay" className="nav-link">
            Twitter
          </Link>
          <Link href="#" className="nav-link">
            Docs
          </Link>
          <Link 
            href="https://proof-pay.vercel.app" 
            className="btn-primary"
          >
            Launch App
          </Link>
        </div>

        <button className="md:hidden p-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </nav>
  )
} 