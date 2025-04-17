import { NextResponse } from "next/server";
import { createContactMessage } from "../../../lib/services/server/contact";

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const result = await createContactMessage(data);

    if (result.success) {
      return NextResponse.json(result);
    } else {
      return NextResponse.json(result, { status: 400 });
    }
  } catch (error) {
    console.error("API route error:", error);
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : "Internal server error",
      },
      { status: 500 }
    );
  }
}
