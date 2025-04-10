import { cookies } from "next/headers";

export const setAuthCookie = async (token: string, name: string) => {
  (await cookies()).set(name, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    maxAge: 60 * 60 * 24, // 24 hours
  });
};
