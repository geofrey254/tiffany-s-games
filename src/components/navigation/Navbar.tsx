'use client'

import React, { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {
  HiMenu,
  HiX,
  HiUser,
  HiChevronDown,
  HiLogout,
  HiCog,
  HiClipboardList,
  HiChartBar,
} from 'react-icons/hi'
import { HiTrophy } from 'react-icons/hi2'

import { useAuth } from '@/contexts/AuthContext'

export default function Navbar() {
  const { user, isLoading, logout } = useAuth()
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const [userMenuOpen, setUserMenuOpen] = useState(false)
  const userMenuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close user menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        userMenuRef.current &&
        event.target &&
        !userMenuRef.current.contains(event.target as Node)
      ) {
        setUserMenuOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const toggleUserMenu = () => {
    setUserMenuOpen(!userMenuOpen)
  }

  const menuItems = [
    { name: 'Home', href: '/' },
    { name: 'Play', href: '/play' },
    { name: 'Categories', href: '/categories' },
    { name: 'Leaderboard', href: '/leaderboard' },
    { name: 'Help', href: '/help' },
  ]

  const userMenuItems = [
    { name: 'Scoresheet', href: '/scoresheet', icon: HiClipboardList },
    { name: 'My Stats', href: '/stats', icon: HiChartBar },
    { name: 'Achievements', href: '/achievements', icon: HiTrophy },
    { name: 'Settings', href: '/settings', icon: HiCog },
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

          {/* Desktop Auth/User Menu */}
          <div className="hidden md:flex items-center space-x-3">
            {user ? (
              <div className="relative" ref={userMenuRef}>
                {/* User Menu Button */}
                <button
                  onClick={toggleUserMenu}
                  className="relative flex items-center space-x-2 text-white hover:text-gray-300 px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-300 group border-2 border-transparent cursor-pointer"
                >
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-orange-500 to-yellow-400 flex items-center justify-center">
                    <HiUser className="text-white text-sm" />
                  </div>
                  <span className="max-w-24 truncate">{user.username || user.email}</span>
                  <HiChevronDown
                    className={`transition-transform duration-300 ${userMenuOpen ? 'rotate-180' : ''}`}
                  />
                </button>

                {/* User Dropdown Menu */}
                {userMenuOpen && (
                  <div className="absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-2xl border border-gray-100 py-2 z-50 animate-in slide-in-from-top-2 duration-200">
                    {/* User Info */}
                    <div className="px-4 py-3 border-b border-gray-100">
                      <p className="text-sm font-semibold text-gray-900 truncate">
                        {user.username}
                      </p>
                      <p className="text-xs text-gray-500 truncate">{user.email}</p>
                    </div>

                    {/* Menu Items */}
                    <div className="py-1">
                      {userMenuItems.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-gradient-to-r hover:from-orange-50 hover:to-yellow-50 hover:text-orange-600 transition-all duration-200 group"
                          onClick={() => setUserMenuOpen(false)}
                        >
                          <item.icon className="w-4 h-4 mr-3 text-gray-400 group-hover:text-orange-500" />
                          <span className="font-medium">{item.name}</span>
                        </Link>
                      ))}
                    </div>

                    {/* Logout */}
                    <div className="border-t border-gray-100 py-1">
                      <button
                        onClick={logout}
                        className="flex items-center w-full px-4 py-3 text-sm text-red-600 hover:bg-red-50 transition-all duration-200 group cursor-pointer"
                      >
                        <HiLogout className="w-4 h-4 mr-3 text-red-400 group-hover:text-red-600" />
                        <span className="font-medium">Sign Out</span>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <>
                <Link
                  href="/signin"
                  className="relative flex items-center justify-center text-white px-6 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 group border-2 border-transparent hover:border-orange-200 hover:bg-orange-50/10 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-100/20 to-yellow-100/20 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
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
              </>
            )}
          </div>

          {/* Mobile Menu Button - Enhanced */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="relative text-white hover:text-orange-500 p-3 rounded-xl transition-all duration-300 hover:bg-gradient-to-r hover:from-orange-50/10 hover:to-yellow-50/10 group border-2 border-transparent hover:border-orange-200"
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
          className={`md:hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}
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

            {/* Mobile User Section */}
            {user ? (
              <div className="pt-6 space-y-3 border-t border-orange-100/50 mt-6">
                {/* User Info */}
                <div className="flex items-center space-x-3 px-4 py-3 bg-gradient-to-r from-orange-500/10 to-yellow-400/10 rounded-xl border border-orange-200/30">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-orange-500 to-yellow-400 flex items-center justify-center">
                    <HiUser className="text-white text-lg" />
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm truncate">
                      {user.username || 'User'}
                    </p>
                    <p className="text-gray-300 text-xs truncate">{user.email}</p>
                  </div>
                </div>

                {/* User Menu Items */}
                {userMenuItems.map((item, index) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="relative flex items-center text-white hover:text-white px-4 py-4 rounded-xl text-base font-semibold transition-all duration-300 group overflow-hidden"
                    onClick={() => setIsOpen(false)}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-yellow-400 opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-x-0 group-hover:scale-x-100 origin-left rounded-xl"></div>
                    <item.icon className="relative z-10 w-5 h-5 mr-3 text-gray-300 group-hover:text-white" />
                    <span className="relative z-10 group-hover:font-bold transition-all duration-300">
                      {item.name}
                    </span>
                  </Link>
                ))}

                {/* Mobile Logout */}
                <button
                  onClick={logout}
                  className="relative flex items-center text-red-400 hover:text-white w-full px-4 py-4 rounded-xl text-base font-semibold transition-all duration-300 group overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-red-600 opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-x-0 group-hover:scale-x-100 origin-left rounded-xl"></div>
                  <HiLogout className="relative z-10 w-5 h-5 mr-3 group-hover:text-white" />
                  <span className="relative z-10 group-hover:font-bold transition-all duration-300">
                    Sign Out
                  </span>
                </button>
              </div>
            ) : (
              /* Mobile Auth Buttons */
              <div className="pt-6 space-y-3 border-t border-orange-100/50 mt-6">
                <Link
                  href="/signin"
                  className="relative flex items-center justify-center text-white hover:text-orange-500 hover:bg-orange-50/10 w-full px-4 py-4 rounded-xl text-base font-semibold transition-all duration-300 border-2 border-orange-200/30 group overflow-hidden"
                  onClick={() => setIsOpen(false)}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-100/20 to-yellow-100/20 opacity-0 group-hover:opacity-50 transition-all duration-300"></div>
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
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}
