// storage-adapter-import-placeholder
import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'
import { s3Storage } from '@payloadcms/storage-s3'

import { Users } from './collections/Users'
import { Media } from './collections/Media'
import { Authentication } from './collections/Authentication'
import { Rooms } from './collections/Rooms'
import { RoomPlayers } from './collections/RoomPlayers'
import { Categories } from './collections/Category'
import { Topics } from './collections/Topics'
import { Questions } from './collections/Questions'
import { GameRounds } from './collections/GameRounds'
import { PlayerAnswers } from './collections/PlayerAnswers'
import { Leaderboard } from './collections/LeaderBoard'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [
    Users,
    Media,
    Authentication,
    Rooms,
    RoomPlayers,
    Categories,
    Topics,
    Questions,
    GameRounds,
    PlayerAnswers,
    Leaderboard,
  ],
  editor: lexicalEditor(),
  cors: ['http://localhost:3000', 'https://tiffanysgames.com', 'https://www.tiffanysgames.com'],
  csrf: ['http://localhost:3000', 'https://tiffanysgames.com', 'https://www.tiffanysgames.com'],
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: mongooseAdapter({
    url: process.env.DATABASE_URI || '',
  }),
  sharp,
  plugins: [
    s3Storage({
      collections: {
        media: {
          prefix: 'media',
        },
      },
      bucket: process.env.S3_BUCKET || '',
      config: {
        forcePathStyle: true,
        credentials: {
          accessKeyId: process.env.S3_ACCESS_KEY_ID || '',
          secretAccessKey: process.env.S3_SECRET_ACCESS_KEY || '',
        },
        region: process.env.S3_REGION,
        endpoint: process.env.S3_ENDPOINT,
      },
    }),
  ],
})
