import { NextRequest, NextResponse } from "next/server"

export function middleware(request: NextRequest) {
  const isAdminRoute = request.nextUrl.pathname.startsWith("/admin")
  const isLoginRoute = request.nextUrl.pathname.startsWith("/admin-login")
  const token = request.cookies.get("admin_token")?.value

  if (isAdminRoute && !isLoginRoute) {
    if (!token) {
      const loginUrl = new URL("/admin-login", request.url)
      return NextResponse.redirect(loginUrl)
    }
    
    // Simple token validation - check if token exists and has the right format
    // For now, we'll just check if the token exists and has the right structure
    try {
      // Decode the JWT payload without verification (for Edge Runtime compatibility)
      const payload = JSON.parse(atob(token.split('.')[1]))
      
      // Check if token is expired
      const now = Math.floor(Date.now() / 1000)
      if (payload.exp && now > payload.exp) {
        console.log("Token expired")
        const loginUrl = new URL("/admin-login", request.url)
        return NextResponse.redirect(loginUrl)
      }
      
      // Check if it's an admin token
      if (payload.role !== 'admin') {
        console.log("Not an admin token")
        const loginUrl = new URL("/admin-login", request.url)
        return NextResponse.redirect(loginUrl)
      }
      
      return NextResponse.next()
    } catch (err) {
      console.log("Token validation failed:", err.message)
      const loginUrl = new URL("/admin-login", request.url)
      return NextResponse.redirect(loginUrl)
    }
  }
  
  return NextResponse.next()
}

export const config = {
  matcher: ["/admin/:path*", "/admin"],
} 