import React from 'react'
import Hero from '@/components/landingpage/Hero'
import HowItWorksSection from '@/components/landingpage/How'
import GameCategoriesSection from '@/components/landingpage/Categories'
import MultiplayerRoomsSection from '@/components/landingpage/Multiplayer'

export default function page() {
  return (
    <div>
      <Hero />
      <HowItWorksSection />
      <GameCategoriesSection />
      <MultiplayerRoomsSection />
    </div>
  )
}
