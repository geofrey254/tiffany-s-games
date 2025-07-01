'use client'
import React, { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight, Play, TrendingUp, Flame, Star, Users } from 'lucide-react'
import { Category } from '@/types'

export default function TiffanysGamesHero({ categories }: { categories: Category[] }) {
  const [currentSlide, setCurrentSlide] = useState(0)

  // Auto-advance slides
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % categories.length)
    }, 4000)

    return () => clearInterval(timer)
  }, [categories.length])

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % categories.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + categories.length) % categories.length)
  }

  return (
    <section className="relative w-full h-[50vh] md:h-[90vh] overflow-hidden">
      {/* Main Carousel Container */}
      <div className="relative w-full h-full">
        {categories.map((category, index) => (
          <div
            key={category.id}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
            }`}
          >
            {/* Background Image with Enhanced Effects */}
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-[8000ms] ease-out"
              style={{
                backgroundImage: `url(${
                  typeof category.image === 'string' ? category.image : (category.image?.url ?? '')
                })`,
                transform: index === currentSlide ? 'scale(1.1)' : 'scale(1)',
              }}
            />

            {/* Enhanced Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/30 md:to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />

            {/* Content Container */}
            <div className="relative z-10 h-full flex items-center">
              <div className="container mx-auto px-6 md:px-12 lg:px-20">
                <div className="flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto">
                  {/* Left Content */}
                  <div className="flex-1 text-center md:text-left mb-8 md:mb-0">
                    {/* Enhanced Badges */}
                    <div className="flex flex-wrap gap-3 justify-center md:justify-start mb-6">
                      {category.trending && (
                        <div className="group relative">
                          <div className="absolute -inset-1 bg-gradient-to-r from-orange-600 to-red-600 rounded-full blur opacity-30 group-hover:opacity-50 transition duration-300"></div>
                          <span className="relative inline-flex items-center px-4 py-2 text-sm font-bold text-white bg-gradient-to-r from-orange-500 to-red-500 rounded-full shadow-lg">
                            <TrendingUp className="mr-2 w-4 h-4" />
                            TRENDING NOW
                          </span>
                        </div>
                      )}
                      {category.popularity && (
                        <div className="group relative">
                          <div className="absolute -inset-1 bg-gradient-to-r from-green-600 to-emerald-600 rounded-full blur opacity-30 group-hover:opacity-50 transition duration-300"></div>
                          <span className="relative inline-flex items-center px-4 py-2 text-sm font-bold text-white bg-gradient-to-r from-green-500 to-emerald-500 rounded-full shadow-lg">
                            <Flame className="mr-2 w-4 h-4" />
                            POPULAR CHOICE
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Enhanced Title */}
                    <h1 className="text-5xl md:text-5xl xl:text-6xl font-black text-white mb-4 game-title leading-none">
                      <span
                        className="block opacity-0 animate-slideInLeft"
                        style={{
                          animationDelay: index === currentSlide ? '200ms' : '0ms',
                          animationFillMode: 'forwards',
                        }}
                      >
                        {category.title}
                      </span>
                    </h1>

                    {/* Enhanced Description */}
                    <div className="mb-8">
                      <p
                        className="text-lg md:text-xl lg:text-2xl text-gray-200 mb-4 opacity-0 animate-slideInLeft"
                        style={{
                          animationDelay: index === currentSlide ? '400ms' : '0ms',
                          animationFillMode: 'forwards',
                        }}
                      >
                        {category.description}
                      </p>

                      {/* Stats Bar */}
                      <div
                        className="flex items-center gap-6 justify-center md:justify-start text-gray-300 opacity-0 animate-slideInLeft"
                        style={{
                          animationDelay: index === currentSlide ? '600ms' : '0ms',
                          animationFillMode: 'forwards',
                        }}
                      >
                        <div className="flex items-center gap-2">
                          <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                          <span className="text-lg font-semibold">4.8</span>
                        </div>
                        <div className="w-1 h-6 bg-gray-600 rounded-full"></div>
                        <div className="flex items-center gap-2">
                          <Users className="w-5 h-5 text-blue-400" />
                          <span className="text-lg font-semibold">2.4k players</span>
                        </div>
                      </div>
                    </div>

                    {/* Enhanced CTA Button */}
                    <div
                      className="opacity-0 animate-slideInLeft"
                      style={{
                        animationDelay: index === currentSlide ? '800ms' : '0ms',
                        animationFillMode: 'forwards',
                      }}
                    >
                      <button className="group relative bg-gradient-to-r from-[#ffa430] to-[#ff651b] text-white px-8 py-4 md:px-12 md:py-5 rounded-2xl text-base md:text-2xl lg:text-3xl font-black game-title shadow-2xl hover:shadow-[#ff651b]/50 transition-all duration-500 transform hover:scale-105 hover:-translate-y-1 overflow-hidden">
                        {/* Button Shine Effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

                        {/* Button Content */}
                        <div className="relative flex items-center gap-3">
                          <Play className="w-6 h-6 md:w-8 md:h-8 fill-white" />
                          <span>PLAY NOW</span>
                          <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                        </div>

                        {/* Button Glow */}
                        <div className="absolute -inset-1 bg-gradient-to-r from-[#ffa430] to-[#ff651b] rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-300 -z-10"></div>
                      </button>
                    </div>
                  </div>

                  {/* Right Decorative Elements */}
                  <div className="hidden lg:block flex-shrink-0 ml-12">
                    <div className="relative w-64 h-64">
                      {/* Animated Rings */}
                      <div className="absolute inset-0 border-2 border-white/10 rounded-full animate-spin-slow"></div>
                      <div className="absolute inset-4 border-2 border-[#ff651b]/20 rounded-full animate-spin-reverse"></div>
                      <div className="absolute inset-8 border-2 border-[#ffa430]/30 rounded-full animate-spin-slow"></div>

                      {/* Center Icon */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-16 h-16 bg-gradient-to-r from-[#ffa430] to-[#ff651b] rounded-full flex items-center justify-center shadow-2xl">
                          <Play className="w-8 h-8 text-white fill-white" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 md:w-16 md:h-16 bg-black/30 hover:bg-black/50 backdrop-blur-sm border border-white/20 hover:border-[#ff651b]/50 rounded-full flex items-center justify-center text-white hover:text-[#ff651b] transition-all duration-300 hover:scale-110"
      >
        <ChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 md:w-16 md:h-16 bg-black/30 hover:bg-black/50 backdrop-blur-sm border border-white/20 hover:border-[#ff651b]/50 rounded-full flex items-center justify-center text-white hover:text-[#ff651b] transition-all duration-300 hover:scale-110"
      >
        <ChevronRight className="w-6 h-6 md:w-8 md:h-8" />
      </button>

      {/* Enhanced Slide Indicators */}
      <div className="absolute bottom-8 md:bottom-12 left-1/2 -translate-x-1/2 z-20">
        <div className="flex gap-3 bg-black/20 backdrop-blur-md rounded-full px-6 py-3 border border-white/10">
          {categories.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`relative h-3 rounded-full transition-all duration-500 group ${
                index === currentSlide
                  ? 'w-12 bg-gradient-to-r from-[#ffa430] to-[#ff651b] shadow-lg'
                  : 'w-3 bg-white/40 hover:bg-white/60 hover:scale-125'
              }`}
            >
              {index === currentSlide && (
                <div className="absolute -inset-1 bg-gradient-to-r from-[#ffa430] to-[#ff651b] rounded-full blur opacity-50"></div>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Enhanced Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-1.5 bg-black/20 z-20">
        <div
          className="h-full transition-all duration-300 ease-out relative overflow-hidden"
          style={{
            background: 'linear-gradient(90deg, #ffa430 0%, #ff651b 100%)',
            width: `${((currentSlide + 1) / categories.length) * 100}%`,
            boxShadow: '0 0 20px rgba(255, 101, 27, 0.8)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"></div>
        </div>
      </div>

      {/* Enhanced Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Geometric Shapes */}
        <div className="absolute top-1/4 right-1/4 w-3 h-3 bg-white/20 rounded-full animate-float hidden lg:block"></div>
        <div className="absolute top-3/4 right-1/3 w-2 h-2 bg-[#ff651b]/30 rotate-45 animate-float-delayed hidden lg:block"></div>
        <div className="absolute top-1/2 right-1/5 w-4 h-4 border-2 border-[#ffa430]/20 rounded-full animate-pulse hidden lg:block"></div>
        <div className="absolute top-1/3 left-1/4 w-2 h-8 bg-gradient-to-t from-transparent to-white/10 animate-float hidden lg:block"></div>

        {/* Light Rays */}
        <div className="absolute top-0 right-1/3 w-px h-20 bg-gradient-to-b from-[#ff651b]/20 to-transparent animate-pulse hidden lg:block"></div>
        <div
          className="absolute top-1/4 right-1/5 w-px h-16 bg-gradient-to-b from-white/10 to-transparent animate-pulse hidden lg:block"
          style={{ animationDelay: '1s' }}
        ></div>
      </div>

      <style jsx>{`
        .game-title {
          font-family: 'Arial Black', sans-serif;
          letter-spacing: -0.02em;
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes spin-reverse {
          from {
            transform: rotate(360deg);
          }
          to {
            transform: rotate(0deg);
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes float-delayed {
          0%,
          100% {
            transform: translateY(0px) rotate(45deg);
          }
          50% {
            transform: translateY(-15px) rotate(45deg);
          }
        }

        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        .animate-slideInLeft {
          animation: slideInLeft 0.8s ease-out;
        }

        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }

        .animate-spin-reverse {
          animation: spin-reverse 15s linear infinite;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float-delayed 4s ease-in-out infinite;
          animation-delay: 1s;
        }

        .animate-shimmer {
          animation: shimmer 2s ease-in-out infinite;
        }
      `}</style>
    </section>
  )
}
