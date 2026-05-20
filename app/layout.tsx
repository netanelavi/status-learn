import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { Heebo, Frank_Ruhl_Libre } from "next/font/google";
import { ThemeProvider } from "@/components/layout/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import "./globals.css";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://status-learn.vercel.app";
const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID ?? "GTM-WG47ML4Q";

const heebo = Heebo({
  variable: "--font-heebo",
  subsets: ["hebrew", "latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const frankRuhl = Frank_Ruhl_Libre({
  variable: "--font-frank-ruhl",
  subsets: ["hebrew", "latin"],
  weight: ["400", "500", "700", "900"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Status Learn — קורס שיווק WhatsApp Status לעסקים",
    template: "%s | Status Learn",
  },
  description:
    "קורס שיווק מקיף לבניית מותג אישי חזק דרך WhatsApp Status. 37 שיעורים בעברית, מסגרות מוכחות, וכלים מעשיים להפוך צופים ללקוחות. מתאים לעצמאים ובעלי עסקים.",
  keywords: [
    "שיווק ווטסאפ סטטוס",
    "WhatsApp Status שיווק",
    "בניית מותג אישי",
    "קורס שיווק דיגיטלי",
    "שיווק בוואטסאפ לעסקים",
    "וואטסאפ שיווק עברית",
    "קורס מותג אישי",
    "תוכן לוואטסאפ",
    "שיווק לעצמאים",
    "בניית קהל בוואטסאפ",
    "קורס שיווק ברשתות חברתיות",
    "WhatsApp marketing Hebrew",
    "status marketing course",
    "digital marketing Israel",
    "personal branding Israel",
  ],
  authors: [{ name: "Status Learn" }],
  creator: "Status Learn",
  publisher: "Status Learn",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "he_IL",
    url: BASE_URL,
    siteName: "Status Learn",
    title: "Status Learn — קורס שיווק WhatsApp Status לעסקים",
    description:
      "37 שיעורים שיהפכו את ה-WhatsApp Status שלך למנוע לידים. מ-viewer ל-brand — בעברית, Mobile-first.",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Status Learn — קורס שיווק WhatsApp Status",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Status Learn — קורס שיווק WhatsApp Status לעסקים",
    description:
      "37 שיעורים שיהפכו את ה-WhatsApp Status שלך למנוע לידים. מ-viewer ל-brand — בעברית.",
    images: ["/images/og-image.png"],
  },
  alternates: {
    canonical: BASE_URL,
    languages: {
      "he-IL": BASE_URL,
    },
  },
  verification: {
    google: "UQI8HshDWqQIYAuWl2MILDquZOzWwjREJDxAI4dhbgQ",
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Status Learn",
  url: BASE_URL,
  description: "קורס שיווק WhatsApp Status לעסקים ועצמאים בישראל",
  inLanguage: "he-IL",
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Status Learn",
  url: BASE_URL,
  inLanguage: "he-IL",
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${BASE_URL}/courses`,
    },
    "query-input": "required name=search_term_string",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="he"
      dir="rtl"
      className={`${heebo.variable} ${frankRuhl.variable} h-full`}
      suppressHydrationWarning
    >
      <head>
        {GTM_ID && (
          <Script
            id="gtm-script"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`,
            }}
          />
        )}
      </head>
      <body className="min-h-full bg-background text-foreground antialiased">
        {GTM_ID && (
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            />
          </noscript>
        )}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
          <Toaster position="top-center" richColors />
        </ThemeProvider>
      </body>
    </html>
  );
}
