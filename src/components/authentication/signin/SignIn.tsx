'use client'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { signIn } from 'next-auth/react'
import Link from 'next/link'
import {
  Mail,
  Lock,
  Eye,
  EyeOff,
  Crown,
  Github,
  Chrome,
  Facebook,
  Twitter,
  ArrowRight,
  AlertCircle,
  Zap,
  Users,
  Trophy,
} from 'lucide-react'
import { FcGoogle } from 'react-icons/fc'
import Image from 'next/image'
import { useAuth } from '@/contexts/AuthContext'

export default function SignIn() {
  const { setUser } = useAuth()
  const router = useRouter()
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })
  const [showPassword, setShowPassword] = useState(false)
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({})
  const [isLoading, setIsLoading] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
    // Clear error when user starts typing
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
      }))
    }
  }

  const validateForm = () => {
    const newErrors: { email?: string; password?: string } = {}

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email'
    }

    if (!formData.password) {
      newErrors.password = 'Password is required'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async () => {
    if (validateForm()) {
      const res = await fetch('/api/authentication/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
        }),
        credentials: 'include',
      })

      if (res.ok) {
        const data = await res.json()
        setUser(data.user) // Assuming setUser updates the user context
        router.push('/')
      } else {
        const data = await res.json()
        setErrors(data?.message || 'Login failed. Please try again.')
      }
    }
  }

  const socialLogins = [{ name: 'Google', icon: FcGoogle, color: 'bg-white hover:bg-black' }]

  const features = [
    { icon: Trophy, title: 'Compete & Win', desc: 'Join tournaments and climb leaderboards' },
    { icon: Users, title: 'Connect', desc: 'Play with friends and meet new players' },
    { icon: Zap, title: 'Instant Play', desc: 'Jump into games immediately' },
  ]

  const stats = [
    { value: '50K+', label: 'Games Played', color: 'text-[#ff651b]' },
    { value: '15K+', label: 'Active Players', color: 'text-[#ffa430]' },
    { value: '99.9%', label: 'Uptime', color: 'text-green-400' },
  ]

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        {/* Left Side - Welcome Back */}
        <div className="flex flex-col justify-center space-y-8">
          <div className="text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-2 mb-4">
              <Image
                src="/tiff.png"
                alt="Tiffany's Games Logo"
                width={50}
                height={50}
                className="rounded-full"
              />{' '}
              <h1 className="text-4xl md:text-5xl font-bold text-white">
                Welcome<span className="text-[#ff651b]"> Back</span>
              </h1>
            </div>
            <p className="text-xl text-gray-400 mb-6">
              Ready to continue your gaming journey? Sign in to access your account and rejoin the
              action.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-[#ffa430] to-[#ff651b] mx-auto lg:mx-0 rounded-full"></div>
          </div>

          {/* Quick Access Features */}
          <div className="space-y-4">
            <h3 className="text-white font-bold text-lg mb-4">What{"'"}s waiting for you:</h3>
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-center gap-4 p-4 bg-gray-800/30 backdrop-blur-sm rounded-xl border border-gray-700 hover:border-gray-600 transition-colors"
              >
                <div className="w-12 h-12 bg-[#ff651b]/20 rounded-full flex items-center justify-center">
                  <feature.icon className="w-6 h-6 text-[#ff651b]" />
                </div>
                <div>
                  <h4 className="text-white font-bold">{feature.title}</h4>
                  <p className="text-gray-400 text-sm">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Live Stats */}
          <div className="bg-gradient-to-r from-gray-800/50 to-gray-700/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
            <h3 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
              <Crown className="w-5 h-5 text-[#ff651b]" />
              Live Platform Stats
            </h3>
            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className={`text-2xl font-bold ${stat.color}`}>{stat.value}</div>
                  <div className="text-gray-400 text-xs">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side - Sign In Form */}
        <div className="flex items-center justify-center">
          <div className="w-full max-w-md">
            <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-white game-title mb-2">Sign In</h2>
                <p className="text-gray-400">Enter your credentials to continue</p>
              </div>

              {/* Social Login */}
              <div className="space-y-3 mb-6">
                <div className="text-center text-gray-400 text-sm mb-4">Quick sign in with</div>
                <div className="grid grid-cols-1 gap-3">
                  {socialLogins.slice(0, 2).map((social) => (
                    <button
                      key={social.name}
                      className={`${social.color} text-black hover:text-white py-3 px-4 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all duration-300 hover:scale-105 disabled:opacity-50 cursor-pointer hover:border hover:border-[#ff651b]`}
                      disabled={isLoading}
                      onClick={() => {
                        setIsLoading(true)
                        signIn(social.name.toLowerCase(), { callbackUrl: '/' })
                          .then(() => {
                            setIsLoading(false)
                          })
                          .catch((error) => {
                            setErrors({ email: error.message })
                            setIsLoading(false)
                          })
                      }}
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
                  <span className="px-2 bg-gray-800 text-gray-400">Or sign in with email</span>
                </div>
              </div>

              {/* Sign In Form */}
              <div className="space-y-4">
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
                      disabled={isLoading}
                      className={`w-full bg-gray-700/50 border ${errors.email ? 'border-red-500' : 'border-gray-600'} rounded-xl pl-10 pr-4 py-3 text-white placeholder-gray-400 focus:border-[#ff651b] focus:outline-none transition-all duration-300 disabled:opacity-50`}
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
                  <div className="flex justify-between items-center mb-2">
                    <label className="block text-gray-300 font-semibold">Password</label>
                    <Link
                      href="/forgot-password"
                      className="text-[#ff651b] hover:text-[#ffa430] text-sm"
                    >
                      Forgot password?
                    </Link>
                  </div>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type={showPassword ? 'text' : 'password'}
                      name="password"
                      value={formData.password}
                      onChange={handleInputChange}
                      placeholder="Enter your password"
                      disabled={isLoading}
                      className={`w-full bg-gray-700/50 border ${errors.password ? 'border-red-500' : 'border-gray-600'} rounded-xl pl-10 pr-12 py-3 text-white placeholder-gray-400 focus:border-[#ff651b] focus:outline-none transition-all duration-300 disabled:opacity-50`}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white disabled:opacity-50"
                      disabled={isLoading}
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

                {/* Submit Button */}
                <button
                  onClick={handleSubmit}
                  disabled={isLoading}
                  className="w-full bg-gradient-to-r from-[#ffa430] to-[#ff651b] text-white py-4 rounded-xl font-bold text-lg hover:shadow-lg hover:shadow-[#ff651b]/30 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 disabled:opacity-50 disabled:hover:scale-100 cursor-pointer"
                >
                  {isLoading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Signing In...
                    </>
                  ) : (
                    <>
                      Sign In
                      <ArrowRight className="w-5 h-5" />
                    </>
                  )}
                </button>
              </div>

              {/* Sign Up Link */}
              <div className="text-center mt-6">
                <p className="text-gray-400">
                  Don{"'"}t have an account?{' '}
                  <Link
                    href="/signup"
                    className="text-[#ff651b] hover:text-[#ffa430] font-semibold"
                  >
                    Create one now
                  </Link>
                </p>
              </div>

              {/* Additional Options */}
              <div className="mt-6 pt-6 border-t border-gray-700">
                <div className="flex justify-center space-x-6 text-sm">
                  <Link
                    href="/help"
                    className="text-gray-400 hover:text-[#ff651b] transition-colors"
                  >
                    Need Help?
                  </Link>
                  <Link
                    href="/support"
                    className="text-gray-400 hover:text-[#ff651b] transition-colors"
                  >
                    Contact Support
                  </Link>
                </div>
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

        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }

        .animate-spin {
          animation: spin 1s linear infinite;
        }
      `}</style>
    </div>
  )
}
