/**
 * API route for admin authentication.
 * Handles the login process for administrators.
 *
 * @module AdminLoginAPI
 */

import { NextResponse } from "next/server";
import { errorHandler } from "../../../../lib/middleware/errorHandler";
import { authenticateAdmin } from "../../../../lib/services/server/auth";

/**
 * Handles POST requests for admin login.
 *
 * @param {Request} request - The incoming HTTP request
 * @returns {Promise<NextResponse>} The response containing the authentication result
 *
 * @description
 * This endpoint:
 * 1. Receives admin credentials in the request body
 * 2. Authenticates the admin using the provided credentials
 * 3. Returns a JWT token and admin information on success
 * 4. Returns an error response if authentication fails
 *
 * @example
 * POST /api/admin/login
 * Request body:
 * {
 *   "username": "admin",
 *   "password": "password123"
 * }
 *
 * Response (success):
 * {
 *   "success": true,
 *   "message": "Login successful",
 *   "data": {
 *     "token": "jwt_token_here",
 *     "admin": { ... }
 *   }
 * }
 */
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
