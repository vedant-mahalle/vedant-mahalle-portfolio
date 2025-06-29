import { NextResponse } from "next/server"
import { MongoClient } from "mongodb"

export async function GET() {
  try {
    const mongoUrl = process.env.NEXT_MONGODB_URL
    if (!mongoUrl) {
      return NextResponse.json({ success: false, error: "Missing MongoDB URL" }, { status: 500 })
    }
    const client = new MongoClient(mongoUrl)
    await client.connect()
    const db = client.db()
    const collection = db.collection("contacts")
    const contacts = await collection.find({}).sort({ createdAt: -1 }).toArray()
    await client.close()
    return NextResponse.json({ success: true, contacts })
  } catch (error) {
    return NextResponse.json({ success: false, error: error instanceof Error ? error.message : error }, { status: 500 })
  }
} 