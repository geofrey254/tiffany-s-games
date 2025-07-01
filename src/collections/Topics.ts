import { CollectionConfig } from 'payload'
import slugify from 'slugify'

export const Topics: CollectionConfig = {
  slug: 'topics',
  access: {
    read: () => true,
    create: () => true,
    update: () => true,
    delete: () => true,
    admin: () => true,
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
      name: 'description',
      type: 'textarea',
    },
    { name: 'image', type: 'upload', relationTo: 'media', required: true },
  ],
}
