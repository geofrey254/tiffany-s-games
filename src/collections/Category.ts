import { CollectionConfig } from 'payload'

export const Categories: CollectionConfig = {
  slug: 'categories',
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      unique: true,
      required: true,
    },
    {
      name: 'mode',
      type: 'select',
      options: [
        { label: 'Image Guess', value: 'image' },
        { label: 'Trivia', value: 'text' },
        { label: 'Mixed', value: 'mixed' },
      ],
      required: true,
    },
    {
      name: 'description',
      type: 'textarea',
    },
    {
      name: 'icon',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'popularity',
      type: 'checkbox',
      label: 'Popular Category',
      admin: {
        description:
          'Check this box if this category is popular and should be highlighted in the UI.',
      },
    },
    {
      name: 'trending',
      type: 'checkbox',
      label: 'Trending Category',
      admin: {
        description:
          'Check this box if this category is currently trending and should be highlighted in the UI.',
      },
    },
  ],
}
