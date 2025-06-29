'use client'
import React from 'react'
import { Brain, Users, Trophy, ArrowRight } from 'lucide-react'
import Link from 'next/link'

const steps = [
  {
    id: 1,
    icon: Users,
    title: 'Join or Create a Room',
    description: 'Play solo or with friends in real time',
    delay: '200ms',
  },
  {
    id: 2,
    icon: Brain,
    title: 'Pick a Category',
    description: 'Choose from logos, monuments, etc.',
    delay: '0ms',
  },

  {
    id: 3,
    icon: Trophy,
    title: 'Guess & Compete',
    description: 'Score points, climb leaderboards, and win!',
    delay: '400ms',
  },
]

export default function HowItWorksSection() {
  return (
    <section className="relative py-20 md:py-32 px-6 md:px-12 overflow-hidden bg-black/95 border-b-4 border-white">
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 game-title">
            How It Works
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#ffa430] to-[#ff651b] mx-auto rounded-full"></div>
        </div>

        {/* Steps Container */}
        <div className="space-y-12 md:space-y-0 md:grid md:grid-cols-3 md:gap-16">
          {steps.map((step, index) => (
            <div key={step.id} className="relative group">
              {index < steps.length - 1 && (
                <div className="md:hidden absolute left-1/2 -bottom-6 w-0.5 h-6 bg-gradient-to-b from-[#ff651b] to-transparent transform -translate-x-1/2 z-10"></div>
              )}

              {/* Step Card */}
              <div
                className="relative text-center group hover:scale-105 transition-all duration-300"
                style={{
                  animationDelay: step.delay,
                  animation: 'fadeInUp 0.6s ease-out forwards',
                }}
              >
                {/* Step Number */}
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#ffa430] to-[#ff651b] rounded-full text-white font-bold text-2xl shadow-lg mb-6 group-hover:shadow-xl group-hover:shadow-[#ff651b]/30 transition-all duration-300">
                  {step.id}
                </div>

                {/* Icon Container */}
                <div className="w-20 h-20 mx-auto mb-8 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center group-hover:border-[#ff651b]/30 transition-all duration-300">
                  <step.icon className="w-10 h-10 text-[#ff651b]" strokeWidth={2} />
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-4 game-title">
                    {step.title}
                  </h3>
                  <p className="text-gray-400 text-base md:text-lg leading-relaxed max-w-xs mx-auto">
                    {step.description}
                  </p>
                </div>
              </div>

              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-20 -right-8 transform z-20">
                  <div className="w-16 h-0.5 bg-gradient-to-r from-[#ff651b] to-[#ffa430] relative">
                    <ArrowRight className="w-4 h-4 text-[#ff651b] absolute -right-2 -top-1.5" />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-20">
          <Link
            href="#"
            className="bg-gradient-to-r from-[#ffa430] to-[#ff651b] text-white px-10 py-4 rounded-xl text-xl md:text-2xl font-bold game-title shadow-xl hover:shadow-2xl hover:shadow-[#ff651b]/30 hover:scale-105 transition-all duration-300 border-2 border-white/20"
          >
            Start Playing Now
          </Link>
          <p className="text-gray-500 mt-6 text-lg">
            Join <span className="text-[#ff651b] font-semibold">10,000+</span> active players
          </p>
        </div>
      </div>

      {/* Subtle Background Elements */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#ff651b]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#ffa430]/5 rounded-full blur-3xl"></div>

      <style jsx>{`
        .game-title {
          font-family: 'Arial Black', sans-serif;
          letter-spacing: -0.02em;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  )
}
