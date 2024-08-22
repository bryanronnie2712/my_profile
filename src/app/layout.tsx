import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { GoogleAnalytics } from '@next/third-parties/google';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ronnie's Portfolio",
  description: "Built with NextJS & Material UI",
};

export default function RootLayout({children}: Readonly<{children: React.ReactNode;}>) {
  const API_Key = String(process.env.NEXT_PUBLIC_GA_ID)

  return (
    <html lang="en">
      <body suppressHydrationWarning={true} className={inter.className}>{children}</body>
      <GoogleAnalytics gaId={API_Key} />
    </html>
  );
}
