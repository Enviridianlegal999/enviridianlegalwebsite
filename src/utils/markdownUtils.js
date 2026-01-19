// --- HELPERS ---

/**
 * stripFrontmatter
 * Removes the YAML frontmatter block (everything between the first --- and ---)
 * so it doesn't render as plain text in the blog body.
 */
export const stripFrontmatter = (content) => {
  if (!content) return "";
  // Regex:
  // ^--- : start of the string with ---
  // [\s\S]*? : match any character (including newlines) non-greedily
  // --- : until the next ---
  return content.replace(/^---[\s\S]*?---/, "").trim();
};
