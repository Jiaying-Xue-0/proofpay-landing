import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'ProofPay - Generate Web3 Invoices with Blockchain Verification',
  description: 'Create professional, verifiable invoices for your on-chain transactions in seconds.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} font-sans antialiased`}>
      <body className="bg-dark">
        {children}
      </body>
    </html>
  )
}
