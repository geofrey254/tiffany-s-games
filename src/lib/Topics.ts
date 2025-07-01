// lib/getCategories.ts
import { getPayload } from 'payload'
import config from '@/payload.config'

export async function getTopics() {
  const payloadConfig = config
  const payload = await getPayload({ config: payloadConfig })
  const result = await payload.find({
    collection: 'topics',
    depth: 2,
    pagination: false,
  })

  return result.docs.map((category) => ({
    id: category.id,
    title: category.title,
    slug: category.slug,
    description: category.description || '',
    image:
      typeof category.image === 'object' && category.image !== null
        ? category.image.url
        : category.image, // Handles both string and Media types
  }))
}
