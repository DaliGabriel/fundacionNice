/**
 * Next.js middleware for handling authentication and route protection.
 * This middleware intercepts requests to protected routes and verifies authentication.
 *
 * @module Middleware
 */

import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { RouteService } from "./lib/services/route";
import { TokenService } from "./lib/services/token";
import { HEADERS, MESSAGES, ROUTES } from "./lib/constants/routes";

/**
 * Middleware function that handles request authentication and route protection.
 *
 * @param {NextRequest} request - The incoming request object
 * @returns {Promise<NextResponse>} The response to send back to the client
 *
 * @description
 * This middleware:
 * 1. Checks if the route needs authentication
 * 2. Allows public routes to pass through
 * 3. Extracts and verifies the authentication token
 * 4. Handles unauthorized and invalid token cases
 *
 * @example
 * // The middleware is automatically applied to routes matching the config.matcher pattern
 */
export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const method = request.method;

  // Check if it's a route we need to handle
  if (
    !RouteService.isAdminRoute(pathname) &&
    !RouteService.isApiRoute(pathname)
  ) {
    return NextResponse.next();
  }

  // Check if it's a public route
  if (RouteService.isPublicRoute(pathname, method)) {
    return NextResponse.next();
  }

  // Handle authentication for protected routes
  const token = TokenService.extractToken(request);

  if (!token) {
    return createUnauthorizedResponse(request);
  }

  const isValid = await TokenService.verifyToken(token.value);
  if (!isValid) {
    return createInvalidTokenResponse(request);
  }

  return NextResponse.next();
}

/**
 * Creates an unauthorized response based on the request type.
 *
 * @param {NextRequest} request - The incoming request object
 * @returns {NextResponse} The unauthorized response
 *
 * @description
 * For API routes, returns a 401 JSON response.
 * For page routes, redirects to the login page.
 */
function createUnauthorizedResponse(request: NextRequest): NextResponse {
  if (RouteService.isApiRoute(request.nextUrl.pathname)) {
    return new NextResponse(JSON.stringify(MESSAGES.UNAUTHORIZED), {
      status: 401,
      headers: HEADERS.JSON,
    });
  }
  return NextResponse.redirect(new URL(ROUTES.ADMIN.LOGIN, request.url));
}

/**
 * Creates an invalid token response and clears the token cookie.
 *
 * @param {NextRequest} request - The incoming request object
 * @returns {NextResponse} The invalid token response
 *
 * @description
 * For API routes, returns a 401 JSON response.
 * For page routes, redirects to the login page.
 * In both cases, clears the admin-token cookie.
 */
function createInvalidTokenResponse(request: NextRequest): NextResponse {
  const response = RouteService.isApiRoute(request.nextUrl.pathname)
    ? new NextResponse(JSON.stringify(MESSAGES.INVALID_TOKEN), {
        status: 401,
        headers: HEADERS.JSON,
      })
    : NextResponse.redirect(new URL(ROUTES.ADMIN.LOGIN, request.url));

  response.cookies.delete("admin-token");
  return response;
}

/**
 * Configuration object for the middleware.
 * Specifies which routes should be processed by the middleware.
 */
export const config = {
  matcher: ["/admin/:path*", "/api/admin/:path*"],
};
