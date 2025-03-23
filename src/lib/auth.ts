import { cookies } from "next/headers"
import { redirect } from "next/navigation"
import { v4 as uuidv4 } from "uuid"
import {prisma} from "./prisma"
import * as bcrypt from "bcryptjs"

// Session duration in milliseconds (7 days)
const SESSION_DURATION = 7 * 24 * 60 * 60 * 1000

export async function createSession(userId: string) {
  // Delete any existing sessions for this user
  await prisma.session.deleteMany({
    where: { userId },
  })

  // Create a new session
  const token = uuidv4()
  const expiresAt = new Date(Date.now() + SESSION_DURATION)

  await prisma.session.create({
    data: {
      userId,
      token,
      expiresAt,
    },
  })

  // Set the session cookie
   ;(await
        // Set the session cookie
        cookies()).set({
    name: "session_token",
    value: token,
    httpOnly: true,
    path: "/",
    secure: process.env.NODE_ENV === "production",
    maxAge: SESSION_DURATION / 1000, // Convert to seconds
    sameSite: "lax",
  })

  return token
}

export async function getSession() {
  const sessionToken = (await cookies()).get("session_token")?.value

  if (!sessionToken) {
    return null
  }

  const session = await prisma.session.findUnique({
    where: { token: sessionToken },
    include: { user: true },
  })

  if (!session) {
    return null
  }

  // Check if session is expired
  if (new Date() > session.expiresAt) {
    await prisma.session.delete({
      where: { id: session.id },
    });
    (await cookies()).delete("session_token")
    return null
  }

  return session
}

export async function getCurrentUser() {
  const session = await getSession()
  return session?.user || null
}

export async function requireAuth() {
  const user = await getCurrentUser()

  if (!user) {
    redirect("/login")
  }

  return user
}

export async function logout() {
  const sessionToken = (await cookies()).get("session_token")?.value

  if (sessionToken) {
    await prisma.session.deleteMany({
      where: { token: sessionToken },
    })
  }

  (await cookies()).delete("session_token")
}

export async function hashPassword(password: string) {
  return bcrypt.hash(password, 10)
}

export async function comparePasswords(plainPassword: string, hashedPassword: string) {
  return bcrypt.compare(plainPassword, hashedPassword)
}

