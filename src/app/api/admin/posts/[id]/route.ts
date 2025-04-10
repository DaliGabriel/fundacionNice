import { NextResponse } from "next/server";
import { errorHandler } from "../../../../../lib/middleware/errorHandler";
import {
  updatePost,
  deletePost,
  getPostById,
} from "../../../../../lib/services/post";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const id = (await params).id;
    const post = await getPostById(id);
    if (!post) {
      throw new Error("Post not found");
    }
    return NextResponse.json({
      success: true,
      message: "Post retrieved successfully",
      data: post,
    });
  } catch (error) {
    return errorHandler(error);
  }
}

export async function PUT(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const id = (await params).id;
    const body = await request.json();
    const updatedPost = await updatePost(id, body);
    return NextResponse.json({
      success: true,
      message: "Post updated successfully",
      data: updatedPost,
    });
  } catch (error) {
    return errorHandler(error);
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const id = (await params).id;
    await deletePost(id);
    return NextResponse.json({
      success: true,
      message: "Post deleted successfully",
    });
  } catch (error) {
    return errorHandler(error);
  }
}
