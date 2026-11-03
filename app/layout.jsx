import localFont from "next/font/local";
import Script from "next/script";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import SiteScripts from "@/components/SiteScripts";
import { SITE_URL } from "@/lib/metadata";
import "../styles/styles.css";

const fraunces = localFont({
  src: [
    { path: "./fonts/fraunces-roman.woff2", weight: "300 700", style: "normal" },
    { path: "./fonts/fraunces-italic.woff2", weight: "300 700", style: "italic" },
  ],
  variable: "--font-fraunces",
  display: "swap",
  preload: true,
  fallback: ["Georgia", "serif"],
});

const instrumentSans = localFont({
  src: [
    { path: "./fonts/instrument-sans.woff2", weight: "400 700", style: "normal" },
    { path: "./fonts/instrument-sans-italic.woff2", weight: "400 700", style: "italic" },
  ],
  variable: "--font-instrument",
  display: "swap",
  preload: true,
  fallback: ["Helvetica Neue", "sans-serif"],
});

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "AfriYouth Innovation Labs — Evidence in motion. Youth in the lead.",
    template: "%s — AfriYouth Innovation Labs",
  },
  description:
    "AfriYouth Innovation Labs connects research, policy, human-centred design, entrepreneurship and foresight to turn young people's ideas into systems-level change across Africa.",
  applicationName: "AfriYouth Innovation Labs",
  authors: [{ name: "AfriYouth Innovation Labs" }],
  alternates: { canonical: "/" },
  icons: { icon: [{ url: "/favicon.svg", type: "image/svg+xml" }] },
  openGraph: {
    type: "website",
    siteName: "AfriYouth Innovation Labs",
    locale: "en_GB",
    url: "/",
    title: "AfriYouth Innovation Labs",
    description:
      "Africa's next chapter is youth-written. Explore our work, programmes and ways to collaborate.",
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
    title: "AfriYouth Innovation Labs",
    description:
      "Africa's next chapter is youth-written. Explore our work, programmes and ways to collaborate.",
    images: ["/assets/img/og-afriyouth.jpg"],
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "AfriYouth Innovation Labs",
  url: SITE_URL,
  logo: `${SITE_URL}/assets/img/og-afriyouth.jpg`,
  email: "hello@afriyouthlabs.org",
  description:
    "A youth-centred research, policy and innovation lab connecting evidence, design, entrepreneurship and foresight across Africa.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Kigali",
    addressCountry: "RW",
  },
  areaServed: "Africa",
};

export const viewport = {
  themeColor: "#f2ede2",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`no-js ${fraunces.variable} ${instrumentSans.variable}`}
    >
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <SiteHeader />
        {children}
        <SiteFooter />
        <div
          className="toast"
          role="status"
          aria-live="polite"
          data-toast
        ></div>
        <SiteScripts />
        <Script id="js-flag" strategy="beforeInteractive">
          {"document.documentElement.classList.replace('no-js', 'js');"}
        </Script>
      </body>
    </html>
  );
}
