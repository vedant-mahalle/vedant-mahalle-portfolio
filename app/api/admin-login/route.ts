import { NextResponse } from "next/server"
import jwt from "jsonwebtoken"

export async function POST(request: Request) {
  try {
    const { username, password } = await request.json()
    
    const adminUser = process.env.ADMIN_USER
    const adminPass = process.env.ADMIN_PASS
    const jwtSecret = process.env.ADMIN_JWT_SECRET
    
    if (!adminUser || !adminPass) {
      return NextResponse.json({ success: false, error: "Admin credentials are not set in environment variables." }, { status: 500 })
    }
    if (!jwtSecret) {
      return NextResponse.json({ success: false, error: "JWT secret is not set in environment variables." }, { status: 500 })
    }
    
    const credentialsMatch = username === adminUser && password === adminPass
    
    if (credentialsMatch) {
      // Create JWT payload
      const payload = {
        username: username,
        role: 'admin'
      }
      
      const token = jwt.sign(payload, jwtSecret, { 
        expiresIn: "8h",
        algorithm: 'HS256'
      })
      
      const response = NextResponse.json({ success: true })
      response.cookies.set("admin_token", token, {
        httpOnly: true,
        sameSite: "lax",
        secure: process.env.NODE_ENV === "production",
        path: "/",
        maxAge: 60 * 60 * 8, // 8 hours
      })
      return response
    } else {
      return NextResponse.json({ success: false, error: "Invalid credentials" }, { status: 401 })
    }
  } catch (error) {
    console.error('Login error:', error)
    return NextResponse.json({ success: false, error: "Internal server error" }, { status: 500 })
  }
} 