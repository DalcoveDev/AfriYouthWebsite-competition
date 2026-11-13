import localFont from "next/font/local";
import Script from "next/script";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import SiteScripts from "@/components/SiteScripts";
import { SITE_URL } from "@/lib/metadata";
import "../styles/styles.css";

const poppins = localFont({
  src: [
    { path: "./fonts/poppins-400.woff2", weight: "400", style: "normal" },
    { path: "./fonts/poppins-500.woff2", weight: "500", style: "normal" },
    { path: "./fonts/poppins-600.woff2", weight: "600", style: "normal" },
    { path: "./fonts/poppins-700.woff2", weight: "700", style: "normal" },
    { path: "./fonts/poppins-800.woff2", weight: "800", style: "normal" },
  ],
  variable: "--font-poppins",
  display: "swap",
  preload: true,
  fallback: ["Segoe UI", "Helvetica Neue", "sans-serif"],
});

const jakarta = localFont({
  src: [
    { path: "./fonts/plus-jakarta-sans.woff2", weight: "200 800", style: "normal" },
  ],
  variable: "--font-jakarta",
  display: "swap",
  preload: true,
  fallback: ["Helvetica Neue", "Arial", "sans-serif"],
});

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "AfriYouth Innovation Labs — Fueling Innovators for Sustainable Development",
    template: "%s — AfriYouth Innovation Labs",
  },
  description:
    "AfriYouth Innovation Labs is a research, innovation and policy consultancy empowering Africa's youth to generate evidence, shape policy and build scalable solutions for the SDGs.",
  applicationName: "AfriYouth Innovation Labs",
  authors: [{ name: "AfriYouth Innovation Labs" }],
  alternates: { canonical: "/" },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
    shortcut: ["/favicon.svg"],
  },
  openGraph: {
    type: "website",
    siteName: "AfriYouth Innovation Labs",
    locale: "en_GB",
    url: "/",
    title: "AfriYouth Innovation Labs",
    description:
      "Fueling innovators for sustainable development. Research, policy, human-centred design and entrepreneurship for Africa's next generation.",
    images: [
      {
        url: "/assets/img/og-afriyouth.png",
        width: 1200,
        height: 630,
        alt: "AfriYouth Innovation Labs — Fueling Innovators for Sustainable Development",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AfriYouth Innovation Labs",
    description:
      "Fueling innovators for sustainable development. Research, policy, human-centred design and entrepreneurship for Africa's next generation.",
    images: ["/assets/img/og-afriyouth.png"],
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "AfriYouth Innovation Labs",
  url: SITE_URL,
  logo: `${SITE_URL}/brand/logo-mark.svg`,
  slogan: "Fueling Innovators for Sustainable Development",
  email: "hello@afriyouthlabs.org",
  description:
    "A youth-centred research, innovation and policy consultancy turning community-driven ideas into practical, scalable solutions across Africa.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Kigali",
    addressCountry: "RW",
  },
  areaServed: "Africa",
};

export const viewport = {
  themeColor: "#0D0624",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    /* suppressHydrationWarning: the inline js-flag script below swaps `no-js`
       for `js` before paint, so the client class intentionally differs from the
       server HTML. The body also tolerates attributes injected by extensions. */
    <html
      lang="en"
      className={`no-js ${poppins.variable} ${jakarta.variable}`}
      suppressHydrationWarning
    >
      <body suppressHydrationWarning>
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
        <div className="toast" role="status" aria-live="polite" data-toast></div>
        <SiteScripts />
        <Script id="js-flag" strategy="beforeInteractive">
          {"document.documentElement.classList.replace('no-js', 'js');"}
        </Script>
      </body>
    </html>
  );
}
