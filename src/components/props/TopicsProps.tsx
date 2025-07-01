'use client'
import React from 'react'
import { Play, Sparkles, ArrowRight } from 'lucide-react'
import { Topic } from '@/types'

export default function GameCategoriesSection({ topics }: { topics: Topic[] }) {
  return (
    <section className="relative py-24 md:py-24 px-6 md:px-12 overflow-hidden bg-gradient-to-br from-black via-gray-900 to-black">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/6 w-[600px] h-[600px] bg-[#ff651b]/4 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-1/4 right-1/6 w-[500px] h-[500px] bg-[#ffa430]/4 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: '1s' }}
        ></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/1 rounded-full blur-3xl"></div>
      </div>

      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 opacity-3">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255, 255, 255, 0.1) 1px, transparent 0)`,
            backgroundSize: '50px 50px',
          }}
        ></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Enhanced Section Header */}
        <div className="text-center mb-20 md:mb-24">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#ff651b]/10 to-[#ffa430]/10 backdrop-blur-sm border border-[#ff651b]/20 px-6 py-3 rounded-full mb-8">
            <Sparkles className="w-5 h-5 text-[#ff651b]" />
            <span className="text-sm text-white/80 font-semibold tracking-wide">
              GAME CATEGORIES
            </span>
          </div>

          <h2 className="text-4xl md:text-6xl 2xl:text-7xl font-black text-white mb-8 game-title leading-tight">
            Choose Your
            <span className="block bg-gradient-to-r from-[#ffa430] to-[#ff651b] bg-clip-text text-transparent">
              Challenge
            </span>
          </h2>

          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
            Pick from our most popular game categories and start your
            <span className="text-[#ff651b] font-semibold"> legendary journey</span>
          </p>

          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-32 h-1 bg-gradient-to-r from-transparent via-[#ff651b] to-transparent rounded-full"></div>
            <div className="w-3 h-3 bg-[#ff651b] rounded-full animate-pulse"></div>
            <div className="w-32 h-1 bg-gradient-to-r from-transparent via-[#ffa430] to-transparent rounded-full"></div>
          </div>
        </div>

        {/* Enhanced Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {topics.slice(0, 6).map((category, index) => (
            <div
              key={category.id}
              className="group relative overflow-hidden rounded-3xl bg-black/40 backdrop-blur-sm border border-white/10 hover:border-[#ff651b]/40 transition-all duration-700 hover:scale-[1.02] cursor-pointer shadow-2xl hover:shadow-[#ff651b]/10"
              style={{
                animationDelay: `${index * 150}ms`,
                animation: 'slideInUp 0.8s ease-out forwards',
              }}
            >
              {/* Enhanced Background Image */}
              <div className="relative h-48 overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-all duration-1000 group-hover:scale-110 group-hover:rotate-1"
                  style={{ backgroundImage: `url(${category.image})` }}
                />

                {/* Dynamic Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/20 group-hover:from-black/95 group-hover:via-black/70 transition-all duration-700" />

                {/* Floating Play Icon */}
                <div className="absolute top-4 right-4 w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                  <Play className="w-6 h-6 text-white fill-white" />
                </div>

                {/* Corner Accent */}
                <div className="absolute top-0 left-0 w-0 h-0 border-l-[40px] border-l-[#ff651b]/20 border-t-[40px] border-t-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              </div>

              {/* Enhanced Content */}
              <div className="relative p-8">
                <div className="mb-6">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 game-title group-hover:text-[#ff651b] transition-colors duration-300">
                    {category.title}
                  </h3>
                  <p className="text-gray-300 md:text-sm leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                    {category.description}
                  </p>
                </div>

                {/* Enhanced Play Button */}
                <div className="relative overflow-hidden">
                  <button className="w-full bg-gradient-to-r from-[#ffa430] to-[#ff651b] text-white py-4 rounded-2xl font-bold text-lg game-title flex items-center justify-center gap-3 hover:shadow-2xl hover:shadow-[#ff651b]/30 transition-all duration-500 transform translate-y-0 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -skew-x-12 translate-x-full transition-transform duration-1000"></div>
                    <Play className="w-6 h-6 fill-white relative z-10" />
                    <span className="relative z-10">Start Playing</span>
                    <ArrowRight className="w-5 h-5 relative z-10 transform group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              </div>

              {/* Enhanced Glow Effects */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-[#ff651b]/0 via-transparent to-[#ff651b]/0 group-hover:from-[#ff651b]/5 group-hover:to-[#ffa430]/5 transition-all duration-700 pointer-events-none" />
              <div className="absolute -inset-0.5 rounded-3xl bg-gradient-to-r from-[#ff651b]/0 to-[#ffa430]/0 group-hover:from-[#ff651b]/20 group-hover:to-[#ffa430]/20 blur-sm opacity-0 group-hover:opacity-100 transition-all duration-700 -z-10" />
            </div>
          ))}
        </div>

        {/* Enhanced Bottom Call to Action */}
        <div className="text-center mt-20 md:mt-24">
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 md:p-10 max-w-2xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-[#ff651b] to-[#ffa430] rounded-full flex items-center justify-center">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
            </div>

            <p className="text-xl md:text-2xl text-white mb-2 font-semibold">
              Can{"'"}t decide what to play?
            </p>
            <p className="text-gray-400 text-lg mb-8">
              Try our <span className="text-[#ff651b] font-semibold">Random Challenge</span> mode
              and let fate decide your next adventure
            </p>

            <button className="group bg-white/10 backdrop-blur-sm border border-white/20 hover:border-[#ff651b]/50 text-white px-10 py-4 rounded-2xl text-lg font-bold game-title hover:bg-gradient-to-r hover:from-[#ff651b]/10 hover:to-[#ffa430]/10 transition-all duration-500 flex items-center gap-3 mx-auto">
              <span>Try Random Game</span>
              <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        .game-title {
          font-family: 'Arial Black', sans-serif;
          letter-spacing: -0.02em;
        }

        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(50px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes pulse {
          0%,
          100% {
            opacity: 0.4;
          }
          50% {
            opacity: 0.8;
          }
        }
      `}</style>
    </section>
  )
}
