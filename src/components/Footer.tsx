'use client'

const links = [
  { name: 'Twitter', href: 'https://twitter.com/proofpay' },
  { name: 'Telegram', href: 'https://t.me/proofpay' },
  { name: 'Email', href: 'mailto:contact@proofpay.xyz' },
]

const legal = [
  { name: 'Terms of Service', href: '#' },
  { name: 'Privacy Policy', href: '#' },
]

export default function Footer() {
  return (
    <footer className="py-12 bg-dark-card/30 border-t border-white/5">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-gray-400">ProofPay © {new Date().getFullYear()}</p>
          
          <div className="flex gap-8">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="nav-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="flex gap-8">
            {legal.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="nav-link"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
} 