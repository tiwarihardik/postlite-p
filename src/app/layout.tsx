import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import SkeletonLoading from './loading'; // Import for loading fallback UI
import { Suspense } from 'react'; // Import for lazy loading components
import Link from "next/link";
// Importing custom fonts for the blog
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Postlite-P Blog",
  description: "A modern platform for your thoughts and stories. Powered by Next.js.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-gray-50 text-gray-800`}
      >
        {/* Top-level Suspense for page transitions and lazy-loaded content */}
        <Suspense fallback={<SkeletonLoading />}>
          <div id="postlite-p-container" className="flex flex-col min-h-screen bg-gradient-to-r from-blue-500 to-purple-600">
            {/* Header section for navigation and branding */}
            <header className="bg-white  p-4 shadow-lg  sticky top-0 z-10 shadow-lg">
              <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-3xl font-bold">Postlite-P</h1>
                <nav>
                  <Link href="/" className="mr-4 hover:underline">Home</Link>
                  <Link href="/about" className="hover:underline">About</Link>
                  <Link href="/contact" className="ml-4 hover:underline">Contact</Link>
                </nav>
              </div>
            </header>

            {/* Main content area */}
            <main className="flex-grow container mx-auto p-6 ">
              {children}
            </main>

            {/* Footer section */}
            <footer className=" text-white text-center p-4">
              <p>&copy; {new Date().getFullYear()} Postlite-P. All rights reserved.</p>
              <p className="text-sm mt-1">Crafted with Next.js and a passion for modern blogging.</p>
            </footer>
          </div>
        </Suspense>
      </body>
    </html>
  );
}
