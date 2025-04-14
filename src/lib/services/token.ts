import { jwtVerify } from "jose";
import { Token } from "../types/auth";

export const TokenService = {
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
