import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/components/LanguageProvider";

export const metadata: Metadata = {
  title: "Virtual Gravity",
  description:
    "Reliable digital services focused on quality, strategy, and measurable results.",
  icons: {
    icon: "/images/favicon.svg",
  },
  openGraph: {
    title: "Virtual Gravity",
    description:
      "Reliable digital services focused on quality, strategy, and measurable results.",
    url: "https://virtual-gravity.net/",
    type: "website",
    images: [
      {
        url: "https://virtual-gravity.net/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Virtual Gravity — From digital strategy to real results.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Virtual Gravity",
    description:
      "Reliable digital services focused on quality, strategy, and measurable results.",
    images: ["https://virtual-gravity.net/images/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html:
              "try{if(!matchMedia('(prefers-reduced-motion: reduce)').matches){document.documentElement.classList.add('anim')}}catch(e){}",
          }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://api.fontshare.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=IBM+Plex+Sans+Arabic:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://api.fontshare.com/v2/css?f[]=clash-display@300,400,500,600,700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
