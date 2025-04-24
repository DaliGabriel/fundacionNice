"use client";

/**
 * Custom hook for managing alert UI components.
 * Provides utilities for displaying different types of alerts with appropriate icons and styling.
 *
 * @module useAlert
 */

import { useState, useCallback, useMemo } from "react";
import { AlertType, AlertState } from "../types/alert";
import { initialAlertState } from "../constants/alert";

/**
 * Custom hook for managing global alert notifications
 * @returns {Object} Alert management utilities
 */
export const useAlert = () => {
  const [alertState, setAlertState] = useState<AlertState>(initialAlertState);

  const showAlert = useCallback((state: Partial<AlertState>) => {
    setAlertState({ ...initialAlertState, ...state, isOpen: true });
  }, []);

  const closeAlert = useCallback(() => {
    setAlertState(initialAlertState);
  }, []);

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
      alertState,
      showAlert,
      closeAlert,
      getIcon,
      getColorClass,
    }),
    [alertState, showAlert, closeAlert, getIcon, getColorClass]
  );

  return alertUtils;
};
