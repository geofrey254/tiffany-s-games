'use client'

import { createContext, useContext, useState, useEffect } from 'react'
import { useSession, signOut } from 'next-auth/react'

type User = {
  id: string
  username?: string
  email?: string
  provider?: string // add if you want to track login method
}

type AuthContextType = {
  user: User | null
  setUser: (user: User | null) => void
  isLoading: boolean
  logout: () => Promise<void>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { data: session, status } = useSession()

  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchUser = async () => {
      if (status === 'loading') return
      if (status === 'unauthenticated') {
        setUser(null)
        setIsLoading(false)
        return
      }

      try {
        const res = await fetch('/api/me')
        if (res.ok) {
          const userData = await res.json()
          setUser({
            ...userData.user,
          })
        } else {
          console.error('Failed to fetch user data')
          setUser(null)
        }
      } catch (error) {
        console.error('Error fetching user data:', error)
        setUser(null)
      } finally {
        setIsLoading(false)
      }
    }

    fetchUser()
  }, [session, status])

  const logout = async () => {
    try {
      await signOut({ callbackUrl: '/' })
      setUser(null)
    } catch (error) {
      console.error('Error during logout:', error)
    }
  }

  return (
    <AuthContext.Provider value={{ user, setUser, isLoading, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}
