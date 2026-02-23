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
  title: "AntsMicro - Complete IT Solutions for Business",
  description:
    "AntsMicro provides complete IT solutions including advanced antivirus protection, remote monitoring and support, and professional installation services.",
  applicationName: "AntsMicro",
  keywords: [
    "AntsMicro",
    "IT solutions",
    "business IT support",
    "antivirus protection",
    "remote monitoring",
    "professional installation service",
    "IT services Singapore",
    "IT services Malaysia",
  ],
  openGraph: {
    title: "AntsMicro - Complete IT Solutions for Business",
    description:
      "Advanced antivirus protection, remote monitoring & support, and professional IT installation services for modern businesses.",
    images: [{ url: ogImageUrl }],
  },
  twitter: {
    card: "summary_large_image",
    title: "AntsMicro - Complete IT Solutions for Business",
    description:
      "Advanced antivirus protection, remote monitoring & support, and professional IT installation services for modern businesses.",
    images: [ogImageUrl],
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
