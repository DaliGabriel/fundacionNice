import { NextResponse } from "next/server";
import { errorHandler } from "../../../../lib/middleware/errorHandler";
import { createPost, getAllPosts } from "../../../../lib/services/post";

export async function GET() {
  try {
    const posts = await getAllPosts();
    return NextResponse.json({
      success: true,
      message: "Posts retrieved successfully",
      data: posts,
    });
  } catch (error) {
    return errorHandler(error);
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const result = await createPost(body);
    return NextResponse.json(
      {
        success: true,
        message: "Post created successfully",
        data: result,
      },
      { status: 201 }
    );
  } catch (error) {
    return errorHandler(error);
  }
}
