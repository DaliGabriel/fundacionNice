import { ROUTES } from "../constants/routes";

export const RouteService = {
  isAdminRoute: (pathname: string): boolean =>
    pathname.startsWith(ROUTES.ADMIN.BASE),
  isApiRoute: (pathname: string): boolean =>
    pathname.startsWith(ROUTES.API.ADMIN.BASE),

  isPublicRoute: (pathname: string, method: string): boolean => {
    const publicRoutes = [
      ROUTES.ADMIN.LOGIN,
      ROUTES.API.ADMIN.LOGIN,
    ] as string[];
    const publicGetRoutes = [
      ROUTES.ADMIN.POSTS,
      ROUTES.API.ADMIN.POSTS,
    ] as string[];

    const isPublicGetRoute =
      publicGetRoutes.includes(pathname) && method === "GET";
    const isPublicRoute = publicRoutes.includes(pathname);
    const isPublicPostRoute =
      /^\/admin\/posts\/\d+$/.test(pathname) && method === "GET";
    const isPublicApiPostRoute =
      /^\/api\/admin\/posts\/\d+$/.test(pathname) && method === "GET";

    return (
      isPublicRoute ||
      isPublicGetRoute ||
      isPublicPostRoute ||
      isPublicApiPostRoute
    );
  },
};
