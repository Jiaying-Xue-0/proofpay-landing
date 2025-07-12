'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

const faqs = [
  {
    question: "How does blockchain verification work?",
    answer: "Every invoice generated through ProofPay is automatically recorded on the blockchain with a unique transaction hash. This creates an immutable record that can be verified by anyone, ensuring authenticity and preventing fraud. The verification process is transparent and doesn't require any special software - just a blockchain explorer.",
    category: "Technical"
  },
  {
    question: "What cryptocurrencies do you support?",
    answer: "ProofPay supports all major cryptocurrencies including Bitcoin, Ethereum, USDC, USDT, and many others. We also support payments across multiple blockchain networks including Ethereum, Polygon, Arbitrum, and Base. New currencies and chains are added regularly based on community demand.",
    category: "Payments"
  },
  {
    question: "Do I need to understand blockchain to use ProofPay?",
    answer: "Not at all! ProofPay is designed to be user-friendly for everyone. While your invoices are blockchain-verified, the interface is as simple as traditional invoicing tools. You don't need any technical knowledge about blockchain - we handle all the complex parts behind the scenes.",
    category: "Getting Started"
  },
  {
    question: "How are transaction fees handled?",
    answer: "Transaction fees are automatically calculated and can be included in your invoice or paid separately. We use smart fee optimization to ensure you get the best rates. For high-volume users, we offer fee-free tiers and enterprise pricing options.",
    category: "Pricing"
  },
  {
    question: "Is ProofPay compliant with tax regulations?",
    answer: "Yes, ProofPay automatically generates tax-compliant documentation for major jurisdictions including the US, EU, and UK. We track all necessary information for tax reporting and can generate reports in formats accepted by tax authorities. Always consult with your tax professional for specific advice.",
    category: "Compliance"
  },
  {
    question: "Can I customize my invoice templates?",
    answer: "Absolutely! ProofPay offers extensive customization options including your logo, colors, fonts, and layout. You can create multiple templates for different types of clients or projects. Enterprise users get access to advanced customization features and white-label options.",
    category: "Customization"
  },
  {
    question: "How secure is my data?",
    answer: "Security is our top priority. All sensitive data is encrypted end-to-end, and we use industry-standard security practices. Your private keys remain in your control, and we never store sensitive payment information. Regular security audits ensure our systems meet the highest standards.",
    category: "Security"
  },
  {
    question: "What happens if I need support?",
    answer: "We provide comprehensive support through multiple channels including 24/7 chat support, email, and our community Discord. We also offer extensive documentation, video tutorials, and for enterprise users, dedicated account managers.",
    category: "Support"
  }
]

const categories = ["All", "Technical", "Payments", "Getting Started", "Pricing", "Compliance", "Customization", "Security", "Support"]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const [activeCategory, setActiveCategory] = useState("All")

  const filteredFaqs = activeCategory === "All" 
    ? faqs 
    : faqs.filter(faq => faq.category === activeCategory)

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background-light/20 to-background" />
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" />
      
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
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.09 9C9.3251 8.33167 9.78915 7.76811 10.4 7.40913C11.0108 7.05016 11.7289 6.91894 12.4272 7.03871C13.1255 7.15849 13.7588 7.52152 14.2151 8.06353C14.6713 8.60553 14.9211 9.29152 14.92 10C14.92 12 11.92 13 11.92 13M12 17H12.01M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Frequently Asked Questions
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-text via-text/90 to-text bg-clip-text text-transparent">
            Got Questions?{' '}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              We Have Answers
            </span>
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            Find answers to common questions about ProofPay's Web3 invoicing platform. 
            Can't find what you're looking for? Reach out to our support team.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-primary to-accent text-white shadow-lg'
                  : 'bg-background-light/40 text-text-secondary hover:bg-background-light/60 hover:text-text'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* FAQ Items */}
        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-4"
            >
              {filteredFaqs.map((faq, index) => (
                <motion.div
                  key={`${activeCategory}-${index}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="group"
                >
                  <div className="relative">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500" />
                    <div className="relative bg-background-light/40 backdrop-blur-sm border border-text/5 rounded-2xl overflow-hidden transition-all duration-300 group-hover:border-accent/20">
                      <button
                        onClick={() => setOpenIndex(openIndex === index ? null : index)}
                        className="w-full px-8 py-6 text-left flex items-center justify-between gap-4 hover:bg-background-light/20 transition-colors duration-300"
                      >
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <span className="px-2 py-1 text-xs font-medium bg-accent/10 text-accent rounded-full">
                              {faq.category}
                            </span>
                          </div>
                          <h3 className="text-lg font-semibold text-text group-hover:text-primary transition-colors duration-300">
                            {faq.question}
                          </h3>
                        </div>
                        <div className={`w-8 h-8 rounded-full bg-gradient-to-r from-primary/10 to-accent/10 flex items-center justify-center transition-all duration-300 ${openIndex === index ? 'rotate-45 bg-gradient-to-r from-primary/20 to-accent/20' : ''}`}>
                          <svg className="w-5 h-5 text-primary" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 6V18M6 12H18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                      </button>
                      
                      <AnimatePresence>
                        {openIndex === index && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <div className="px-8 pb-6 pt-2">
                              <p className="text-text-secondary leading-relaxed">
                                {faq.answer}
                              </p>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Contact Support */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="inline-flex flex-col items-center gap-4 p-8 rounded-2xl bg-gradient-to-r from-primary/5 to-accent/5 border border-primary/10">
            <div className="w-16 h-16 rounded-full bg-gradient-to-r from-primary/20 to-accent/20 flex items-center justify-center">
              <svg className="w-8 h-8 text-primary" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21 15C21 15.5523 20.5523 16 20 16H7L3 20V4C3 3.44772 3.44772 3 4 3H20C20.5523 3 21 3.44772 21 4V15Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M9 9H15M9 13H12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold text-text mb-2">
                Still have questions?
              </h3>
              <p className="text-text-secondary mb-6">
                Our support team is here to help you get started with ProofPay
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://discord.gg/gYK3Rths"
                  className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-primary to-primary-dark text-white font-medium hover:shadow-lg hover:shadow-primary/25 transition-all duration-300"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"/>
                  </svg>
                  Join Discord
                </a>
                <a
                  href="mailto:support@proofpay.com"
                  className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-background-light/40 backdrop-blur-sm border border-accent/20 text-text font-medium hover:border-accent/40 transition-all duration-300"
                >
                  <svg className="w-5 h-5 text-accent" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 7L9 13L15 7L21 13V19C21 19.5523 20.5523 20 20 20H4C3.44772 20 3 19.5523 3 19V7Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M3 7L12 14L21 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Email Support
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 