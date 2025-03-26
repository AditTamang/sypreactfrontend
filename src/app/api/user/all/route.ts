import { NextResponse } from "next/server"
import { checkAdminStatus, getCurrentUser } from "@/lib/auth"
import { redirect } from "next/navigation"
import { prisma } from "@/lib/prisma"

export async function GET() {
  try {
    const isAdmin = await checkAdminStatus()
if(!isAdmin)  return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    const user = await prisma.user.findMany({select: {id: true, fullName:true, email:true} , orderBy: {fullName: "asc"}, where:{role: "USER"}})

    if (!user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    // Return user data without sensitive information
    return NextResponse.json(user)
  } catch (error) {
    console.error("Error fetching user:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

