import jwt, { type JwtPayload } from "jsonwebtoken";
import type { Request, Response, NextFunction } from "express";
import "dotenv/config";

interface AuthTokenPayload extends JwtPayload {
  userId: string;
}

export function auth(req: Request, res: Response, next: NextFunction) {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res.status(401).json({
      error: "token required",
    });
  }

  try {
    const secret = process.env.JWT_SECRET;

    if (!secret) {
      throw new Error("JWT secret doesnot exist");
    }
    const decoded = jwt.verify(token, secret);

    if (typeof decoded === "string" || typeof decoded.userId !== "string") {
      throw new Error("Invalid token payload");
    }

    const userId = decoded.userId;
    next();
  } catch (error) {
    res.status(401).json({
      error: "invalid token",
    });
  }
}
