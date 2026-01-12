#!/usr/bin/env node

import mongoose from "mongoose";
import bcrypt from "bcryptjs";

import dotenv from "dotenv";

dotenv.config();

const adminSchema = new mongoose.Schema(
  {
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
  },
  { timestamps: true }
);

// Prevent model overwrite in dev or hot reload
const Admin = mongoose.models.Admin || mongoose.model("Admin", adminSchema);

// Connect to MongoDB
async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("✅ Connected to MongoDB");
  } catch (error) {
    console.error("❌ MongoDB connection error:", error);
    process.exit(1);
  }
}

// Create admin user
async function createAdmin(email, password) {
  try {
    // Check if admin already exists
    const existingAdmin = await Admin.findOne({ email });
    if (existingAdmin) {
      console.log("⚠️  Admin already exists:", email);
      return;
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 12);

    // Create admin
    const admin = await Admin.create({
      email,
      password: hashedPassword,
    });

    console.log("✅ Admin created successfully!");
    console.log("📧 Email:", admin.email);
    console.log("🔑 Password:", password);
    console.log("💡 Use these credentials to login at /admin/login");
  } catch (error) {
    console.error("❌ Error creating admin:", error.message);
    process.exit(1);
  }
}

// Main function
async function main() {
  const email = process.argv[2];
  const password = process.argv[3];

  if (!email || !password) {
    console.log("Usage: node scripts/create-admin.js <email> <password>");
    console.log(
      "Example: node scripts/create-admin.js admin@example.com admin123"
    );
    process.exit(1);
  }

  await connectDB();
  await createAdmin(email, password);

  // Close connection
  await mongoose.connection.close();
  console.log("👋 Database connection closed");
  process.exit(0);
}

main();
