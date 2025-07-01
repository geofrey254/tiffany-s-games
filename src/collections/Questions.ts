import { CollectionConfig } from 'payload'

export const Questions: CollectionConfig = {
  slug: 'questions',
  admin: {
    group: 'Content Management',
  },

  fields: [
    {
      name: 'type',
      type: 'select',
      options: ['image', 'text-only'],
      required: true,
    },
    { name: 'prompt', type: 'text', required: true },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      admin: {
        condition: (_, siblingData) => siblingData.type === 'image',
      },
    },
    {
      name: 'questionType',
      type: 'select',
      options: ['multiple-choice', 'open-ended'],
      required: true,
    },
    {
      name: 'options',
      type: 'array',
      admin: {
        condition: (_, siblingData) => siblingData.questionType === 'multiple-choice',
      },
      fields: [
        { name: 'label', type: 'text', required: true },
        { name: 'isCorrect', type: 'checkbox' },
      ],
    },
    {
      name: 'correctAnswer',
      type: 'text',
      admin: {
        condition: (_, siblingData) => siblingData.questionType === 'open-ended',
      },
    },

    { name: 'category', type: 'relationship', relationTo: 'categories' },
    {
      name: 'difficulty',
      type: 'select',
      options: ['easy', 'medium', 'hard'],
      defaultValue: 'medium',
    },
    {
      name: 'region',
      type: 'select',
      options: [
        { label: 'Kenya', value: 'kenya' },
        { label: 'Africa', value: 'africa' },
        { label: 'Global', value: 'global' },
      ],
      required: false,
    },
  ],
}
