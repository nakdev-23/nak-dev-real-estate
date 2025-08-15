import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ClientWrapper from "@/components/ClientWrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "RealEstatePro by Nak Dev - Find Your Dream Property",
  description: "Find properties for sale and rent",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <ClientWrapper>
          <main className="flex-grow">{children}</main>
          <footer className="bg-gray-100 dark:bg-gray-900 py-8">
            <div className="container mx-auto px-4">
              <div className="text-center text-gray-600 dark:text-gray-400">
                <p>© 2025 RealEstatePro by Nak Dev. All rights reserved.</p>
              </div>
            </div>
          </footer>
        </ClientWrapper>
      </body>
    </html>
  );
}
