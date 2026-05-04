import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'

const schema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email().max(254),
  message: z.string().min(10).max(2000),
})

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const data = schema.parse(body)

    const apiUrl = process.env.PORTFOLIO_API_URL
    if (!apiUrl) {
      console.log('[contact]', JSON.stringify(data))
      return NextResponse.json({ status: 'ACCEPTED' }, { status: 202 })
    }

    const upstream = await fetch(`${apiUrl}/api/v1/contact`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })

    if (!upstream.ok) {
      const err = await upstream.json().catch(() => ({}))
      return NextResponse.json(err, { status: upstream.status })
    }

    return NextResponse.json(await upstream.json(), { status: 202 })
  } catch (e) {
    if (e instanceof z.ZodError) {
      return NextResponse.json(
        { title: 'Validation failed', violations: e.errors },
        { status: 400 }
      )
    }
    return NextResponse.json({ title: 'Internal server error' }, { status: 500 })
  }
}
