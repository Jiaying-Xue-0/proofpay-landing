'use client'

import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import Demo from '@/components/Demo'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-dark">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Demo />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}
