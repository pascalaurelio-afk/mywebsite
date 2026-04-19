import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Pascal Aurelio | Procurement Professional",
  description: "Results-driven procurement professional with expertise in vendor management, inventory control, and technical procurement lifecycles. Bachelor of Science in Civil Engineering.",
  openGraph: {
    title: "Pascal Aurelio | Procurement Professional",
    description: "Results-driven procurement professional with expertise in vendor management, inventory control, and technical procurement lifecycles.",
    url: "https://pascalaurelio.com",
    siteName: "Pascal Aurelio Portfolio",
    locale: "en_US",
    type: "website",
  },
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased dark`} suppressHydrationWarning>
      <body className="min-h-full flex flex-col font-sans selection:bg-primary/30 selection:text-primary">
        {children}
      </body>
    </html>
  );
}
