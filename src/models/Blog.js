import mongoose from "mongoose";

const blogSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    category: { type: String, required: true },
    author: { type: String, required: true },
    excerpt: { type: String, maxlength: 160 },
    coverImage: { type: String }, // Cloudinary URL
    content: { type: String, required: true }, // Raw Markdown with frontmatter
    status: { type: String, enum: ["draft", "published"], default: "draft" },
    publishedAt: { type: Date },
  },
  { timestamps: true }
);

// Prevent model overwrite in dev or hot reload
const Blog = mongoose.models.Blog || mongoose.model("Blog", blogSchema);

export default Blog;
