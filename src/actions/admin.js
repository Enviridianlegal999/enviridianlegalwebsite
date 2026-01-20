"use server";

import dbConnect from "@/lib/dbConnect";
import Admin from "@/models/Admin";
import bcrypt from "bcryptjs";
import { revalidatePath } from "next/cache";

/**
 * Fetch all admins for the management table
 * Note: We exclude passwords from the results for security.
 */
export async function getAllAdmins() {
  try {
    await dbConnect();
    const admins = await Admin.find({}, "email role createdAt")
      .sort({ createdAt: -1 })
      .lean();
    return JSON.parse(JSON.stringify(admins));
  } catch (error) {
    console.error("Error fetching admins:", error);
    return [];
  }
}

/**
 * Create a new admin
 * Note: Only 'admin' role is given by default.
 */
export async function createNewAdmin(email, password) {
  try {
    await dbConnect();

    // 1. Check if user already exists
    const existingAdmin = await Admin.findOne({ email });
    if (existingAdmin)
      return { error: "An admin with this email already exists." };

    // 2. Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // 3. Create the record
    await Admin.create({
      email,
      password: hashedPassword,
      role: "admin", // Hardcoded to prevent role-escalation attacks from frontend
    });

    revalidatePath("/admin/profile");
    return { success: true };
  } catch (error) {
    console.error("Create Admin Error:", error);
    return { error: "Internal server error while creating admin." };
  }
}

/**
 * Update an admin's password
 * Can be used by Super Admin to reset anyone's pass or own pass.
 */
export async function updateAdminPassword(adminId, newPassword) {
  try {
    await dbConnect();

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(newPassword, salt);

    const result = await Admin.findByIdAndUpdate(adminId, {
      password: hashedPassword,
    });

    if (!result) return { error: "Admin not found." };

    return { success: true };
  } catch (error) {
    console.error("Update Password Error:", error);
    return { error: "Failed to update password." };
  }
}

/**
 * Delete an admin account
 * Critical: Prevents deletion of Super Admins.
 */
export async function deleteAdminAccount(adminId) {
  try {
    await dbConnect();

    const targetAdmin = await Admin.findById(adminId);
    if (!targetAdmin) return { error: "Admin not found." };

    // Security Gate: Do not allow deletion of any superadmin
    if (targetAdmin.role === "superadmin") {
      return {
        error: "For security reasons, Super Admin accounts cannot be deleted.",
      };
    }

    await Admin.findByIdAndDelete(adminId);

    revalidatePath("/admin/profile");
    return { success: true };
  } catch (error) {
    console.error("Delete Admin Error:", error);
    return { error: "Failed to delete account." };
  }
}
