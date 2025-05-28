'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-black/80 to-black/60 backdrop-blur-md">
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

        <button 
          className="md:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-6 w-6" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            {isMenuOpen ? (
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M6 18L18 6M6 6l12 12" 
              />
            ) : (
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M4 6h16M4 12h16M4 18h16" 
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 right-0 bg-gradient-to-b from-black/80 to-black/60 backdrop-blur-md border-t border-white/5">
          <div className="container py-4 flex flex-col space-y-4">
            <Link 
              href="https://proof-pay.vercel.app" 
              className="nav-link block px-4 py-2 hover:bg-white/5"
              onClick={() => setIsMenuOpen(false)}
            >
              Start for Free
            </Link>
            <Link 
              href="https://twitter.com/proofpay" 
              className="nav-link block px-4 py-2 hover:bg-white/5"
              onClick={() => setIsMenuOpen(false)}
            >
              Twitter
            </Link>
            <Link 
              href="#" 
              className="nav-link block px-4 py-2 hover:bg-white/5"
              onClick={() => setIsMenuOpen(false)}
            >
              Docs
            </Link>
            <Link 
              href="https://proof-pay.vercel.app" 
              className="btn-primary mx-4 mb-4"
              onClick={() => setIsMenuOpen(false)}
            >
              Launch App
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
} 