export default function robots() {
  const baseUrl = "https://enviridianlegal.com";

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/admin", // Prevents search engines from indexing your dashboard
          "/api", // Keeps your internal API routes private
          "/_next", // Standard Next.js internal files
        ],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
