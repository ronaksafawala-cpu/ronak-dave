import { createHmac, timingSafeEqual } from "crypto"

export const ADMIN_SESSION_COOKIE = "ronak_admin_session"
const SESSION_TTL_SECONDS = 60 * 60 * 8

function signingSecret() {
  const secret = process.env.AUTH_SECRET
  if (!secret) throw new Error("AUTH_SECRET is not configured")
  return secret
}

function signature(payload: string) {
  return createHmac("sha256", signingSecret()).update(payload).digest("base64url")
}

export function createAdminSession(email: string) {
  const expiresAt = Math.floor(Date.now() / 1000) + SESSION_TTL_SECONDS
  const payload = Buffer.from(JSON.stringify({ email, expiresAt })).toString("base64url")
  return `${payload}.${signature(payload)}`
}

export function verifyAdminSession(value: string | undefined) {
  if (!value) return null
  const [payload, providedSignature] = value.split(".")
  if (!payload || !providedSignature) return null

  const expectedSignature = signature(payload)
  const provided = Buffer.from(providedSignature)
  const expected = Buffer.from(expectedSignature)
  if (provided.length !== expected.length || !timingSafeEqual(provided, expected)) return null

  try {
    const session = JSON.parse(Buffer.from(payload, "base64url").toString("utf8")) as {
      email?: string
      expiresAt?: number
    }
    if (!session.email || !session.expiresAt || session.expiresAt <= Math.floor(Date.now() / 1000)) return null
    return session
  } catch {
    return null
  }
}

export const adminSessionMaxAge = SESSION_TTL_SECONDS
