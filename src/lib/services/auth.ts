import { findByUsername } from "../database/repositories/admin";
import { PostAuthData } from "../types/auth";
import { setAuthCookie } from "../utils/cookie";
import { createJWT } from "../utils/jwt";
import { comparePasswords } from "../utils/password";

export const authenticateAdmin = async (postData: PostAuthData) => {
  if (!postData.username || !postData.password) {
    throw new Error("Missing required fields");
  }

  const admin = await findByUsername(postData.username);

  if (!admin) {
    throw new Error("Invalid credentials");
  }

  const isValid = await comparePasswords(postData.password, admin.password);

  if (!isValid) {
    throw new Error("Invalid credentials");
  }

  const token = await createJWT({ id: admin.id.toString() });
  await setAuthCookie(token, "admin-token");

  return { success: true };
};
