import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/authentication/me`, {
      headers: {
        Cookie: request.headers.get('cookie') || '',
      },
    })

    if (!res.ok) {
      return NextResponse.json({ error: 'Failed to fetch user data' }, { status: res.status })
    }

    const userData = await res.json()
    return NextResponse.json(userData)
  } catch (error) {
    console.error('Error fetching user data:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
