"use server";

import { v2 as cloudinary } from "cloudinary";
import slugify from "slugify";
import matter from "gray-matter";

import dbConnect from "@/lib/dbConnect";
import Blog from "@/models/Blog";

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function getAllBlogs({
  page = 1,
  limit = 10,
  status = null, // Change: Default to null to see ALL blogs (drafts + published)
  category = null, // Change: Added category filter support
  search = null, // Change: Added search support for the Admin dashboard
}) {
  await dbConnect();
  const skip = (page - 1) * limit;

  // 1. Build the Query Object
  const query = {};

  // If a specific status is passed (e.g. "draft"), use it. Otherwise, get all.
  if (status) query.status = status;
  if (category) query.category = category;

  // 2. Admin Search Logic (Title, Excerpt, Content)
  if (search) {
    query.$or = [
      { title: { $regex: search, $options: "i" } },
      { excerpt: { $regex: search, $options: "i" } },
      { content: { $regex: search, $options: "i" } },
    ];
  }

  // 3. Execution
  const [blogs, total] = await Promise.all([
    Blog.find(query)
      .sort({ createdAt: -1 }) // Admin usually wants newest created first
      .skip(skip)
      .limit(limit)
      .lean()
      .select("-__v")
      .exec(),
    Blog.countDocuments(query),
  ]);

  // 4. Clean Data for Client Components
  const cleanBlogs = blogs.map((blog) => {
    const { _id, createdAt, updatedAt, publishedAt, ...rest } = blog;

    return {
      id: _id.toString(),
      ...rest,
      createdAt: createdAt ? new Date(createdAt).toISOString() : null,
      updatedAt: updatedAt ? new Date(updatedAt).toISOString() : null,
      publishedAt: publishedAt ? new Date(publishedAt).toISOString() : null,
    };
  });

  return {
    blogs: cleanBlogs,
    total,
    page,
    limit,
    hasMore: skip + limit < total,
  };
}

export async function getAllBlogsForPublic({
  page = 1,
  limit = 9,
  status = "published",
  category = null,
  search = null,
}) {
  await dbConnect();
  const skip = (page - 1) * limit;

  const query = { status };
  if (category) query.category = category;

  // 🔥 Search in title, excerpt, content
  if (search) {
    query.$or = [
      { title: { $regex: search, $options: "i" } },
      { excerpt: { $regex: search, $options: "i" } },
      { content: { $regex: search, $options: "i" } },
    ];
  }

  const [blogs, total] = await Promise.all([
    Blog.find(query)
      .sort({ publishedAt: -1, createdAt: -1 })
      .skip(skip)
      .limit(limit)
      .lean()
      .select("-__v")
      .exec(),
    Blog.countDocuments(query),
  ]);

  const cleanBlogs = blogs.map((blog) => {
    const { _id, createdAt, updatedAt, publishedAt, ...rest } = blog;
    return {
      id: _id.toString(),
      ...rest,
      createdAt: createdAt ? new Date(createdAt).toISOString() : null,
      updatedAt: updatedAt ? new Date(updatedAt).toISOString() : null,
      publishedAt: publishedAt ? new Date(publishedAt).toISOString() : null,
    };
  });

  return {
    blogs: cleanBlogs,
    total,
    page,
    limit,
    hasMore: skip + limit < total,
  };
}

export async function getBlogById(id) {
  await dbConnect();
  const blog = await Blog.findById(id).lean().select("-__v").exec();

  if (!blog) return null;

  // 🔥 NUCLEAR CLEANUP (same as getAllBlogs)
  const { _id, createdAt, updatedAt, publishedAt, ...rest } = blog;

  return {
    id: _id.toString(), // ✅ String ID
    ...rest,
    createdAt: createdAt ? new Date(createdAt).toISOString() : null,
    updatedAt: updatedAt ? new Date(updatedAt).toISOString() : null,
    publishedAt: publishedAt ? new Date(publishedAt).toISOString() : null,
  };
}

export async function getBlogBySlug(slug) {
  await dbConnect();
  const blog = await Blog.findOne({ slug, status: "published" })
    .lean() // 🔥 CRITICAL: Convert to plain JS object
    .select("-__v")
    .exec();

  if (!blog) return null;

  // 🔥 NUCLEAR CLEANUP - Same as getAllBlogs & getBlogById
  const { _id, createdAt, updatedAt, publishedAt, ...rest } = blog;

  return {
    id: _id.toString(), // ObjectId → string
    ...rest,
    createdAt: createdAt ? new Date(createdAt).toISOString() : null,
    updatedAt: updatedAt ? new Date(updatedAt).toISOString() : null,
    publishedAt: publishedAt ? new Date(publishedAt).toISOString() : null,
  };
}

