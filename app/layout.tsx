import Header from "@/components/header/index";
import Footer from "@/components/footer/index";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next.js by Vercel - The React",
  description: `Production grade React applications that scale. The world’s leading companies use Next.js by Vercel to build static and dynamic websites and web applications.`,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="/nextjs-logo-title.svg"
          type="svg"
          sizes=""
        />
      </head>
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
