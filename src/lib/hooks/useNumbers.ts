"use client";

import { useState, useEffect } from "react";
import { fetchWithHeaders } from "../utils/api";
import { ROUTES } from "../constants/routes";
import { Numbers, UseNumbersReturn } from "../types/numbers";

export const usePublicNumbers = (): UseNumbersReturn => {
  const [numbers, setNumbers] = useState<Numbers[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchNumbers = async () => {
    try {
      setIsLoading(true);
      setError(null);
      const data = await fetchWithHeaders(ROUTES.API.NUMBERS);
      setNumbers(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to fetch numbers");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchNumbers();
  }, []);

  return {
    numbers,
    error,
    refetchNumbers: fetchNumbers,
    isLoading,
  };
};
