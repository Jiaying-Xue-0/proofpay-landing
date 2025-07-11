'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function Demo() {
  const [isPlaying, setIsPlaying] = useState(false)
  
  const handlePlay = () => {
    setIsPlaying(true)
  }
  
  const handlePause = () => {
    setIsPlaying(false)
  }

  return (
    <section className="section">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center space-y-8 mb-16">
          <h2 className="heading">
            See It{' '}
            <span className="bg-gradient-to-r from-primary-from to-primary-to bg-clip-text text-transparent">
              In Action
            </span>
          </h2>
          <p className="subheading">
            Watch how easy it is to create a verifiable invoice with ProofPay.
          </p>
        </div>
        <div className="card relative aspect-video overflow-hidden group">
          {/* Custom poster overlay */}
          {!isPlaying && (
            <div className="absolute inset-0 z-10 flex items-center justify-center bg-gradient-to-br from-primary/20 to-accent/20 backdrop-blur-sm">
              <div className="text-center space-y-4">
                <div className="relative">
                  <Image
                    src="/logo-proofpay.png"
                    alt="ProofPay Demo"
                    width={200}
                    height={52}
                    className="mx-auto mb-4"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10 blur-xl"></div>
                </div>
                <button
                  onClick={() => {
                    const video = document.getElementById('demo-video') as HTMLVideoElement
                    video?.play()
                  }}
                  className="group/btn relative inline-flex items-center justify-center"
                >
                  <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-primary to-accent opacity-70 blur group-hover/btn:opacity-100 transition duration-300" />
                  <span className="relative flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-primary to-primary-dark text-white font-medium">
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                    <span>Watch Demo</span>
                  </span>
                </button>
                <p className="text-text-secondary text-sm">
                  5:02 • ProofPay Demo Video
                </p>
              </div>
            </div>
          )}
          
          {/* Video element */}
          <video
            id="demo-video"
            className="absolute inset-0 w-full h-full object-cover"
            controls
            preload="metadata"
            onPlay={handlePlay}
            onPause={handlePause}
            onEnded={handlePause}
          >
            <source src="/proofpay-demo.mp4" type="video/mp4" />
            <p className="text-text-secondary p-4">
              Your browser does not support the video tag. 
              <a href="/proofpay-demo.mp4" className="text-primary hover:underline ml-1">
                Download the demo video
              </a>
            </p>
          </video>
        </div>
      </div>
    </section>
  )
} 