/**
 * API route for managing statistics numbers.
 * This endpoint handles CRUD operations for numbers data.
 *
 * @module NumbersAPI
 */

import { NextResponse } from "next/server";
import { getAllNumbers } from "../../../lib/services/server/numbers";

/**
 * Handles GET requests to retrieve all numbers.
 *
 * @returns {Promise<NextResponse>} The response containing all numbers
 *
 * @description
 * This endpoint:
 * 1. Retrieves all numbers from the database
 * 2. Orders them by ID
 * 3. Returns them in a JSON response
 *
 * @example
 * GET /api/numbers
 *
 * Response (success):
 * [
 *   { id: 1, icon: "/path/to/icon.svg", number: "190,000", description: "..." },
 *   ...
 * ]
 *
 * Response (error):
 * {
 *   "error": "Error fetching numbers"
 * }
 */
export async function GET() {
  try {
    const numbers = await getAllNumbers();
    return NextResponse.json(numbers);
  } catch (error) {
    console.error("Error fetching numbers:", error);
    return NextResponse.json(
      { error: "Error fetching numbers" },
      { status: 500 }
    );
  }
}

// Force dynamic rendering and disable caching
export const dynamic = "force-dynamic";
export const revalidate = 0;
