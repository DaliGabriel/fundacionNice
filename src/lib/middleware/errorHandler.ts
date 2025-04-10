import { NextResponse } from "next/server";

export const errorHandler = (error: unknown) => {
  console.error("API Error:", error);

  if (error instanceof Error) {
    switch (error.message) {
      case "Missing required fields":
        return NextResponse.json(
          {
            success: false,
            message: "Missing required fields",
            error: error.message,
          },
          { status: 400 }
        );
      case "Invalid category value":
        return NextResponse.json(
          {
            success: false,
            message: "Invalid category value",
            error: error.message,
          },
          { status: 400 }
        );
      case "Invalid credentials":
        return NextResponse.json(
          {
            success: false,
            message: "Invalid credentials",
            error: error.message,
          },
          { status: 401 }
        );
      default:
        return NextResponse.json(
          {
            success: false,
            message: "Internal server error",
            error: error.message,
          },
          { status: 500 }
        );
    }
  }

  return NextResponse.json(
    {
      success: false,
      message: "Internal server error",
      error: "An unexpected error occurred",
    },
    { status: 500 }
  );
};
