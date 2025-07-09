import { notFound } from 'next/navigation'

interface RoomPageProps {
  params: {
    joincode: string
  }
}

export default async function RoomPage({ params }: RoomPageProps) {
  const { joincode } = params

  if (!joincode) {
    console.error('No joincode provided in route params.')
    return notFound()
  }

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/rooms/${joincode}`, {
    cache: 'no-store',
  })

  if (!res.ok) {
    console.error(`Failed to fetch room with joinCode ${joincode}`)
    return notFound()
  }

  const room = await res.json()

  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold">Room: {room.roomCode}</h1>
      <p className="mt-4 text-lg">Room Name: {room.roomName}</p>
      {/* You can display more room data here */}
    </main>
  )
}
