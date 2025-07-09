// app/api/rooms/[roomCode]/route.ts
import { NextRequest, NextResponse } from 'next/server'

export async function GET(req: NextRequest, context: { params: { roomCode: string } }) {
  const { roomCode } = context.params

  if (!roomCode) {
    return NextResponse.json({ error: 'Missing room code' }, { status: 400 })
  }

  try {
    const res = await fetch(
      `${process.env.PAYLOAD_BASE_URL}/api/rooms?where[roomCode][equals]=${roomCode}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.PAYLOAD_SECRET}`,
        },
      },
    )

    const data = await res.json()

    if (!res.ok || !data.docs?.length) {
      return NextResponse.json({ error: 'Room not found' }, { status: 404 })
    }

    return NextResponse.json(data.docs[0])
  } catch (error) {
    console.error('Fetch error:', error)
    return NextResponse.json({ error: 'Failed to fetch room' }, { status: 500 })
  }
}
