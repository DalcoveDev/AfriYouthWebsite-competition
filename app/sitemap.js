import { SITE_URL } from "@/lib/metadata";

const routes = ["", "/about", "/work", "/programs", "/insights", "/contact"];

export default function sitemap() {
  return routes.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
