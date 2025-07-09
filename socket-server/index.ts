// socket-server/index.js
require('dotenv').config()
const express = require('express')
const http = require('http')
const { Server } = require('socket.io')
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

io.on('connection', (socket: any) => {
  console.log('User connected:', socket.id)

  socket.on('guess', (data: any) => {
    console.log('Guess received:', data)
    socket.broadcast.emit('guessMade', data)
  })

  socket.on('disconnect', () => {
    console.log('User disconnected:', socket.id)
  })
})

const PORT = process.env.PORT || 4000
server.listen(PORT, () => {
  console.log(`Socket.IO server running on port ${PORT}`)
})
