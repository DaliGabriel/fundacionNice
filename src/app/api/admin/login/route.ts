import { NextResponse } from "next/server";
import { errorHandler } from "../../../../lib/middleware/errorHandler";
import { authenticateAdmin } from "../../../../lib/services/auth";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const result = await authenticateAdmin(body);
    return NextResponse.json(
      {
        success: true,
        message: "Login successful",
        data: result,
      },
      { status: 200 }
    );
  } catch (error) {
    return errorHandler(error);
  }
}
