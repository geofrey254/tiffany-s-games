import NextAuth from 'next-auth'
import type { NextAuthOptions } from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'

interface GoogleProfile {
  email: string
  name: string
  given_name?: string
  family_name?: string
  picture?: string
}

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      authorization: {
        params: {
          prompt: 'select_account',
          access_type: 'offline',
          response_type: 'code',
          scope: 'openid email profile',
        },
      },
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      if (user) {
        return true
      } else {
        return true
      }
    },
    async jwt({ token, account, profile }) {
      if (account && profile) {
        const googleProfile = profile as GoogleProfile

        const email = googleProfile.email
        const firstName = googleProfile.given_name || ''
        const lastName = googleProfile.family_name || ''
        const username = email?.split('@')[0] || 'user' + Date.now()

        // Check if user already exists in Payload
        const payloadRes = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/api/authentication?where[email][equals]=${email}`,
          {
            headers: {
              Authorization: `Bearer ${process.env.PAYLOAD_SECRET}`,
            },
          },
        )
        const data = await payloadRes.json()

        if (!data.docs.length) {
          // Upload profile picture to Payload (optional but recommended)

          // Create user in Payload
          await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/authentication`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${process.env.PAYLOAD_SECRET}`,
            },
            body: JSON.stringify({
              email,
              username,
              firstName,
              lastName,
              stats: { totalGames: 0, totalWins: 0, points: 0 },
            }),
          })
        }

        token.email = email
        token.name = googleProfile.name
      }

      return token
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.email = token.email
        session.user.name = token.name
      }
      return session
    },
  },
}

export default NextAuth(authOptions)
