import type { Metadata } from "next";
import { Fraunces } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { SmoothScroll } from "@/components/SmoothScroll";
import { dental } from "@/lib/dental";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: `${dental.brand} — ${dental.role}`,
  description: dental.tagline,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <SmoothScroll />
        <div
          className="fixed inset-0 -z-20"
          style={{
            background:
              "radial-gradient(60% 50% at 15% 0%, rgba(143,222,211,0.25), transparent 60%), radial-gradient(50% 45% at 95% 10%, rgba(243,182,166,0.22), transparent 60%), var(--background)",
          }}
        />
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
