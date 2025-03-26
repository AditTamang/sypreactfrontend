import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const sessionToken = request.cookies.get("session_token")?.value
  const { pathname } = request.nextUrl

  // Define public routes that don't require authentication
  const publicRoutes = ["/", "/login", "/register","/about","/faq","/package","/consultDoctor",
    "/registerDoctor"
  ]
  const isPublicRoute = publicRoutes.some((route) => pathname === route || pathname.startsWith("/api/"))

  // Redirect to login if accessing protected route without session
  if (!sessionToken && !isPublicRoute) {
    const url = new URL("/login", request.url)
    url.searchParams.set("callbackUrl", encodeURI(pathname))
    return NextResponse.redirect(url)
  }

  // Redirect to dashboard if accessing login/register with active session
  if (sessionToken && (pathname === "/login" || pathname === "/register")) {
    return NextResponse.redirect(new URL("/dashboard", request.url))
  }

  return NextResponse.next()
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!_next/static|_next/image|favicon.ico|public|image).*)',
  ],
}

