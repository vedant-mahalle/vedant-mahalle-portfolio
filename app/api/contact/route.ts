import { NextResponse } from "next/server"
import { MongoClient } from "mongodb"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const mongoUrl = process.env.NEXT_MONGODB_URL
    if (!mongoUrl) {
      return NextResponse.json({ success: false, error: "Missing MongoDB URL" }, { status: 500 })
    }
    const client = new MongoClient(mongoUrl)
    await client.connect()
    const db = client.db()
    const collection = db.collection("contacts")
    await collection.insertOne({ ...body, createdAt: new Date() })
    await client.close()
    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json({ success: false, error: error instanceof Error ? error.message : error }, { status: 500 })
  }
} 