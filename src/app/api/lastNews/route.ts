/**
 * API route for retrieving the most recent published blog posts.
 * This endpoint is publicly accessible and used by the frontend to display recent news.
 *
 * @module LastNewsAPI
 */

import { NextResponse } from "next/server";
import { getLastThreePublishedPosts } from "../../../lib/services/server/post";

/**
 * Handles GET requests to retrieve the three most recent published posts.
 *
 * @returns {Promise<NextResponse>} The response containing the latest posts
 *
 * @description
 * This endpoint:
 * 1. Retrieves the three most recent published posts
 * 2. Orders them by creation date (newest first)
 * 3. Returns them in a simplified response format
 *
 * @example
 * GET /api/lastNews
 *
 * Response (success):
 * [
 *   { ...post1 },
 *   { ...post2 },
 *   { ...post3 }
 * ]
 *
 * Response (error):
 * {
 *   "error": "Error fetching posts"
 * }
 */
export async function GET() {
  try {
    const lastThreePosts = await getLastThreePublishedPosts();
    return NextResponse.json(lastThreePosts);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Error fetching posts" },
      { status: 500 }
    );
  }
}

// Force dynamic rendering and disable caching
export const dynamic = "force-dynamic";
export const revalidate = 0;
