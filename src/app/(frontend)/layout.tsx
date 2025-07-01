import React from 'react'
import './styles.css'
import Navbar from '@/components/navigation/Navbar'
import Footer from '@/components/navigation/Footer'
import { Providers } from '@/components/authentication/Providers'

export const metadata = {
  title: 'Tiffany’s Games | Play. Guess. Win.',
  description:
    'Join Tiffany’s Games and dive into fun multiplayer challenges like Guess the Logo, Guess the Monument, and more. Create rooms, compete with friends, and test your knowledge across categories. Play now!',
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="en">
      <body>
        <Providers>
          <main>
            <Navbar />
            {children}
            <Footer />
          </main>
        </Providers>
      </body>
    </html>
  )
}
