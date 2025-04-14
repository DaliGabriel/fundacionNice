export const ROUTES = {
  ADMIN: {
    BASE: "/admin",
    LOGIN: "/admin/login",
    POSTS: "/admin/posts",
    POST: (id: string | number) => `/admin/posts/${id}`,
  },
  API: {
    ADMIN: {
      BASE: "/api/admin",
      LOGIN: "/api/admin/login",
      POSTS: "/api/admin/posts",
      POST: (id: string | number) => `/api/admin/posts/${id}`,
    },
  },
} as const;

export const MESSAGES = {
  UNAUTHORIZED: {
    error: "Unauthorized",
    message: "Authentication token is required",
  },
  INVALID_TOKEN: {
    error: "Unauthorized",
    message: "Invalid or expired token",
  },
} as const;

export const HEADERS = {
  JSON: {
    "Content-Type": "application/json",
    "WWW-Authenticate": "Bearer",
  },
} as const;
