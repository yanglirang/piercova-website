import type { APIRoute } from "astro";

export const GET: APIRoute = () => {
  const body = [
    "User-agent: *",
    "Allow: /",
    "Disallow: /api/",
    "",
    "# AI Crawler Rules — 2026 GEO Best Practice",
    "User-agent: GPTBot",
    "Allow: /",
    "",
    "User-agent: ChatGPT-User",
    "Allow: /",
    "",
    "User-agent: anthropic-ai",
    "Allow: /",
    "",
    "User-agent: Claude-Web",
    "Allow: /",
    "",
    "User-agent: CCBot",
    "Allow: /",
    "",
    "User-agent: Google-Extended",
    "Allow: /",
    "",
    "User-agent: PerplexityBot",
    "Allow: /",
    "",
    "User-agent: Applebot-Extended",
    "Allow: /",
    "",
    "User-agent: Omgilibot",
    "Disallow: /",
    "",
    "User-agent: Omgili",
    "Disallow: /",
    "",
    "Sitemap: https://www.piercova.com/sitemap-index.xml",
  ].join("\n");

  return new Response(body, {
    status: 200,
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
};
