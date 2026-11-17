export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "*",
      disallow: "/thank-you",
    },
    sitemap: "https://photooprps.com/sitemap.xml",
  };
}
