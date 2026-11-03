const legacyRoutes = [
  ["index.html", "/"],
  ["about.html", "/about"],
  ["work.html", "/work"],
  ["programs.html", "/programs"],
  ["insights.html", "/insights"],
  ["contact.html", "/contact"],
];

/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return legacyRoutes.map(([source, destination]) => ({
      source: `/${source}`,
      destination,
      permanent: true,
    }));
  },
};

export default nextConfig;
