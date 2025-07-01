import { getServerSession } from 'next-auth'
import { NextResponse } from 'next/server'
import { authOptions } from '../auth/[...nextauth]'

export async function GET(req: Request) {
  const session = await getServerSession(authOptions)

  if (!session?.user?.email) {
    return NextResponse.json({ user: null }, { status: 401 })
  }

  try {
    const payloadRes = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/authentication?where[email][equals]=${session.user.email}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.PAYLOAD_SECRET}`,
        },
      },
    )

    const data = await payloadRes.json()
    const user = data?.docs?.[0] || null

    return NextResponse.json({ user })
  } catch (error) {
    console.error('Error fetching user from Payload:', error)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}
