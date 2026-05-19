import { verifyToken } from "@/lib/jwt";

export function isOwner(
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
    "OWNER"
  );
}