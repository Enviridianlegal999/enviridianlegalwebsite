import { NextRequest, NextResponse } from "next/server";

import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import Admin from "@/models/Admin";
import dbConnect from "@/lib/dbConnect";

export async function POST(req) {
  try {
    // Connect to DB first
    await dbConnect();
    
    const { email, password } = await req.json();

    if (!email || !password) {
      return NextResponse.json(
        { message: "Email and password required" },
        { status: 400 }
      );
    }

    const admin = await Admin.findOne({ email });
    if (!admin || !bcrypt.compareSync(password, admin.password)) {
      return NextResponse.json(
        { message: "Invalid credentials" },
        { status: 401 }
      );
    }

    const token = jwt.sign({ email: admin.email, role: admin.role }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    return NextResponse.json({ token });
  } catch (error) {
    console.error("Login error:", error);
    return NextResponse.json({ message: "Server error" }, { status: 500 });
  }
}
