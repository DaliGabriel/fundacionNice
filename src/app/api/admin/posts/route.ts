/**
 * API route for managing blog posts.
 * Provides endpoints for creating and retrieving posts.
 *
 * @module PostsAPI
 */

import { NextResponse } from "next/server";
import { errorHandler } from "../../../../lib/middleware/errorHandler";
import { createPost, getAllPosts } from "../../../../lib/services/server/post";

/**
 * Handles GET requests to retrieve blog posts with optional filtering.
 *
 * @param {Request} request - The incoming HTTP request
 * @returns {Promise<NextResponse>} The response containing filtered posts
 *
 * @description
 * This endpoint:
 * 1. Retrieves the filter parameter from the URL
 * 2. Gets posts from the database (filtered if a filter is provided)
 * 3. Returns the posts in a standardized response format
 *
 * @example
 * GET /api/admin/posts?filter=villa
 *
 * Response:
 * {
 *   "success": true,
 *   "message": "Posts retrieved successfully",
 *   "data": [
 *     { ...filteredPost1 },
 *     { ...filteredPost2 },
 *     ...
 *   ]
 * }
 */
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const filter = searchParams.get("filter");

    const posts = await getAllPosts(filter);

    return NextResponse.json({
      success: true,
      message: "Posts retrieved successfully",
      data: posts,
    });
  } catch (error) {
    return errorHandler(error);
  }
}

/**
 * Handles POST requests to create a new blog post.
 *
 * @param {Request} request - The incoming HTTP request
 * @returns {Promise<NextResponse>} The response containing the created post
 *
 * @description
 * This endpoint:
 * 1. Receives post data in the request body
 * 2. Creates a new post in the database
 * 3. Returns the created post in a standardized response format
 *
 * @example
 * POST /api/admin/posts
 * Request body:
 * {
 *   "title": "New Post",
 *   "cover": "image_url",
 *   "category": "VILLA_DE_LOS_NINOS",
 *   "paragraph1": "First paragraph",
 *   ...
 * }
 *
 * Response:
 * {
 *   "success": true,
 *   "message": "Post created successfully",
 *   "data": { ...createdPost }
 * }
 */
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
