import dbConnect from "@/utils/dbConnect";
import { NextResponse } from "next/server";
import RegisterSnapper from "@/models/RegisterSnapperModel";

export async function POST(req) {
  await dbConnect();

  try {
    const body = await req.json();
    const { name, email } = body;

    // Check if the user already exists
    const existingUser = await RegisterSnapper.findOne({ email });
    if (existingUser) {
      return NextResponse.json(
        {
          success: false,
          error: "Your email has already registered",
        },
        { status: 400 }
      );
    }
    const user = new RegisterSnapper({
      name,
      email,
    });

    await user.save();

    return NextResponse.json({ success: true, data: user }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 400 }
    );
  }
}

// Handle GET requests (fetch all users)
export async function GET() {
  await dbConnect();

  try {
    const users = await RegisterSnapper.find({});
    return NextResponse.json({ success: true, data: users }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
