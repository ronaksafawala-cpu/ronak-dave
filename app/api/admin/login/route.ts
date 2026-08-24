import { NextRequest, NextResponse } from "next/server"
import { ADMIN_SESSION_COOKIE, adminSessionMaxAge, createAdminSession } from "@/lib/admin-session"

export async function POST(request: NextRequest) {
  const configuredEmail = process.env.ADMIN_EMAIL
  const configuredPassword = process.env.ADMIN_PASSWORD
  if (!configuredEmail || !configuredPassword || !process.env.AUTH_SECRET) {
    return NextResponse.json({ error: "Admin login is not configured" }, { status: 503 })
  }

  const { email, password } = await request.json().catch(() => ({ email: "", password: "" }))
  if (email !== configuredEmail || password !== configuredPassword) {
    return NextResponse.json({ error: "Invalid email or password" }, { status: 401 })
  }

  const response = NextResponse.json({ email })
  response.cookies.set(ADMIN_SESSION_COOKIE, createAdminSession(email), {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: adminSessionMaxAge,
  })
  return response
}
