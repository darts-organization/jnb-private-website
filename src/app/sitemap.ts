import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://jnb-private.com";

  return [
    {
      url: `${baseUrl}/en`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
      alternates: {
        languages: {
          en: `${baseUrl}/en`,
          it: `${baseUrl}/it`,
        },
      },
    },
    {
      url: `${baseUrl}/it`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
      alternates: {
        languages: {
          en: `${baseUrl}/en`,
          it: `${baseUrl}/it`,
        },
      },
    },
    {
      url: `${baseUrl}/en/privacy-policy`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
      alternates: {
        languages: {
          en: `${baseUrl}/en/privacy-policy`,
          it: `${baseUrl}/it/privacy-policy`,
        },
      },
    },
    {
      url: `${baseUrl}/it/privacy-policy`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
      alternates: {
        languages: {
          en: `${baseUrl}/en/privacy-policy`,
          it: `${baseUrl}/it/privacy-policy`,
        },
      },
    },
  ];
}
