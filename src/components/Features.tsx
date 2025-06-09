'use client'

import { motion } from 'framer-motion'

const features = [
  {
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13.5 2C13.5 2 15.8335 2.21213 18.8033 5.18198C21.7731 8.15183 21.9853 10.4853 21.9853 10.4853" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M10.4853 21.9853C10.4853 21.9853 8.15183 21.7731 5.18198 18.8033C2.21213 15.8335 2 13.5 2 13.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M13.5 21.9853C13.5 21.9853 15.8335 21.7731 18.8033 18.8033C21.7731 15.8335 21.9853 13.5 21.9853 13.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M10.4853 2C10.4853 2 8.15183 2.21213 5.18198 5.18198C2.21213 8.15183 2 10.4853 2 10.4853" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Blockchain-Verified',
    description: 'Invoices include verifiable on-chain details anyone can check.',
  },
  {
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M19 9V17.8C19 18.9201 19 19.4802 18.782 19.908C18.5903 20.2843 18.2843 20.5903 17.908 20.782C17.4802 21 16.9201 21 15.8 21H8.2C7.07989 21 6.51984 21 6.09202 20.782C5.71569 20.5903 5.40973 20.2843 5.21799 19.908C5 19.4802 5 18.9201 5 17.8V6.2C5 5.07989 5 4.51984 5.21799 4.09202C5.40973 3.71569 5.71569 3.40973 6.09202 3.21799C6.51984 3 7.0799 3 8.2 3H13M19 9L13 3M19 9H14C13.4477 9 13 8.55228 13 8V3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Sleek PDF Format',
    description: 'Every invoice is downloadable as a clean, professional PDF.',
  },
  {
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M17 7C17 9.76142 14.7614 12 12 12C9.23858 12 7 9.76142 7 7C7 4.23858 9.23858 2 12 2C14.7614 2 17 4.23858 17 7Z" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M3 18C3 17.7271 3.00039 17.4603 3.00117 17.1996C3.00742 15.3162 3.05974 14.1905 3.92678 13.3235C4.79382 12.4564 5.91949 12.4041 7.80082 12.2995C9.42963 12.2079 11.2187 12.1667 12 12.1667C12.7813 12.1667 14.5704 12.2079 16.1992 12.2995C18.0805 12.4041 19.2062 12.4564 20.0732 13.3235C20.9403 14.1905 20.9926 15.3162 20.9988 17.1996C20.9996 17.4603 21 17.7271 21 18C21 18.4636 20.9987 18.8952 20.9934 19.2982C20.9756 20.4863 20.9198 21.1317 20.3255 21.6875C19.7312 22.2433 19.0662 22.2723 17.8335 22.2741C16.6959 22.2757 15.2342 22.25 12 22.25C8.76584 22.25 7.30409 22.2757 6.16648 22.2741C4.93376 22.2723 4.26876 22.2433 3.67445 21.6875C3.08015 21.1317 3.02444 20.4863 3.00657 19.2982C3.00127 18.8952 3 18.4636 3 18Z" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
    title: 'Web3 Native',
    description: 'Perfect for freelancers, DAO contributors, NFT creators.',
  },
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
}

export default function Features() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background-light/0 via-background-light/5 to-background-light/0" />
      
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-text via-text/90 to-text bg-clip-text text-transparent">
            Why use ProofPay?
          </h2>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={item}
              className="group relative"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500" />
              <div className="relative flex flex-col items-center p-8 rounded-2xl bg-background-light/40 backdrop-blur-sm border border-text/5 transition duration-500 group-hover:border-accent/20">
                <div className="p-3 rounded-xl bg-accent/10 text-accent mb-4 transition duration-500 group-hover:scale-110 group-hover:bg-accent/20">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-text">{feature.title}</h3>
                <p className="text-text-secondary text-center">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
} 