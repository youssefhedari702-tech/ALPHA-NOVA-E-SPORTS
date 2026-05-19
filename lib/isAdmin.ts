import { verifyToken } from "@/lib/jwt";

export function isAdmin(
  token?: string
) {

  if (!token) {
    return false;
  }

  const decoded =
    verifyToken(token) as {
      role?: string;
    };

  return (
    decoded?.role ===
      "ADMIN" ||

    decoded?.role ===
      "OWNER"
  );
}