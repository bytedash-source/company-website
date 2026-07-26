import type { Metadata } from "next";
import { Google_Sans, Google_Sans_Code } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";

// Design-direction font stack per product-requirement.md §5.3. Google Sans
// now ships on Google Fonts with a native Thai subset, so it covers both
// English UI/headline and Thai body copy in one family (resolves open
// question #12). Google Sans Code stands in for the technical-label stack
// ("Google Sans Mono" isn't published; Code is the closest published match).
const googleSans = Google_Sans({
  variable: "--font-sans",
  subsets: ["latin", "thai"],
  display: "swap",
});

const googleSansCode = Google_Sans_Code({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    template: "%s — BYTE DASH",
    default: "BYTE DASH — Digital product studio in Bangkok",
  },
  description:
    "BYTE DASH designs and builds mobile applications, web platforms, and user-centred systems for businesses building what comes next.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${googleSans.variable} ${googleSansCode.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-graphite text-ivory">
        <noscript>
          <style>{`[data-reveal]{opacity:1 !important;transform:none !important;}`}</style>
        </noscript>

        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[60] focus:bg-accent focus:px-4 focus:py-2 focus:text-ivory"
        >
          Skip to main content
        </a>

        <SiteHeader />
        <main id="main" className="flex-1">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
