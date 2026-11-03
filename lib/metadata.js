const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://afriyouthlabs.org";

export function createMetadata({ title, description, openGraphDescription, path }) {
  const ogDescription = openGraphDescription || description;

  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description: ogDescription,
      url: path,
      siteName: "AfriYouth Innovation Labs",
      locale: "en_GB",
      type: "website",
      images: [
        {
          url: "/assets/img/og-afriyouth.jpg",
          width: 1200,
          height: 630,
          alt: "Young African creatives laughing together outdoors",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: ogDescription,
      images: ["/assets/img/og-afriyouth.jpg"],
    },
  };
}

export { SITE_URL };
