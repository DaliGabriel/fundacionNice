import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { RouteService } from "./lib/services/route";
import { TokenService } from "./lib/services/token";
import { HEADERS, MESSAGES, ROUTES } from "./lib/constants/routes";

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

function createUnauthorizedResponse(request: NextRequest): NextResponse {
  if (RouteService.isApiRoute(request.nextUrl.pathname)) {
    return new NextResponse(JSON.stringify(MESSAGES.UNAUTHORIZED), {
      status: 401,
      headers: HEADERS.JSON,
    });
  }
  return NextResponse.redirect(new URL(ROUTES.ADMIN.LOGIN, request.url));
}

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

export const config = {
  matcher: ["/admin/:path*", "/api/admin/:path*"],
};
