/**
 * Service for handling route-related operations in the application.
 * This service provides functionality for route validation and access control.
 *
 * @module RouteService
 */

import { ROUTES } from "../constants/routes";

/**
 * Service object containing methods for route management
 */
export const RouteService = {
  /**
   * Checks if a given pathname is an admin route.
   *
   * @param {string} pathname - The pathname to check
   * @returns {boolean} True if the pathname is an admin route, false otherwise
   *
   * @example
   * const isAdmin = RouteService.isAdminRoute('/admin/dashboard');
   */
  isAdminRoute: (pathname: string): boolean =>
    pathname.startsWith(ROUTES.ADMIN.BASE),

  /**
   * Checks if a given pathname is an API route.
   *
   * @param {string} pathname - The pathname to check
   * @returns {boolean} True if the pathname is an API route, false otherwise
   *
   * @example
   * const isApi = RouteService.isApiRoute('/api/admin/users');
   */
  isApiRoute: (pathname: string): boolean =>
    pathname.startsWith(ROUTES.API.ADMIN.BASE),

  /**
   * Determines if a route is publicly accessible.
   *
   * @param {string} pathname - The pathname to check
   * @param {string} method - The HTTP method of the request
   * @returns {boolean} True if the route is public, false otherwise
   *
   * @description
   * A route is considered public if it:
   * 1. Is in the publicRoutes list
   * 2. Is in the publicGetRoutes list and the method is GET
   * 3. Matches the public post route pattern and the method is GET
   * 4. Matches the public API post route pattern and the method is GET
   *
   * @example
   * const isPublic = RouteService.isPublicRoute('/admin/login', 'GET');
   */
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
