// lib/getCategories.ts
import { getPayload } from 'payload'
import config from '@/payload.config'

export async function getCategories() {
  const payloadConfig = config
  const payload = await getPayload({ config: payloadConfig })
  const result = await payload.find({
    collection: 'categories',
    depth: 2,
    pagination: false,
  })

  return result.docs.map((category) => ({
    id: category.id,
    title: category.title,
    slug: category.slug,
    mode: category.mode,
    description: category.description || '',
    icon: category.icon,
    popularity: category.popularity,
    trending: category.trending,
    image:
      typeof category.icon === 'object' && category.icon !== null
        ? category.icon.url
        : category.icon, // Handles both string and Media types
  }))
}
