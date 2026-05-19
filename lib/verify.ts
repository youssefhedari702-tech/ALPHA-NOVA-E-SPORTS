import jwt from "jsonwebtoken";

export function verify(
  token: string
) {

  try {

    return jwt.verify(
      token,
      process.env.JWT_SECRET!
    );

  } catch {

    return null;
  }
}