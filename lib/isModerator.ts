import { verifyToken } from "@/lib/jwt";

export function isModerator(
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
      "MODERATOR" ||

    decoded?.role ===
      "ADMIN" ||

    decoded?.role ===
      "OWNER"
  );
}