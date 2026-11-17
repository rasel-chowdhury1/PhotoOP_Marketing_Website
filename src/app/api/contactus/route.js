import dbConnect from "@/utils/dbConnect";
import ContactUsUser from "@/models/ContactUsUser";
import { NextResponse } from "next/server";

// Set CORS headers
const setCorsHeaders = () => ({
  "Access-Control-Allow-Origin": "*", // Adjust this to allow specific origins if needed
  "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
});

// Handle CORS pre-flight OPTIONS requests
export async function OPTIONS() {
  return NextResponse.json({}, { headers: setCorsHeaders() });
}

export async function POST(req) {
  await dbConnect();

  try {
    const body = await req.json();
    const { name, email, subject, message, role } = body;

    // Check if the user already exists
    const existingUser = await ContactUsUser.findOne({ email });
    if (existingUser) {
      return NextResponse.json(
        {
          success: false,
          error: "You have already sent a message once using this email.",
        },
        { headers: setCorsHeaders(), status: 400 }
      );
    }

    const user = new ContactUsUser({
      name,
      email,
      subject,
      role,
      message,
    });

    await user.save();

    return NextResponse.json(
      { success: true, data: user },
      { headers: setCorsHeaders(), status: 201 }
    );
  } catch (error) {
    console.error("Error occurred:", error);
    return NextResponse.json(
      { success: false, error: error.message },
      { headers: setCorsHeaders(), status: 400 }
    );
  }
}

// Handle GET requests with pagination and filtering by role
export async function GET(req) {
  await dbConnect();

  try {
    const { searchParams } = new URL(req.url);
    const role = searchParams.get("role");
    const page = parseInt(searchParams.get("page") || "1", 10); // Current page, default to 1
    const limit = parseInt(searchParams.get("limit") || "10", 10); // Items per page, default to 10
    const skip = (page - 1) * limit; // Calculate how many records to skip for pagination

    let query = {};
    if (role) {
      query.role = role; // Add role filter if provided
    }

    // Fetch users with pagination
    const users = await ContactUsUser.find(query).skip(skip).limit(limit);

    // Get the total number of documents to calculate total pages
    const totalUsers = await ContactUsUser.countDocuments(query);
    const totalPages = Math.ceil(totalUsers / limit);

    return NextResponse.json(
      {
        success: true,
        data: users,
        pagination: {
          currentPage: page,
          totalPages,
          totalItems: totalUsers,
          itemsPerPage: limit,
        },
      },
      { headers: setCorsHeaders(), status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, error: error.message },
      { headers: setCorsHeaders(), status: 500 }
    );
  }
}
