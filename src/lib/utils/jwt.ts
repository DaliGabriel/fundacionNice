import { SignJWT } from "jose";

const JWT_SECRET = new TextEncoder().encode(
  process.env.JWT_SECRET ||
    "666fasnd7325nc05q7nv50q75=)!¡¿¡v999[asdfa354155b]}{#$%&&gren6s6b6666889998989899uibyoiyHDOHF"
);

export const createJWT = async (payload: { id: string }) => {
  return await new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setExpirationTime("24h")
    .sign(JWT_SECRET);
};
