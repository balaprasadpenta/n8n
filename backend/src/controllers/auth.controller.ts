import type { Request, Response } from "express";
import "dotenv/config";
import jwt from "jsonwebtoken";
import { User } from "../model/user.model.js";
import { signinSchema, signupSchema } from "../types/authTypes.js";
import bcrypt from "bcrypt";

export async function signup(req: Request, res: Response) {
  try {
    const { username, password } = signupSchema.parse(req.body);

    const existingUser = await User.findOne({ username });

    if (existingUser) {
      return res.status(400).json({
        error: "user exists",
      });
    }
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      username,
      password: hashedPassword,
    });
    return res.status(201).json({
      message: "User created successfully",
      id: user._id,
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    return res.status(400).json({
      error: message,
    });
  }
}

export async function signin(req: Request, res: Response) {
  try {
    const { username, password } = signinSchema.parse(req.body);

    const existingUser = await User.findOne({ username });

    if (!existingUser) {
      return res.status(400).json({
        error: "invalid crednetials",
      });
    }
    const validatePassword = await bcrypt.compare(
      password,
      existingUser.password,
    );

    if (!validatePassword) {
      return res.status(400).json({
        error: "invalid password",
      });
    }

    const secret = process.env.JWT_SECRET;

    if (!secret) {
      throw new Error("Missing JWT_SECRET environment variable");
    }
    const token = jwt.sign({ userId: existingUser._id.toString() }, secret, {
      expiresIn: "1d",
    });
    return res.json({
      token,
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error)
    return res.status(400).json({
      error: message
    })
  }
}
