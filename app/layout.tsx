import type { Metadata } from "next";
import { Manrope, Sora } from "next/font/google";
import "./globals.css";

const ogImageUrl =
  "https://ubyttekkpuihhbkogznd.supabase.co/storage/v1/object/public/avatars/pggrapl%20(1).png";

const displayFont = Sora({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const bodyFont = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "SQLBots - AI-Powered SQL Security Testing Platform",
  description: "Automated SQL injection scanning, dumping and validation powered by AI engines.",
  openGraph: {
    title: "SQLBots - AI-Powered SQL Security Testing Platform",
    description: "Automated SQL injection scanning, dumping and validation powered by AI engines.",
    images: [{ url: ogImageUrl }],
  },
  twitter: {
    card: "summary_large_image",
    title: "SQLBots - AI-Powered SQL Security Testing Platform",
    description: "Automated SQL injection scanning, dumping and validation powered by AI engines.",
    images: [ogImageUrl],
  },
  icons: {
    icon: "/icon.svg?v=2",
    shortcut: "/icon.svg?v=2",
    apple: "/icon.svg?v=2",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${displayFont.variable} ${bodyFont.variable} light-theme antialiased`}>
        {children}
      </body>
    </html>
  );
}