export async function createBlogAction(prevState, formData) {
  try {
    await dbConnect();

    const title = formData.get("title");
    const category = formData.get("category");
    const author = formData.get("author");
    const excerpt = formData.get("excerpt");
    const content = formData.get("content");
    const status = formData.get("status") || "draft";
    const coverFile = formData.get("coverImage");

    if (!title || !category || !author || !content) {
      return {
        success: false,
        message: "Title, category, author, and content are required",
      };
    }

    // Generate slug
    const slug = slugify(title, { lower: true });

    // Check slug uniqueness
    const existingBlog = await Blog.findOne({ slug });
    if (existingBlog) {
      return {
        success: false,
        message: `Slug "${slug}" already exists. Please change the title.`,
      };
    }

    // Upload cover image to Cloudinary
    let coverImage = "";
    if (coverFile && coverFile.size > 0) {
      const bytes = await coverFile.arrayBuffer();
      const buffer = Buffer.from(bytes);

      const result = await new Promise((resolve, reject) => {
        cloudinary.uploader
          .upload_stream(
            {
              folder: process.env.CLOUDINARY_FOLDER_NAME,
              transformation: [{ quality: "auto", fetch_format: "auto" }],
            },
            (error, result) => {
              if (error) reject(error);
              else resolve(result);
            },
          )
          .end(buffer);
      });

      coverImage = result.secure_url;
    }

    // Generate frontmatter + content
    const frontmatter = {
      title,
      category,
      author,
      date: new Date().toISOString(),
      image: coverImage || "",
    };

    const markdownContent = matter.stringify(content, frontmatter);

    // Create blog
    const blog = await Blog.create({
      title,
      slug,
      category,
      author,
      excerpt: excerpt || content.slice(0, 160) + "...",
      coverImage,
      content: markdownContent,
      status,
      ...(status === "published" && { publishedAt: new Date() }),
    });

    return {
      success: true,
      message: `Blog "${title}" ${
        status === "published" ? "published" : "saved as draft"
      } successfully!`,
      // blogId: blog._id,
      blogId: slug,
    };
  } catch (error) {
    console.error("Create blog error:", error);
    return { success: false, message: "Server error occurred" };
  }
}

export async function updateBlogAction(prevState, formData, id) {
  try {
    await dbConnect();

    const title = formData.get("title");
    const category = formData.get("category");
    const author = formData.get("author");
    const excerpt = formData.get("excerpt");
    const content = formData.get("content");
    const status = formData.get("status") || "draft";
    const coverFile = formData.get("coverImage");

    if (!title || !category || !author || !content) {
      return {
        success: false,
        message: "Title, category, author, and content are required",
      };
    }

    const slug = slugify(title, { lower: true });

    // Check slug uniqueness (exclude current blog)
    const existingBlog = await Blog.findOne({ slug, _id: { $ne: id } }).lean();
    if (existingBlog) {
      return {
        success: false,
        message: `Slug "${slug}" already exists. Please change the title.`,
      };
    }

    let coverImage = "";
    // Get existing blog to preserve current image if no new upload
    const existing = await Blog.findById(id).lean();
    coverImage = existing?.coverImage || "";

    // Handle new cover image upload
    if (coverFile && coverFile.size > 0) {
      const bytes = await coverFile.arrayBuffer();
      const buffer = Buffer.from(bytes);

      const result = await new Promise((resolve, reject) => {
        cloudinary.uploader
          .upload_stream(
            {
              folder: process.env.CLOUDINARY_FOLDER_NAME,
              transformation: [{ quality: "auto", fetch_format: "auto" }],
            },
            (error, result) => {
              if (error) reject(error);
              else resolve(result);
            },
          )
          .end(buffer);
      });

      coverImage = result.secure_url;
    }

    const frontmatter = {
      title,
      category,
      author,
      date: new Date().toISOString(),
      image: coverImage,
    };

    const markdownContent = matter.stringify(content, frontmatter);

    // 🔥 MANUAL UPDATE - No Mongoose document returned
    const updateData = {
      title,
      slug,
      category,
      author,
      excerpt: excerpt || content.slice(0, 160) + "...",
      coverImage,
      content: markdownContent,
      status,
      ...(status === "published" &&
        !existing?.publishedAt && { publishedAt: new Date().toISOString() }),
      updatedAt: new Date().toISOString(),
    };

    await Blog.findByIdAndUpdate(id, updateData);

    return {
      success: true,
      message: `Blog "${title}" updated successfully!`,
      blogId: id, // ✅ Plain string ID
    };
  } catch (error) {
    console.error("Update blog error:", error);
    return { success: false, message: "Server error occurred" };
  }
}

export async function deleteBlogAction(id) {
  try {
    await dbConnect();

    const blog = await Blog.findById(id);
    if (!blog) {
      return { success: false, message: "Blog not found" };
    }

    // TODO: Delete Cloudinary image (optional)
    await Blog.findByIdAndDelete(id);

    return { success: true, message: "Blog deleted successfully" };
  } catch (error) {
    console.error("Delete blog error:", error);
    return { success: false, message: "Server error occurred" };
  }
}
