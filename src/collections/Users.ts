import type { CollectionConfig } from 'payload'

export const Users: CollectionConfig = {
  slug: 'users',
  admin: {
    useAsTitle: 'email',
  },
  auth: true,
  fields: [
    // Email added by default
    // Add more fields as needed
    {
      name: 'stats',
      type: 'group',
      fields: [
        { name: 'totalGames', type: 'number', defaultValue: 0 },
        { name: 'totalWins', type: 'number', defaultValue: 0 },
        { name: 'points', type: 'number', defaultValue: 0 },
      ],
    },
  ],
}
