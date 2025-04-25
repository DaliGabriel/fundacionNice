import { useState } from "react";
import { ROUTES } from "../constants/routes";

interface UseFileUploadReturn {
  uploadFile: (file: File) => Promise<string>;
  uploading: boolean;
  error: string | null;
}

export const useFileUpload = (): UseFileUploadReturn => {
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const uploadFile = async (file: File): Promise<string> => {
    setUploading(true);
    setError(null);

    try {
      const formData = new FormData();
      formData.append("file", file);

      const response = await fetch(ROUTES.API.UPLOAD, {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (!data.success) {
        throw new Error(data.error || "Upload failed");
      }

      return data.url;
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "Upload failed";
      setError(errorMessage);
      throw new Error(errorMessage);
    } finally {
      setUploading(false);
    }
  };

  return { uploadFile, uploading, error };
};
