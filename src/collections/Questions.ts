import { CollectionConfig } from 'payload'

export const Questions: CollectionConfig = {
  slug: 'questions',
  fields: [
    { name: 'prompt', type: 'text', required: true },
    { name: 'image', type: 'upload', relationTo: 'media', required: true },
    { name: 'correctAnswer', type: 'text', required: true },
    { name: 'options', type: 'array', fields: [{ name: 'option', type: 'text' }] },
    { name: 'category', type: 'relationship', relationTo: 'categories' },
    {
      name: 'difficulty',
      type: 'select',
      options: ['easy', 'medium', 'hard'],
      defaultValue: 'medium',
    },
  ],
}
