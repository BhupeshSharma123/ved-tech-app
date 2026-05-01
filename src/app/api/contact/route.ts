import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import { Contact } from "@/lib/models/Contact";
import { sendNotificationEmail } from "@/lib/mailer";

export async function POST(req: Request) {
  try {
    await connectDB();
    const body = await req.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json({ error: "All fields required" }, { status: 400 });
    }

    const newContact = await Contact.create({ name, email, message });
    await sendNotificationEmail({ name, email, message });

    return NextResponse.json({ success: true, data: newContact }, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}