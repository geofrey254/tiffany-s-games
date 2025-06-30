import { CollectionConfig } from 'payload'

export const GameRounds: CollectionConfig = {
  slug: 'game_rounds',
  fields: [
    { name: 'room', type: 'relationship', relationTo: 'rooms' },
    { name: 'question', type: 'relationship', relationTo: 'questions' },
    { name: 'roundNumber', type: 'number' },
    { name: 'category', type: 'relationship', relationTo: 'categories' },
    { name: 'playersAnswered', type: 'relationship', relationTo: 'player_answers', hasMany: true },
    {
      name: 'status',
      type: 'select',
      options: ['pending', 'completed'],
      defaultValue: 'pending',
    },
    { name: 'startedAt', type: 'date' },
    { name: 'endedAt', type: 'date' },
  ],
}
