import dbConnect from "@/lib/dbConnect";
import Blog from "@/models/Blog";

// 🔥 This tells Next.js to refresh the sitemap in the background
// every 1 hour (3600 seconds) if it's being visited.
export const revalidate = 3600;

export default async function sitemap() {
  const baseUrl = "https://enviridianlegal.com"; // Change to your live domain

  // 1. Define Static Routes
  const staticRoutes = [
    "",
    "/about",
    "/contact",
    "/practice-areas",
    "/process-and-approach",
    "/privacy-policy",
    "/terms-and-conditions",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "monthly",
    priority: route === "" ? 1.0 : 0.8,
  }));

  try {
    // 2. Connect to Database
    await dbConnect();

    // 3. Fetch Dynamic Blog Slugs
    // We only select 'slug' and 'updatedAt' for speed
    const blogs = await Blog.find({})
      .select("slug updatedAt")
      .sort({ updatedAt: -1 })
      .lean();

    const blogRoutes = blogs.map((post) => ({
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: post.updatedAt
        ? new Date(post.updatedAt).toISOString()
        : new Date().toISOString(),
      changeFrequency: "weekly",
      priority: 0.6,
    }));

    // 4. (Optional) Fetch Practice Areas if they are dynamic
    // const practiceAreas = await PracticeArea.find({}).select("slug").lean();
    // const practiceRoutes = ...

    return [...staticRoutes, ...blogRoutes];
  } catch (error) {
    console.error("Sitemap generation error:", error);
    // Return at least the static routes if the DB fails
    return staticRoutes;
  }
}
