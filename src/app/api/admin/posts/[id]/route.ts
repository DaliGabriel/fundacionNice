/**
 * API route for managing individual blog posts.
 * Provides endpoints for retrieving, updating, and deleting specific posts.
 *
 * @module IndividualPostAPI
 */

import { NextResponse } from "next/server";
import { errorHandler } from "../../../../../lib/middleware/errorHandler";
import {
  updatePost,
  deletePost,
  getPostById,
} from "../../../../../lib/services/server/post";

/**
 * Handles GET requests to retrieve a specific blog post by ID.
 *
 * @param {Request} request - The incoming HTTP request
 * @param {{ params: Promise<{ id: string }> }} - The route parameters containing the post ID
 * @returns {Promise<NextResponse>} The response containing the requested post
 *
 * @description
 * This endpoint:
 * 1. Extracts the post ID from the route parameters
 * 2. Retrieves the post from the database
 * 3. Returns the post in a standardized response format
 * 4. Returns a 404 error if the post is not found
 *
 * @example
 * GET /api/admin/posts/123
 *
 * Response (success):
 * {
 *   "success": true,
 *   "message": "Post retrieved successfully",
 *   "data": { ...post }
 * }
 */
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

/**
 * Handles PUT requests to update a specific blog post.
 *
 * @param {Request} request - The incoming HTTP request
 * @param {{ params: Promise<{ id: string }> }} - The route parameters containing the post ID
 * @returns {Promise<NextResponse>} The response containing the updated post
 *
 * @description
 * This endpoint:
 * 1. Extracts the post ID from the route parameters
 * 2. Receives updated post data in the request body
 * 3. Updates the post in the database
 * 4. Returns the updated post in a standardized response format
 *
 * @example
 * PUT /api/admin/posts/123
 * Request body:
 * {
 *   "title": "Updated Title",
 *   "paragraph1": "Updated content",
 *   ...
 * }
 *
 * Response:
 * {
 *   "success": true,
 *   "message": "Post updated successfully",
 *   "data": { ...updatedPost }
 * }
 */
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

/**
 * Handles DELETE requests to remove a specific blog post.
 *
 * @param {Request} request - The incoming HTTP request
 * @param {{ params: Promise<{ id: string }> }} - The route parameters containing the post ID
 * @returns {Promise<NextResponse>} The response confirming the deletion
 *
 * @description
 * This endpoint:
 * 1. Extracts the post ID from the route parameters
 * 2. Deletes the post from the database
 * 3. Returns a success message in a standardized response format
 *
 * @example
 * DELETE /api/admin/posts/123
 *
 * Response:
 * {
 *   "success": true,
 *   "message": "Post deleted successfully"
 * }
 */
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
