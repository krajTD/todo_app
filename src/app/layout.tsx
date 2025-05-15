import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://krajtd.github.io/todo_app'),
  title: "Todo App",
  description: "A sleek, modern todo application built with Next.js, TypeScript, and Tailwind CSS",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Todo App",
    description: "A sleek, modern todo application built with Next.js, TypeScript, and Tailwind CSS",
    url: "https://krajtd.github.io/todo_app",
    siteName: "Todo App",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Todo App | Next.js",
    description: "A sleek, modern todo application built with Next.js, TypeScript, and Tailwind CSS",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-50 text-gray-900`}
      >
        {children}
      </body>
    </html>
  );
}