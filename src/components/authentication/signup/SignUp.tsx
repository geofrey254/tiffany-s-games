'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import {
  User,
  Mail,
  Lock,
  Eye,
  EyeOff,
  Crown,
  Shield,
  Gamepad2,
  Github,
  Chrome,
  Facebook,
  Twitter,
  ArrowRight,
  AlertCircle,
} from 'lucide-react'
import Image from 'next/image'

export default function SignUp() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  })
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [agreedToTerms, setAgreedToTerms] = useState(false)
  const [errors, setErrors] = useState({})

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
      }))
    }
  }

  const validateForm = () => {
    const newErrors = {}

    if (!formData.username.trim()) {
      newErrors.username = 'Username is required'
    } else if (formData.username.length < 3) {
      newErrors.username = 'Username must be at least 3 characters'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email'
    }

    if (!formData.password) {
      newErrors.password = 'Password is required'
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters'
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match'
    }

    if (!agreedToTerms) {
      newErrors.terms = 'You must agree to the terms and conditions'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (validateForm()) {
      // Handle form submission
      console.log('Form submitted:', formData)
    }
  }

  const socialLogins = [
    { name: 'Google', icon: Chrome, color: 'bg-red-600 hover:bg-red-700' },
    { name: 'GitHub', icon: Github, color: 'bg-gray-800 hover:bg-gray-900' },
    { name: 'Facebook', icon: Facebook, color: 'bg-blue-600 hover:bg-blue-700' },
    { name: 'Twitter', icon: Twitter, color: 'bg-sky-500 hover:bg-sky-600' },
  ]

  const features = [
    { icon: Crown, title: 'Exclusive Access', desc: 'Join private gaming rooms' },
    { icon: Shield, title: 'Secure Gaming', desc: 'Protected player data' },
    { icon: Gamepad2, title: 'Cross-Platform', desc: 'Play on any device' },
  ]

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        {/* Left Side - Branding & Features */}
        <div className="flex flex-col justify-center space-y-8">
          <div className="text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-2 mb-4">
              <Image
                src="/tiff.png"
                alt="Tiffany's Games Logo"
                width={50}
                height={50}
                className="rounded-full"
              />
              <h1 className="text-5xl md:text-6xl font-bold text-white">
                Welcome<span className="text-[#ff651b]"> Player </span>
              </h1>
            </div>
            <p className="text-xl text-gray-400 mb-6">
              Join the ultimate gaming community and compete with your friends
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-[#ffa430] to-[#ff651b] mx-auto lg:mx-0 rounded-full"></div>
          </div>

          {/* Features */}
          <div className="space-y-4">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-center gap-4 p-4 bg-gray-800/30 backdrop-blur-sm rounded-xl border border-gray-700"
              >
                <div className="w-12 h-12 bg-[#ff651b]/20 rounded-full flex items-center justify-center">
                  <feature.icon className="w-6 h-6 text-[#ff651b]" />
                </div>
                <div>
                  <h3 className="text-white font-bold">{feature.title}</h3>
                  <p className="text-gray-400 text-sm">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 text-center">
            <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-4 border border-gray-700">
              <div className="text-2xl font-bold text-[#ff651b]">10K+</div>
              <div className="text-gray-400 text-sm">Active Players</div>
            </div>
            <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-4 border border-gray-700">
              <div className="text-2xl font-bold text-[#ff651b]">500+</div>
              <div className="text-gray-400 text-sm">Daily Rooms</div>
            </div>
            <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-4 border border-gray-700">
              <div className="text-2xl font-bold text-[#ff651b]">24/7</div>
              <div className="text-gray-400 text-sm">Support</div>
            </div>
          </div>
        </div>

        {/* Right Side - Sign Up Form */}
        <div className="flex items-center justify-center">
          <div className="w-full max-w-md">
            <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-white game-title mb-2">Create Account</h2>
                <p className="text-gray-400">Join thousands of players worldwide</p>
              </div>

              {/* Social Login */}
              <div className="space-y-3 mb-6">
                <div className="text-center text-gray-400 text-sm mb-4">Sign up with</div>
                <div className="grid grid-cols-2 gap-3">
                  {socialLogins.slice(0, 2).map((social) => (
                    <button
                      key={social.name}
                      className={`${social.color} text-white py-3 px-4 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all duration-300 hover:scale-105`}
                    >
                      <social.icon className="w-5 h-5" />
                      {social.name}
                    </button>
                  ))}
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {socialLogins.slice(2).map((social) => (
                    <button
                      key={social.name}
                      className={`${social.color} text-white py-3 px-4 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all duration-300 hover:scale-105`}
                    >
                      <social.icon className="w-5 h-5" />
                      {social.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Divider */}
              <div className="relative mb-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-600"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-gray-800 text-gray-400">Or continue with email</span>
                </div>
              </div>

              {/* Sign Up Form */}
              <div className="space-y-4">
                {/* Username */}
                <div>
                  <label className="block text-gray-300 font-semibold mb-2">Username</label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      name="username"
                      value={formData.username}
                      onChange={handleInputChange}
                      placeholder="Enter your username"
                      className={`w-full bg-gray-700/50 border ${errors.username ? 'border-red-500' : 'border-gray-600'} rounded-xl pl-10 pr-4 py-3 text-white placeholder-gray-400 focus:border-[#ff651b] focus:outline-none transition-all duration-300`}
                    />
                  </div>
                  {errors.username && (
                    <p className="text-red-400 text-sm mt-1 flex items-center gap-1">
                      <AlertCircle className="w-4 h-4" />
                      {errors.username}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label className="block text-gray-300 font-semibold mb-2">Email</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Enter your email"
                      className={`w-full bg-gray-700/50 border ${errors.email ? 'border-red-500' : 'border-gray-600'} rounded-xl pl-10 pr-4 py-3 text-white placeholder-gray-400 focus:border-[#ff651b] focus:outline-none transition-all duration-300`}
                    />
                  </div>
                  {errors.email && (
                    <p className="text-red-400 text-sm mt-1 flex items-center gap-1">
                      <AlertCircle className="w-4 h-4" />
                      {errors.email}
                    </p>
                  )}
                </div>

                {/* Password */}
                <div>
                  <label className="block text-gray-300 font-semibold mb-2">Password</label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type={showPassword ? 'text' : 'password'}
                      name="password"
                      value={formData.password}
                      onChange={handleInputChange}
                      placeholder="Create a password"
                      className={`w-full bg-gray-700/50 border ${errors.password ? 'border-red-500' : 'border-gray-600'} rounded-xl pl-10 pr-12 py-3 text-white placeholder-gray-400 focus:border-[#ff651b] focus:outline-none transition-all duration-300`}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
                    >
                      {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                  {errors.password && (
                    <p className="text-red-400 text-sm mt-1 flex items-center gap-1">
                      <AlertCircle className="w-4 h-4" />
                      {errors.password}
                    </p>
                  )}
                </div>

                {/* Confirm Password */}
                <div>
                  <label className="block text-gray-300 font-semibold mb-2">Confirm Password</label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type={showConfirmPassword ? 'text' : 'password'}
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleInputChange}
                      placeholder="Confirm your password"
                      className={`w-full bg-gray-700/50 border ${errors.confirmPassword ? 'border-red-500' : 'border-gray-600'} rounded-xl pl-10 pr-12 py-3 text-white placeholder-gray-400 focus:border-[#ff651b] focus:outline-none transition-all duration-300`}
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
                    >
                      {showConfirmPassword ? (
                        <EyeOff className="w-5 h-5" />
                      ) : (
                        <Eye className="w-5 h-5" />
                      )}
                    </button>
                  </div>
                  {errors.confirmPassword && (
                    <p className="text-red-400 text-sm mt-1 flex items-center gap-1">
                      <AlertCircle className="w-4 h-4" />
                      {errors.confirmPassword}
                    </p>
                  )}
                </div>

                {/* Terms Agreement */}
                <div className="flex items-start gap-2">
                  <input
                    type="checkbox"
                    id="terms"
                    checked={agreedToTerms}
                    onChange={(e) => setAgreedToTerms(e.target.checked)}
                    className="mt-1 accent-[#ff651b]"
                  />
                  <label htmlFor="terms" className="text-sm text-gray-300">
                    I agree to the{' '}
                    <Link href="/terms" className="text-[#ff651b] hover:text-[#ffa430] underline">
                      Terms of Service
                    </Link>{' '}
                    and{' '}
                    <Link href="/privacy" className="text-[#ff651b] hover:text-[#ffa430] underline">
                      Privacy Policy
                    </Link>
                  </label>
                </div>
                {errors.terms && (
                  <p className="text-red-400 text-sm flex items-center gap-1">
                    <AlertCircle className="w-4 h-4" />
                    {errors.terms}
                  </p>
                )}

                {/* Submit Button */}
                <button
                  onClick={handleSubmit}
                  className="w-full bg-gradient-to-r from-[#ffa430] to-[#ff651b] text-white py-4 rounded-xl font-bold text-lg hover:shadow-lg hover:shadow-[#ff651b]/30 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
                >
                  Create Account
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>

              {/* Login Link */}
              <div className="text-center mt-6">
                <p className="text-gray-400">
                  Already have an account?{' '}
                  <Link href="/login" className="text-[#ff651b] hover:text-[#ffa430] font-semibold">
                    Sign in
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#ff651b]/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#ffa430]/5 rounded-full blur-3xl pointer-events-none"></div>

      <style jsx>{`
        .game-title {
          font-family: 'Arial Black', sans-serif;
          letter-spacing: -0.02em;
        }
      `}</style>
    </div>
  )
}
