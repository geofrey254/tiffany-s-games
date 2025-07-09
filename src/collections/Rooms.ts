import { CollectionConfig } from 'payload'

export const Rooms: CollectionConfig = {
  slug: 'rooms',
  access: {
    read: () => true,
    create: () => true,
    update: () => true,
    delete: () => true, // Prevent deletion of user accounts
    admin: () => false, // Prevent admin access to this collection
  },
  fields: [
    { name: 'roomCode', type: 'text', required: true, unique: true },
    { name: 'roomName', type: 'text', required: true, unique: true },
    { name: 'host', type: 'relationship', relationTo: 'authentication' },
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
