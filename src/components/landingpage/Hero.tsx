'use client'
import React, { useState, useEffect } from 'react'
import {
  ChevronLeft,
  ChevronRight,
  Flag,
  MapPin,
  Globe,
  Building,
  Camera,
  Music,
  Users,
} from 'lucide-react'
import { IoMdTrendingUp } from 'react-icons/io'
import { MdLocalFireDepartment } from 'react-icons/md'
import { GiStopwatch } from 'react-icons/gi'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from '@/components/ui/carousel'
import Link from 'next/link'
import Autoplay from 'embla-carousel-autoplay'
import { time } from 'console'

const gameCategories = [
  {
    id: 1,
    title: 'Guess the Flag',
    description: 'Test your knowledge of world flags',
    icon: Flag,
    bgImage: '/flags.jpeg',
    players: '2.5K',
    difficulty: 'Medium',
    trending: true,
    popular: true,
    time: '30s',
  },
  {
    id: 2,
    title: 'Guess the Street',
    description: 'Explore streets from around the globe',
    icon: MapPin,
    bgImage:
      'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=1200&h=600&fit=crop&crop=center',
    players: '1.8K',
    difficulty: 'Hard',
    trending: true,
    popular: true,
    time: '30s',
  },
  {
    id: 3,
    title: 'Guess the Country',
    description: 'Identify countries by their landmarks',
    icon: Globe,
    bgImage:
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=600&fit=crop&crop=center',
    players: '3.2K',
    difficulty: 'Easy',
    trending: false,
    popular: true,
    time: '30s',
  },
  {
    id: 4,
    title: 'Guess the City',
    description: 'Recognize famous city skylines',
    icon: Building,
    bgImage:
      'https://images.unsplash.com/photo-1514565131-fce0801e5785?w=1200&h=600&fit=crop&crop=center',
    players: '2.1K',
    difficulty: 'Medium',
    trending: true,
    popular: true,
    time: '30s',
  },
  {
    id: 5,
    title: 'Guess the Landmark',
    description: 'Famous monuments and structures',
    icon: Camera,
    bgImage:
      'https://images.unsplash.com/photo-1539650116574-75c0c6d73f6e?w=1200&h=600&fit=crop&crop=center',
    players: '2.8K',
    difficulty: 'Easy',
    trending: false,
    popular: false,
    time: '30s',
  },
  {
    id: 6,
    title: 'Guess the Culture',
    description: 'Traditional music and customs',
    icon: Music,
    bgImage:
      'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=1200&h=600&fit=crop&crop=center',
    players: '1.5K',
    difficulty: 'Hard',
    trending: true,
    popular: false,
    time: '60s',
  },
]

export default function TiffanysGamesHero() {
  const [api, setApi] = useState<CarouselApi | null>(null)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!api) {
      return
    }

    setCount(api.scrollSnapList().length)
    setCurrentSlide(api.selectedScrollSnap() + 1)

    api.on('select', () => {
      setCurrentSlide(api.selectedScrollSnap() + 1)
    })
  }, [api])

  return (
    <section className="relative w-full h-[70vh] md:h-[80vh] overflow-hidden group">
      {/* Carousel Container */}
      <div className="relative w-full h-full">
        <Carousel
          setApi={setApi}
          plugins={[
            Autoplay({
              delay: 3000,
            }),
          ]}
        >
          <CarouselContent className="-ml-4">
            {gameCategories.map((category) => (
              <CarouselItem key={category.id} className="pl-4">
                <div
                  className="relative w-full h-[70vh] md:h-[80vh] bg-cover bg-center transition-transform duration-300"
                  style={{ backgroundImage: `url(${category.bgImage})` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t md:bg-linear-to-r from-black via-black/90 to-black/50 md:to-transparent flex md:flex-col justify-center md:px-24">
                    <div className="flex flex-col md:flex-row justify-center md:justify-between items-center">
                      <div className="flex flex-col items-center md:items-start text-center md:text-left">
                        <div className="flex gap-2 items-center mb-4">
                          <div>
                            {category.trending && (
                              <span className="inline-flex items-center px-3 py-1 text-sm font-semibold text-orange-600 bg-orange-100 rounded-full mb-2">
                                <IoMdTrendingUp className="mr-1" />
                                Trending
                              </span>
                            )}
                          </div>
                          <div>
                            {category.popular && (
                              <span className="inline-flex items-center px-3 py-1 text-sm font-semibold text-green-600 bg-green-100 rounded-full mb-2">
                                <MdLocalFireDepartment className="mr-1" />
                                Popular
                              </span>
                            )}
                          </div>
                        </div>
                        <h2 className="text-white text-6xl md:text-8xl font-bold mb-2 game-title">
                          {category.title}
                        </h2>
                        <h3 className="text-white text-2xl md:text-3xl mb-4">
                          {category.description}
                        </h3>
                        <div className="flex flex-col md:flex-row items-center gap-2">
                          <GiStopwatch className="text-white" />
                          <span className="text-white text-lg">Time: {category.time}</span>
                        </div>
                      </div>
                      <div className="mt-8 md:mt-0">
                        <Link
                          className="bg-[#ffa430] border-2 border-white px-6 py-2 text-white rounded-xl text-2xl md:text-4xl game-title shadow-xl shadow-orange-500 hover:shadow-orange-500/50 transition-all duration-300 hover:scale-105"
                          href="#"
                        >
                          Play Now
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2 sm:gap-3 bg-black/20 backdrop-blur-sm rounded-full px-4 py-2">
        {gameCategories.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              if (api) {
                api.scrollTo(index)
              }
            }}
            className={`h-2 sm:h-3 rounded-full transition-all duration-300 shadow-lg ${
              index === currentSlide
                ? 'w-6 sm:w-8 scale-110'
                : 'w-2 sm:w-3 bg-white/50 hover:bg-white/70 hover:scale-110'
            }`}
            style={{
              backgroundColor: index === currentSlide ? '#ff651b' : undefined,
              boxShadow: index === currentSlide ? '0 0 15px rgba(255, 101, 27, 0.6)' : 'none',
            }}
          />
        ))}
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-white/20 z-20">
        <div
          className="h-full transition-all duration-300 ease-linear"
          style={{
            backgroundColor: '#ff651b',
            width: `${((currentSlide + 1) / gameCategories.length) * 100}%`,
            boxShadow: '0 0 20px rgba(255, 101, 27, 0.6)',
          }}
        />
      </div>

      {/* Floating Decorative Elements */}
      <div className="absolute top-1/4 right-1/4 w-2 h-2 bg-white/30 rounded-full animate-pulse hidden lg:block"></div>
      <div
        className="absolute top-3/4 right-1/3 w-1 h-1 bg-orange-300/40 rounded-full animate-ping hidden lg:block"
        style={{ animationDelay: '1s' }}
      ></div>
      <div
        className="absolute top-1/2 right-1/5 w-1.5 h-1.5 bg-white/25 rounded-full animate-pulse hidden lg:block"
        style={{ animationDelay: '2s' }}
      ></div>
      <div
        className="absolute top-1/3 left-1/4 w-1 h-1 bg-orange-200/30 rounded-full animate-ping hidden lg:block"
        style={{ animationDelay: '3s' }}
      ></div>
    </section>
  )
}
