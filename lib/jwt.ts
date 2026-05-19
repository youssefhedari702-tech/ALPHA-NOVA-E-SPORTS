import jwt from "jsonwebtoken";

// Zedt had l'commentaire ghir bash nforci commit jdid
export function verifyToken(token: string) {
  try {
    return jwt.verify(token, process.env.JWT_SECRET!);
  } catch (error) {
    return null;
  }
}