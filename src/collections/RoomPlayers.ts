import { CollectionConfig } from 'payload'

export const RoomPlayers: CollectionConfig = {
  slug: 'room_players',
  access: {
    read: () => true,
    create: () => true,
    update: () => true,
    delete: () => true, // Prevent deletion of user accounts
    admin: () => false, // Prevent admin access to this collection
  },
  fields: [
    { name: 'user', type: 'relationship', relationTo: 'authentication' },
    { name: 'room', type: 'relationship', relationTo: 'rooms' },
    { name: 'isEliminated', type: 'checkbox', defaultValue: false },
    { name: 'isFinalist', type: 'checkbox', defaultValue: false },
    { name: 'score', type: 'number', defaultValue: 0 },
    { name: 'joinedAt', type: 'date', admin: { readOnly: true } },
  ],
}
