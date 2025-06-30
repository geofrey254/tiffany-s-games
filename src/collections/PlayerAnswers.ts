import { CollectionConfig } from 'payload'

export const PlayerAnswers: CollectionConfig = {
  slug: 'player_answers',
  fields: [
    { name: 'round', type: 'relationship', relationTo: 'game_rounds' },
    { name: 'player', type: 'relationship', relationTo: 'room_players' },
    { name: 'answer', type: 'text' },
    { name: 'isCorrect', type: 'checkbox', defaultValue: false },
    { name: 'timeTaken', type: 'number' },
  ],
}
