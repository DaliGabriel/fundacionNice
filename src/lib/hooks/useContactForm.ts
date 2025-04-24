import { useState } from "react";
import { fetchWithHeaders } from "../utils/api";
import { ROUTES } from "../constants/routes";

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

type FormStatus = "idle" | "success" | "error";

interface UseContactFormReturn {
  submitForm: (data: ContactFormData) => Promise<void>;
  status: FormStatus;
  isLoading: boolean;
  resetForm: () => void;
}

export const useContactForm = (): UseContactFormReturn => {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [isLoading, setIsLoading] = useState(false);

  const submitForm = async (data: ContactFormData) => {
    setIsLoading(true);
    setStatus("idle");

    try {
      const response = await fetchWithHeaders(ROUTES.API.CONTACT, {
        method: "POST",
        body: JSON.stringify(data),
      });

      if (response.success) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Submission error:", error);
      setStatus("error");
    } finally {
      setIsLoading(false);
    }
  };

  const resetForm = () => {
    setStatus("idle");
  };

  return { submitForm, status, isLoading, resetForm };
};
