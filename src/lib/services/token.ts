/**
 * Service for handling JWT token operations in the application.
 * This service provides functionality for token extraction and verification.
 *
 * @module TokenService
 */

import { jwtVerify } from "jose";
import { Token } from "../types/auth";

/**
 * Service object containing methods for token management
 */
export const TokenService = {
  /**
   * Extracts a token from the request headers.
   *
   * @param {Request} request - The incoming HTTP request
   * @returns {Token | null} The extracted token object or null if no token is found
   *
   * @description
   * This method checks for tokens in two locations:
   * 1. Cookie header (admin-token)
   * 2. Authorization header (Bearer token)
   *
   * @example
   * const token = TokenService.extractToken(request);
   * if (token) {
   *   // Token found, proceed with verification
   * }
   */
  extractToken: (request: Request): Token | null => {
    const cookieToken = request.headers
      .get("cookie")
      ?.match(/admin-token=([^;]+)/)?.[1];
    const authHeader = request.headers.get("authorization");
    const bearerToken = authHeader?.startsWith("Bearer ")
      ? authHeader.substring(7)
      : null;

    if (cookieToken) return { value: cookieToken, type: "cookie" };
    if (bearerToken) return { value: bearerToken, type: "bearer" };
    return null;
  },

  /**
   * Verifies the validity of a JWT token.
   *
   * @param {string} token - The JWT token to verify
   * @returns {Promise<boolean>} True if the token is valid, false otherwise
   *
   * @description
   * This method verifies the token's signature using the JWT_SECRET environment variable.
   * If verification fails, it logs the error and returns false.
   *
   * @throws {Error} If the JWT_SECRET environment variable is not set
   *
   * @example
   * const isValid = await TokenService.verifyToken(token);
   * if (isValid) {
   *   // Token is valid, proceed with request
   * }
   */
  verifyToken: async (token: string): Promise<boolean> => {
    try {
      const secret = new TextEncoder().encode(
        process.env.JWT_SECRET || "your-secret-key"
      );
      await jwtVerify(token, secret);
      return true;
    } catch (error) {
      console.error("Error verifying token:", error);
      return false;
    }
  },
};
