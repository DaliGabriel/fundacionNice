/**
 * API route for managing individual numbers.
 * Provides endpoints for retrieving, updating, and deleting specific numbers.
 *
 * @module IndividualNumberAPI
 */

import { NextResponse } from "next/server";
import { errorHandler } from "../../../../../lib/middleware/errorHandler";
import {
  updateNumber,
  deleteNumber,
  getNumberById,
} from "../../../../../lib/services/server/numbers";

/**
 * Handles GET requests to retrieve a specific number by ID.
 *
 * @param {Request} request - The incoming HTTP request
 * @param {{ params: Promise<{ id: string }> }} - The route parameters containing the number ID
 * @returns {Promise<NextResponse>} The response containing the requested number
 *
 * @description
 * This endpoint:
 * 1. Extracts the number ID from the route parameters
 * 2. Retrieves the number from the database
 * 3. Returns the number in a standardized response format
 * 4. Returns a 404 error if the number is not found
 *
 * @example
 * GET /api/admin/numbers/123
 *
 * Response (success):
 * {
 *   "success": true,
 *   "message": "Number retrieved successfully",
 *   "data": { ...number }
 * }
 */
export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const id = (await params).id;
    const number = await getNumberById(id);
    if (!number) {
      throw new Error("Number not found");
    }
    return NextResponse.json({
      success: true,
      message: "Number retrieved successfully",
      data: number,
    });
  } catch (error) {
    return errorHandler(error);
  }
}

/**
 * Handles PUT requests to update a specific number.
 *
 * @param {Request} request - The incoming HTTP request
 * @param {{ params: Promise<{ id: string }> }} - The route parameters containing the number ID
 * @returns {Promise<NextResponse>} The response containing the updated number
 *
 * @description
 * This endpoint:
 * 1. Extracts the number ID from the route parameters
 * 2. Receives updated number data in the request body
 * 3. Updates the number in the database
 * 4. Returns the updated number in a standardized response format
 *
 * @example
 * PUT /api/admin/numbers/123
 * Request body:
 * {
 *   "icon": "/logos/cifras1.svg",
 *   "number": "195,000",
 *   "description": "Updated description"
 * }
 *
 * Response:
 * {
 *   "success": true,
 *   "message": "Number updated successfully",
 *   "data": { ...updatedNumber }
 * }
 */
export async function PUT(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const id = (await params).id;
    const body = await request.json();
    const { icon, number, description } = body;

    // Validate required fields
    if (!icon || !number || !description) {
      throw new Error("All fields (icon, number, description) are required");
    }

    const updatedNumber = await updateNumber(id, {
      icon,
      number,
      description,
    });

    return NextResponse.json({
      success: true,
      message: "Number updated successfully",
      data: updatedNumber,
    });
  } catch (error) {
    return errorHandler(error);
  }
}

/**
 * Handles DELETE requests to remove a specific number.
 *
 * @param {Request} request - The incoming HTTP request
 * @param {{ params: Promise<{ id: string }> }} - The route parameters containing the number ID
 * @returns {Promise<NextResponse>} The response confirming the deletion
 *
 * @description
 * This endpoint:
 * 1. Extracts the number ID from the route parameters
 * 2. Deletes the number from the database
 * 3. Returns a success message in a standardized response format
 *
 * @example
 * DELETE /api/admin/numbers/123
 *
 * Response:
 * {
 *   "success": true,
 *   "message": "Number deleted successfully"
 * }
 */
export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const id = (await params).id;
    await deleteNumber(id);
    return NextResponse.json({
      success: true,
      message: "Number deleted successfully",
    });
  } catch (error) {
    return errorHandler(error);
  }
}
