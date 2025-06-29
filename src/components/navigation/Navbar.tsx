'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { HiMenu, HiX, HiPlay } from 'react-icons/hi'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const menuItems = [
    { name: 'Home', href: '/' },
    { name: 'Play', href: '/play' },
    { name: 'Categories', href: '/categories' },
    { name: 'Leaderboard', href: '/leaderboard' },
    { name: 'About', href: '/about' },
  ]

  return (
    <nav
      className={`shadow-lg border-b-2 border-gray-100 sticky top-0 z-50 ${scrolled ? 'bg-black/80 backdrop-blur-sm' : 'bg-black  bg-opacity-100'} transition-all duration-300`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Link
              href="/"
              className="text-2xl font-bold text-gray-800 hover:text-orange-500 transition-colors duration-200"
            >
              <Image
                src="/tiff.png"
                alt="Tiffany's Games Logo"
                width={80}
                height={80}
                className="rounded-full"
              />
            </Link>
          </div>

          {/* Desktop Menu - Enhanced */}
          <div className="hidden md:flex items-center space-x-2">
            {menuItems.map((item, index) => (
              <Link
                key={item.name}
                href={item.href}
                className="relative flex items-center justify-center text-white hover:text-gray-300 px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-300 group overflow-hidden"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Hover background effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-yellow-400 opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-x-0 group-hover:scale-x-100 origin-left rounded-xl"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-500 opacity-0 group-hover:opacity-20 transition-all duration-300 rounded-xl"></div>

                <span className="relative z-10 group-hover:font-bold transition-all duration-300">
                  {item.name}
                </span>

                {/* Active indicator dot */}
                <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-orange-400 to-yellow-400 group-hover:w-full transition-all duration-300 rounded-full"></div>
              </Link>
            ))}
          </div>

          {/* Desktop Auth Buttons - Enhanced */}
          <div className="hidden md:flex items-center space-x-3">
            <Link
              href="/signin"
              className="relative flex items-center justify-center text-white px-6 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 group border-2 border-transparent hover:border-orange-200 hover:bg-orange-50/50 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-orange-100 to-yellow-100 opacity-0 group-hover:opacity-50 transition-all duration-300"></div>
              <span className="relative z-10">Sign In</span>
            </Link>

            <Link
              href="/signup"
              className="relative flex items-center justify-center bg-gradient-to-r from-orange-500 to-yellow-400 hover:from-orange-600 hover:to-yellow-500 text-white px-8 py-2.5 rounded-xl text-sm font-bold transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:-translate-y-1 hover:scale-105 group overflow-hidden"
            >
              {/* Animated background shimmer */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-700"></div>

              <span className="relative z-10 tracking-wide">Sign Up</span>

              {/* Glow effect */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-orange-400 to-yellow-300 opacity-0 group-hover:opacity-30 blur-xl transition-all duration-300 -z-10"></div>
            </Link>
          </div>

          {/* Mobile Menu Button - Enhanced */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="relative text-white hover:text-orange-500 p-3 rounded-xl transition-all duration-300 hover:bg-gradient-to-r hover:from-orange-50 hover:to-yellow-50 group border-2 border-transparent hover:border-orange-200"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-yellow-400/10 opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-xl"></div>
              {isOpen ? (
                <HiX className="relative z-10 text-2xl group-hover:rotate-90 transition-transform duration-300" />
              ) : (
                <HiMenu className="relative z-10 text-2xl group-hover:scale-110 transition-transform duration-300" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu - Enhanced */}
        <div
          className={`md:hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}
        >
          <div className="px-4 pt-4 pb-6 space-y-2 bg-black border border-orange-100 mt-2 rounded-b-2xl backdrop-blur-sm">
            {menuItems.map((item, index) => (
              <Link
                key={item.name}
                href={item.href}
                className="relative flex items-center justify-center text-white hover:text-white px-4 py-4 rounded-xl text-base font-semibold transition-all duration-300 group overflow-hidden"
                onClick={() => setIsOpen(false)}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {/* Mobile hover background */}
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-yellow-400 opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-x-0 group-hover:scale-x-100 origin-left rounded-xl"></div>

                <span className="relative z-10 group-hover:font-bold transition-all duration-300">
                  {item.name}
                </span>

                {/* Mobile active indicator */}
                <div className="absolute right-4 top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-b-8 border-b-orange-400 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
              </Link>
            ))}

            {/* Mobile Auth Buttons - Enhanced */}
            <div className="pt-6 space-y-3 border-t border-orange-100/50 mt-6">
              <Link
                href="/signin"
                className="relative flex items-center justify-center text-gray-600 hover:text-orange-500 hover:bg-orange-50 w-full px-4 py-4 rounded-xl text-base font-semibold transition-all duration-300 border-2 border-orange-200 group overflow-hidden"
                onClick={() => setIsOpen(false)}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-orange-100 to-yellow-100 opacity-0 group-hover:opacity-50 transition-all duration-300"></div>
                <span className="relative z-10">Sign In</span>
              </Link>

              <Link
                href="/signup"
                className="relative flex items-center justify-center bg-gradient-to-r from-orange-500 to-yellow-400 hover:from-orange-600 hover:to-yellow-500 text-white w-full px-4 py-4 rounded-xl text-base font-bold transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105 group overflow-hidden"
                onClick={() => setIsOpen(false)}
              >
                {/* Mobile shimmer effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-700"></div>

                <span className="relative z-10 tracking-wide">Sign Up</span>

                {/* Mobile glow effect */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-orange-400 to-yellow-300 opacity-0 group-hover:opacity-30 blur-xl transition-all duration-300 -z-10"></div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
