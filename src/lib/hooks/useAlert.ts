/**
 * Custom hook for managing alert UI components.
 * Provides utilities for displaying different types of alerts with appropriate icons and styling.
 *
 * @module useAlert
 */

import { useCallback, useMemo } from "react";
import { AlertType } from "../types/alert";

/**
 * Hook for managing alert UI components
 *
 * @returns {Object} Alert management utilities
 * @returns {Function} getIcon - Function to get the appropriate icon for an alert type
 * @returns {Function} getColorClass - Function to get the appropriate color class for an alert type
 *
 * @example
 * const { getIcon, getColorClass } = useAlert();
 *
 * // Get success alert icon
 * const successIcon = getIcon('success'); // Returns '✓'
 *
 * // Get error alert color class
 * const errorClass = getColorClass('error'); // Returns 'text-red-600'
 */
export const useAlert = () => {
  const getIcon = useCallback((type: AlertType = "success"): string => {
    switch (type) {
      case "success":
        return "✓";
      case "error":
        return "✕";
      case "confirm":
        return "?";
      default:
        return "";
    }
  }, []);

  const getColorClass = useCallback((type: AlertType = "success"): string => {
    switch (type) {
      case "success":
        return "text-green-600";
      case "error":
        return "text-red-600";
      case "confirm":
        return "text-blue-600";
      default:
        return "";
    }
  }, []);

  // Memoize the returned object to prevent unnecessary re-renders
  const alertUtils = useMemo(
    () => ({
      getIcon,
      getColorClass,
    }),
    [getIcon, getColorClass]
  );

  return alertUtils;
};
