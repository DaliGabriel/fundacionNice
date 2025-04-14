export interface PostAuthData {
  username: string;
  password: string;
}

export type Token = {
  value: string;
  type: "cookie" | "bearer";
};

export type AuthResponse = {
  error?: string;
  message?: string;
  status: number;
  headers?: Record<string, string>;
};

