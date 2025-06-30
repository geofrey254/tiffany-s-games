import { CollectionConfig } from 'payload'

export const RoomPlayers: CollectionConfig = {
  slug: 'room_players',
  fields: [
    { name: 'user', type: 'relationship', relationTo: 'users' },
    { name: 'room', type: 'relationship', relationTo: 'rooms' },
    { name: 'isEliminated', type: 'checkbox', defaultValue: false },
    { name: 'isFinalist', type: 'checkbox', defaultValue: false },
    { name: 'score', type: 'number', defaultValue: 0 },
    { name: 'joinedAt', type: 'date', admin: { readOnly: true } },
  ],
}
