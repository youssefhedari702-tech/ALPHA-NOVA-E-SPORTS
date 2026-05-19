import { verifyToken } from "@/lib/jwt";

export function isAdmin(
  token?: string
) {
  try {
    if (!token) {
      return false;
    }

    const payload =
      verifyToken(token);

    if (!payload) {
      return false;
    }

    return (
      payload.role === "ADMIN" ||
      payload.role === "OWNER"
    );
  } catch {
    return false;
  }
}