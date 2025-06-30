import { CollectionConfig } from 'payload'

export const Rooms: CollectionConfig = {
  slug: 'rooms',
  fields: [
    { name: 'roomCode', type: 'text', required: true, unique: true },
    { name: 'host', type: 'relationship', relationTo: 'users' },
    {
      name: 'status',
      type: 'select',
      options: ['waiting', 'in_progress', 'completed'],
      defaultValue: 'waiting',
    },
    {
      name: 'mode',
      type: 'select',
      options: ['elimination', 'points'],
      required: true,
    },
    { name: 'maxPlayers', type: 'number' },
    { name: 'players', type: 'relationship', relationTo: 'room_players', hasMany: true },
    { name: 'currentRound', type: 'number', defaultValue: 1 },
  ],
}
