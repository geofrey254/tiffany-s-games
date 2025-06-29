'use client'
import React from 'react'
import { Building, Camera, Circle, Flag, Smile, Film, Play, Users, Clock } from 'lucide-react'
import Link from 'next/link'

const categories = [
  {
    id: 1,
    title: 'Logos',
    description: 'Guess famous brand logos',
    icon: Building,
    bgImage:
      'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop&crop=center',
    players: '3.2K',
    avgTime: '45s',
    difficulty: 'Medium',
  },
  {
    id: 2,
    title: 'Landmarks',
    description: 'Iconic monuments worldwide',
    icon: Camera,
    bgImage:
      'https://images.unsplash.com/photo-1539650116574-75c0c6d73f6e?w=800&h=600&fit=crop&crop=center',
    players: '2.8K',
    avgTime: '60s',
    difficulty: 'Easy',
  },
  {
    id: 3,
    title: 'Football',
    description: 'Players, teams & stadiums',
    icon: Circle,
    bgImage:
      'https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=800&h=600&fit=crop&crop=center',
    players: '4.1K',
    avgTime: '30s',
    difficulty: 'Hard',
  },
  {
    id: 4,
    title: 'Flags',
    description: 'World flags challenge',
    icon: Flag,
    bgImage:
      'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&h=600&fit=crop&crop=center',
    players: '2.5K',
    avgTime: '25s',
    difficulty: 'Medium',
  },
  {
    id: 5,
    title: 'Emojis',
    description: 'Decode emoji combinations',
    icon: Smile,
    bgImage:
      'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop&crop=center',
    players: '1.9K',
    avgTime: '35s',
    difficulty: 'Easy',
  },
  {
    id: 6,
    title: 'Movie Posters',
    description: 'Blockbuster movie guessing',
    icon: Film,
    bgImage:
      'https://images.unsplash.com/photo-1489599558718-9ff24f01bb36?w=800&h=600&fit=crop&crop=center',
    players: '3.7K',
    avgTime: '50s',
    difficulty: 'Medium',
  },
]

const getDifficultyColor = (difficulty) => {
  switch (difficulty) {
    case 'Easy':
      return 'text-green-400 bg-green-400/20'
    case 'Medium':
      return 'text-yellow-400 bg-yellow-400/20'
    case 'Hard':
      return 'text-red-400 bg-red-400/20'
    default:
      return 'text-gray-400 bg-gray-400/20'
  }
}

export default function GameCategoriesSection() {
  return (
    <section className="relative py-20 md:py-32 px-12 md:px-12 overflow-hidden bg-gradient-to-tr from-black via-black to-gray-900 border-b-4 border-white">
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 game-title">
            Choose Your Challenge
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-6">
            Pick from our most popular game categories and start guessing
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-[#ffa430] to-[#ff651b] mx-auto rounded-full"></div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {categories.map((category, index) => (
            <div
              key={category.id}
              className="group relative overflow-hidden rounded-2xl bg-black/50 border border-white/10 hover:border-[#ff651b]/50 transition-all duration-500 hover:scale-105 cursor-pointer"
              style={{
                animationDelay: `${index * 100}ms`,
                animation: 'fadeInUp 0.6s ease-out forwards',
              }}
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url(${category.bgImage})` }}
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/30 group-hover:from-black/90 group-hover:via-black/80 transition-all duration-500" />

              {/* Content */}
              <div className="relative z-10 p-6 h-64 flex flex-col justify-between">
                {/* Top Section */}
                <div className="flex items-start justify-between">
                  <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center group-hover:bg-[#ff651b]/20 group-hover:border-[#ff651b]/40 transition-all duration-300">
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                </div>

                {/* Bottom Section */}
                <div className="mt-2">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 game-title">
                    {category.title}
                  </h3>
                  <p className="text-gray-300 text-sm md:text-base mb-4">{category.description}</p>

                  {/* Stats */}
                  <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      <span>{category.players}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{category.avgTime}</span>
                    </div>
                  </div>

                  {/* Play Button */}
                  <button className="w-full bg-gradient-to-r from-[#ffa430] to-[#ff651b] text-white py-2 rounded-xl font-bold text-lg game-title flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-[#ff651b]/30 transition-all duration-300 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0">
                    <Play className="w-5 h-5" />
                    Play Now
                  </button>
                </div>
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-[#ff651b]/0 to-[#ff651b]/0 group-hover:from-[#ff651b]/10 group-hover:to-[#ffa430]/5 transition-all duration-500 pointer-events-none" />
            </div>
          ))}
        </div>

        {/* Bottom Call to Action */}
        <div className="text-center mt-16">
          <p className="text-gray-400 text-lg mb-6">
            Can't decide? Try our{' '}
            <span className="text-[#ff651b] font-semibold">Random Challenge</span> mode
          </p>
          <Link
            href="#"
            className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-3 rounded-xl text-lg font-bold game-title hover:border-[#ff651b]/50 hover:bg-[#ff651b]/10 transition-all duration-300"
          >
            Random Game
          </Link>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-[#ff651b]/3 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-[#ffa430]/3 rounded-full blur-3xl"></div>

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
