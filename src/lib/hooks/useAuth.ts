import { useState } from "react";
import { useRouter } from "next/navigation";
import { fetchWithHeaders } from "../utils/api";
import { ROUTES } from "../constants/routes";

interface LoginCredentials {
  username: string;
  password: string;
}

interface UseAuthReturn {
  login: (credentials: LoginCredentials) => Promise<void>;
  error: string | null;
  isLoading: boolean;
}

export const useAuth = (): UseAuthReturn => {
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const login = async ({ username, password }: LoginCredentials) => {
    setError(null);
    setIsLoading(true);

    try {
      await fetchWithHeaders(ROUTES.API.ADMIN.LOGIN, {
        method: "POST",
        body: JSON.stringify({ username, password }),
      });
      router.push("/admin/dashboard");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Invalid credentials");
      throw err; // Re-throw to handle in the UI if needed
    } finally {
      setIsLoading(false);
    }
  };

  return { login, error, isLoading };
};
