import { jwtVerify } from "jose";

export async function isAdmin(token?: string) {
  try {
    if (!token) {
      return false;
    }

    const secret = new TextEncoder().encode(
      process.env.JWT_SECRET || "alpha-nova-secret"
    );

    const { payload } = await jwtVerify(token, secret);

    return payload.role === "ADMIN";
  } catch {
    return false;
  }
}