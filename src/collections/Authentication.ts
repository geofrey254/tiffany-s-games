import { CollectionConfig } from 'payload'

export const Authentication: CollectionConfig = {
  slug: 'authentication',
  auth: {
    tokenExpiration: 60 * 60 * 24, // 24 hours
    verify: false,
    cookies: {
      secure: true,
      sameSite: 'None',
      domain: process.env.NEXT_PUBLIC_COOKIE_DOMAIN || 'localhost',
    },
    loginWithUsername: {
      allowEmailLogin: true,
      requireEmail: true,
    },
  },
  admin: {
    useAsTitle: 'firstName',
    description: 'Manage user authentication settings and accounts.',
    group: 'Users',
  },
  access: {
    read: () => true,
    create: () => true,
    update: () => true,
    delete: () => false, // Prevent deletion of user accounts
    admin: () => false, // Prevent admin access to this collection
  },
  fields: [
    {
      type: 'row',
      fields: [
        {
          name: 'firstName',
          type: 'text',
          required: true,
        },
        {
          name: 'lastName',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      name: 'email',
      type: 'email',
      required: true,
      unique: true,
      admin: {
        description: 'This will be used for login and notifications.',
      },
    },
    {
      name: 'username',
      type: 'text',
      required: true,
      unique: true,
      admin: {
        description: 'This will be your public display name.',
      },
    },
    {
      name: 'password',
      type: 'text',
      required: true,
      admin: {
        description: 'Minimum 8 characters, must include letters and numbers.',
      },
    },
    {
      name: 'profilePicture',
      type: 'upload',
      relationTo: 'media',
      admin: {
        description: 'Upload a profile picture for your account.',
      },
    },
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
