'use client'
import { useEffect } from 'react'
import { io } from 'socket.io-client'

const socket = io('http://localhost:4000') // or from env var

export default function GamePage() {
  useEffect(() => {
    socket.on('connect', () => {
      console.log('Socket connected:', socket.id)
    })

    socket.on('guessMade', (data) => {
      console.log('Someone guessed:', data)
    })

    return () => socket.disconnect()
  }, [])

  const makeGuess = () => {
    socket.emit('guess', { user: 'player1', guess: 'France' })
  }

  return (
    <section className="py-32 bg-black">
      <button className="bg-white p-4 cursor-pointer" onClick={makeGuess}>
        Guess Flag
      </button>
    </section>
  )
}
