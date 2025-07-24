// socket-server/index.js
require('dotenv').config()
const express = require('express')
const http = require('http')
const { Server } = require('socket.io')
import { Socket } from 'socket.io'
const cors = require('cors')

const app = express()
app.use(cors())

const server = http.createServer(app)
const io = new Server(server, {
  cors: {
    origin: process.env.CLIENT_ORIGIN || '*', // set Vercel domain in prod
    methods: ['GET', 'POST'],
  },
})

interface Player {
  id: string
  username: string
  score?: number
}

interface Room {
  players: Player[]
}

const rooms: { [roomId: string]: Room } = {}
io.on('connection', (socket: Socket) => {
  console.log('User connected:', socket.id)
  console.log('User connected:', socket.id)

  socket.onAny((event, ...args) => {
    console.log(`Received event: ${event}`, args)
  })
  socket.on('connect', () => {
    console.log('✅ Socket connected:', socket.id)
    setConnected(true)
  })

  socket.on('joinRoom', ({ roomId, username }) => {
    console.log(`${username} joining room ${roomId}`)
    socket.join(roomId)

    // Create room entry in memory if doesn't exist
    if (!rooms[roomId]) {
      rooms[roomId] = {
        players: [],
      }
    }

    const player = { id: socket.id, username }
    rooms[roomId].players.push(player)

    io.to(roomId).emit('roomUpdated', rooms[roomId])
  })

  socket.on('guess', ({ roomId, playerId, guess, correctAnswer }) => {
    const isCorrect = guess.toLowerCase() === correctAnswer.toLowerCase()

    // Broadcast result
    io.to(roomId).emit('guessMade', {
      playerId,
      guess,
      isCorrect,
    })

    if (isCorrect) {
      // Update score in memory
      const player = rooms[roomId]?.players?.find((p) => p.id === playerId)
      if (player) {
        player.score = (player.score || 0) + 10
      }

      io.to(roomId).emit('scoreUpdated', rooms[roomId].players)
    }
  })

  socket.on('startGame', ({ roomId }) => {
    console.log(`Game started in room: ${roomId}`)
    io.to(roomId).emit('gameStarted')
  })

  socket.on('disconnect', () => {
    console.log('User disconnected:', socket.id)

    // Remove player from all rooms
    for (const [roomId, room] of Object.entries(rooms)) {
      room.players = room.players.filter((p) => p.id !== socket.id)
      io.to(roomId).emit('roomUpdated', room)
    }
  })
})

const PORT = process.env.PORT || 4000
server.listen(PORT, () => {
  console.log(`Socket.IO server running on port ${PORT}`)
})
