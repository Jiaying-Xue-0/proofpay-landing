'use client'

import { LinkIcon, DocumentTextIcon, UserGroupIcon } from '@heroicons/react/24/outline'

const features = [
  {
    title: 'Blockchain-Verified',
    description: 'Invoices include verifiable on-chain details anyone can check.',
    icon: LinkIcon,
  },
  {
    title: 'Sleek PDF Format',
    description: 'Every invoice is downloadable as a clean, professional PDF.',
    icon: DocumentTextIcon,
  },
  {
    title: 'Web3 Native',
    description: 'Perfect for freelancers, DAO contributors, NFT creators.',
    icon: UserGroupIcon,
  },
]

export default function Features() {
  return (
    <section className="section bg-dark-card/30">
      <div className="container">
        <h2 className="heading text-center mb-16">
          Why use{' '}
          <span className="bg-gradient-to-r from-primary-from to-primary-to bg-clip-text text-transparent">
            ProofPay
          </span>
          ?
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="card group animate-fade-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <feature.icon className="h-12 w-12 mb-6 text-primary-from group-hover:text-primary-to transition-colors" />
              <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 