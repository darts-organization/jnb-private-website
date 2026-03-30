import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "JNB Private — The Private Side of Value",
    short_name: "JNB Private",
    description:
      "An independent firm operating as a family office, specialising in ultra-prime advisory and integrated asset management.",
    start_url: "/en",
    display: "standalone",
    background_color: "#f5eddf",
    theme_color: "#19281a",
    icons: [
      {
        src: "/favicon/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/favicon/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/favicon/favicon.svg",
        type: "image/svg+xml",
        purpose: "any",
      },
    ],
  };
}
