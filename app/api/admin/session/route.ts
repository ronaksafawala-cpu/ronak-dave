import { NextRequest, NextResponse } from "next/server"
import { ADMIN_SESSION_COOKIE, verifyAdminSession } from "@/lib/admin-session"

export async function GET(request: NextRequest) {
  try {
    const session = verifyAdminSession(request.cookies.get(ADMIN_SESSION_COOKIE)?.value)
    if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    return NextResponse.json({ email: session.email, isAuthenticated: true })
  } catch {
    return NextResponse.json({ error: "Admin login is not configured" }, { status: 503 })
  }
}
