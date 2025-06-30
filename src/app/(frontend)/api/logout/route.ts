import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/authentication/logout`, {
      method: 'POST',
      headers: {
        Cookie: request.headers.get('cookie') || '',
      },
    })

    if (!res.ok) {
      return NextResponse.json({ error: 'Failed to log out' }, { status: res.status })
    }

    // Clear the cookie in the response
    const response = NextResponse.json({ message: 'Logged out successfully' })
    response.cookies.set('token', '', { maxAge: -1 }) // Clear the token cookie
    return response
  } catch (error) {
    console.error('Error logging out:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
