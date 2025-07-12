'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

const testimonials = [
  {
    name: "Sarah Chen",
    title: "Freelance Developer",
    company: "Web3 Builder",
    content: "ProofPay transformed how I handle invoicing for my Web3 projects. The blockchain verification gives my clients confidence, and the automated PDF generation saves me hours every week.",
    avatar: "👩‍💻",
    rating: 5
  },
  {
    name: "Marcus Rodriguez",
    title: "DAO Contributor",
    company: "DeFi Protocol",
    content: "Finally, a professional way to invoice DAOs! The multi-chain support and stablecoin integration make it perfect for our decentralized workflow. Tax reporting is seamless too.",
    avatar: "👨‍🚀",
    rating: 5
  },
  {
    name: "Emma Thompson",
    title: "NFT Artist",
    company: "Creative Collective",
    content: "As an NFT creator, I needed invoicing that understood crypto payments. ProofPay's Web3-native approach is exactly what I was looking for. The templates are beautiful!",
    avatar: "🎨",
    rating: 5
  },
  {
    name: "David Park",
    title: "Smart Contract Auditor",
    company: "Security Labs",
    content: "The immutable blockchain records give my audit clients complete transparency. ProofPay's compliance features ensure I'm always meeting regulatory requirements.",
    avatar: "🔒",
    rating: 5
  }
]

const partners = [
  { name: "Ethereum", logo: "⟡" },
  { name: "Polygon", logo: "⬢" },
  { name: "Arbitrum", logo: "🔵" },
  { name: "Base", logo: "🔷" },
  { name: "Optimism", logo: "🔴" },
  { name: "Avalanche", logo: "🏔️" }
]

export default function Testimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background-light/20 to-background" />
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" />
      
      <div className="container relative z-10">
        {/* Testimonials Section */}
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
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.5 5.5C7.5 4.11929 8.61929 3 10 3C11.3807 3 12.5 4.11929 12.5 5.5C12.5 6.88071 11.3807 8 10 8C8.61929 8 7.5 6.88071 7.5 5.5Z" stroke="currentColor" strokeWidth="1.5"/>
              <path d="M16.5 5.5C16.5 4.11929 17.6193 3 19 3C20.3807 3 21.5 4.11929 21.5 5.5C21.5 6.88071 20.3807 8 19 8C17.6193 8 16.5 6.88071 16.5 5.5Z" stroke="currentColor" strokeWidth="1.5"/>
              <path d="M7.5 18.5C7.5 17.1193 8.61929 16 10 16C11.3807 16 12.5 17.1193 12.5 18.5C12.5 19.8807 11.3807 21 10 21C8.61929 21 7.5 19.8807 7.5 18.5Z" stroke="currentColor" strokeWidth="1.5"/>
              <path d="M16.5 18.5C16.5 17.1193 17.6193 16 19 16C20.3807 16 21.5 17.1193 21.5 18.5C21.5 19.8807 20.3807 21 19 21C17.6193 21 16.5 19.8807 16.5 18.5Z" stroke="currentColor" strokeWidth="1.5"/>
            </svg>
            Trusted by Web3 Professionals
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-text via-text/90 to-text bg-clip-text text-transparent">
            What Our Users{' '}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Are Saying
            </span>
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            Join thousands of Web3 professionals who trust ProofPay for their invoicing needs
          </p>
        </motion.div>

        {/* Testimonial Carousel */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="relative">
            <motion.div
              key={currentTestimonial}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <div className="relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 rounded-3xl blur opacity-50" />
                <div className="relative bg-background-light/60 backdrop-blur-sm border border-text/10 rounded-3xl p-8 md:p-12">
                  <div className="flex justify-center mb-6">
                    {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                      <svg key={i} className="w-6 h-6 text-accent fill-current" viewBox="0 0 24 24">
                        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
                      </svg>
                    ))}
                  </div>
                  <blockquote className="text-xl md:text-2xl text-text leading-relaxed mb-8">
                    "{testimonials[currentTestimonial].content}"
                  </blockquote>
                  <div className="flex items-center justify-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary/20 to-accent/20 flex items-center justify-center text-2xl">
                      {testimonials[currentTestimonial].avatar}
                    </div>
                    <div className="text-left">
                      <div className="font-semibold text-text">
                        {testimonials[currentTestimonial].name}
                      </div>
                      <div className="text-text-secondary text-sm">
                        {testimonials[currentTestimonial].title} at {testimonials[currentTestimonial].company}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
          
          {/* Navigation Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentTestimonial 
                    ? 'bg-gradient-to-r from-primary to-accent shadow-lg' 
                    : 'bg-text/20 hover:bg-text/40'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Partners Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h3 className="text-2xl font-semibold text-text mb-8">
            Supported Networks
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {partners.map((partner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group flex flex-col items-center gap-2 p-4 rounded-2xl bg-background-light/20 backdrop-blur-sm border border-text/5 hover:border-accent/20 transition-all duration-300"
              >
                <div className="text-4xl group-hover:scale-110 transition-transform duration-300">
                  {partner.logo}
                </div>
                <span className="text-sm text-text-secondary group-hover:text-text transition-colors duration-300">
                  {partner.name}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
} 