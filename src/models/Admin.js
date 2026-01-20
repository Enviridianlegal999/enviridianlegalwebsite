import mongoose from "mongoose";

const adminSchema = new mongoose.Schema(
  {
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, enum: ["admin", "superadmin"], default: "admin" },
  },
  { timestamps: true },
);

// Prevent model overwrite in dev or hot reload
const Admin = mongoose.models.Admin || mongoose.model("Admin", adminSchema);

export default Admin;
