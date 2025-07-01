import React from 'react'
import TiffanysGamesHero from '../props/HeroProps'
import { getCategories } from '@/lib/Categories'

export default async function Hero() {
  const rawCategories = await getCategories()
  const categories = rawCategories.map((cat: any) => ({
    ...cat,
    image:
      cat.image === undefined
        ? null
        : typeof cat.image === 'string' || cat.image === null
          ? cat.image
          : cat.image && cat.image.url
            ? { url: cat.image.url }
            : null,
  }))

  return (
    <div>
      <TiffanysGamesHero categories={categories} />
    </div>
  )
}
