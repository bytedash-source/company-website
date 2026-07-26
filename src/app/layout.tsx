import type { Metadata } from "next";
import { Geist, Geist_Mono, Noto_Sans_Thai } from "next/font/google";
import "./globals.css";

// Design-direction font stack is "Google Sans / Google Sans Thai" (see
// product-requirement.md §5.3) which is not published on Google Fonts.
// Geist / Geist Mono are the confirmed English/UI + technical-label
// fallbacks. Noto Sans Thai stands in for Google Sans Thai until a
// licensed alternative is confirmed (see open question #12).
const geistSans = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

const notoSansThai = Noto_Sans_Thai({
  variable: "--font-thai",
  subsets: ["thai", "latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "BYTE DASH — Digital Product Studio",
  description:
    "BYTE DASH ออกแบบและพัฒนา Mobile, Web และ UX/UI systems สำหรับธุรกิจที่ต้องการผลิตภัณฑ์ดิจิทัลที่รวดเร็ว ใช้งานง่าย และเติบโตได้",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="th"
      data-scroll-behavior="smooth"
      className={`${geistSans.variable} ${geistMono.variable} ${notoSansThai.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-graphite text-ivory">
        <noscript>
          <style>{`[data-reveal]{opacity:1 !important;transform:none !important;}`}</style>
        </noscript>
        {children}
      </body>
    </html>
  );
}
