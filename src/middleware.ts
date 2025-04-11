import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { jwtVerify } from "jose";

export async function middleware(request: NextRequest) {
  // Check if the request is for an admin route
  if (request.nextUrl.pathname.startsWith("/admin")) {
    const token = request.cookies.get("admin-token")?.value;

    // If there's a token, verify it
    if (token) {
      try {
        const secret = new TextEncoder().encode(
          process.env.JWT_SECRET || "your-secret-key"
        );
        
        await jwtVerify(token, secret);

        // If authenticated and trying to access login page, redirect to dashboard
        if (request.nextUrl.pathname === "/admin/login") {
          return NextResponse.redirect(
            new URL("/admin/dashboard", request.url)
          );
        }

        // Allow access to other admin routes
        return NextResponse.next();
      } catch (error) {
        console.error("Error verifying token:", error);
        // If token is invalid, clear it and redirect to login
        const response = NextResponse.redirect(
          new URL("/admin/login", request.url)
        );
        response.cookies.delete("admin-token");
        return response;
      }
    }

    // If no token, only allow access to login page and login API
    if (
      request.nextUrl.pathname === "/admin/login" ||
      request.nextUrl.pathname === "/api/admin/login"
    ) {
      return NextResponse.next();
    }

    // Redirect to login for all other admin routes
    return NextResponse.redirect(new URL("/admin/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*", "/api/admin/:path*"],
};
