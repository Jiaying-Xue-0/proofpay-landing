'use client'

export default function Demo() {
  return (
    <section className="section">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center space-y-8 mb-16">
          <h2 className="heading">
            Try It{' '}
            <span className="bg-gradient-to-r from-primary-from to-primary-to bg-clip-text text-transparent">
              Now
            </span>
          </h2>
          <p className="subheading">
            See how easy it is to create a verifiable invoice.
          </p>
        </div>
        <div className="card relative aspect-video overflow-hidden">
          <iframe
            src="https://proof-pay.vercel.app"
            className="absolute inset-0 w-full h-full"
            allow="wallet-connect"
          />
        </div>
      </div>
    </section>
  )
} 