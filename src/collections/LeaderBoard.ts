import { CollectionConfig } from 'payload'

export const Leaderboard: CollectionConfig = {
  slug: 'leaderboard',
  fields: [
    { name: 'user', type: 'relationship', relationTo: 'authentication' },
    { name: 'points', type: 'number' },
    { name: 'gamesPlayed', type: 'number' },
    { name: 'rank', type: 'number' },
    {
      name: 'timeRange',
      type: 'select',
      options: ['weekly', 'all_time'],
    },
  ],
}
