import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Hammad Ahmed Riaz | Full Stack & AI Engineer",
    short_name: "Hammad Riaz",
    description: "Full Stack Engineer & AI Application Developer building production-grade web and AI products.",
    start_url: "/",
    display: "standalone",
    background_color: "#07070b",
    theme_color: "#07070b",
    icons: [{ src: "/icon.svg", sizes: "any", type: "image/svg+xml" }],
  };
}
