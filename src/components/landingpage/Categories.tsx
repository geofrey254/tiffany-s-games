import React from 'react'
import { getTopics } from '@/lib/Topics'
import GameCategoriesSection from '../props/TopicsProps'

export default async function Categories() {
  const rawtopics = await getTopics()
  const topics = rawtopics.map((cat: any) => ({
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
    <>
      <GameCategoriesSection topics={topics} />
    </>
  )
}
