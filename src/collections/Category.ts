import { CollectionConfig } from 'payload'
import slugify from 'slugify'

export const Categories: CollectionConfig = {
  slug: 'categories',
  access: {
    read: () => true,
    create: () => true,
    update: () => true,
    delete: () => true, // Prevent deletion of categories
    admin: () => true, // Prevent admin access to this collection
  },
  admin: {
    group: 'Content Management',
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      admin: {
        position: 'sidebar',
        description: 'The slug is automatically generated from the title if left empty.',
      },
      hooks: {
        beforeValidate: [
          ({ value, data }) => {
            if (value) return slugify(value, { lower: true, strict: true })
            if (data?.title) return slugify(data.title, { lower: true, strict: true })
            return value
          },
        ],
      },
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
      name: 'subcategories',
      type: 'relationship',
      relationTo: 'topics',
      hasMany: true,
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
