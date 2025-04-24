import { HEADERS } from "../constants/routes";

export const fetchWithHeaders = async (
  url: string,
  options: RequestInit = {}
) => {
  const defaultOptions: RequestInit = {
    headers: {
      ...HEADERS.JSON,
      ...options.headers,
    },
  };

  const response = await fetch(url, { ...defaultOptions, ...options });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return response.json();
};
