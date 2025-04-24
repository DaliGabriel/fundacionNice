"use client";

import { useState } from "react";
import { ROUTES } from "../constants/routes";
import { useAlertContext } from "../context/AlertContext";
import { Numbers, UseAdminNumbersReturn } from "../types/numbers";
import { fetchWithHeaders } from "../utils/api";
import { usePublicNumbers } from "./useNumbers";

export const useAdminNumbers = (): UseAdminNumbersReturn => {
  const { numbers, isLoading, error, refetchNumbers } = usePublicNumbers();
  const [editingNumber, setEditingNumber] = useState<Numbers | null>(null);
  const { showAlert } = useAlertContext();

  const updateNumber = async (id: number, data: Partial<Numbers>) => {
    try {
      await fetchWithHeaders(ROUTES.API.ADMIN.NUMBERS(id), {
        method: "PUT",
        body: JSON.stringify(data),
      });

      // Refetch numbers to get updated data
      await refetchNumbers();

      showAlert({
        type: "success",
        title: "Success",
        message: "Number updated successfully!",
      });
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : "Failed to update number";
      showAlert({
        type: "error",
        title: "Error",
        message: errorMessage,
      });
      throw new Error(errorMessage);
    }
  };

  return {
    numbers,
    isLoading,
    error,
    editingNumber,
    setEditingNumber,
    refetchNumbers,
    updateNumber,
  };
};
