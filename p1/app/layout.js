import localFont from "next/font/local";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import Head from 'next/head';

// Load fonts locally
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

export const metadata = {
  title: "Onlymens",
  description: "For Men: Hot Girls, Hot Models, Sexy Models, Sexy Girls",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        {/* Metadata */}
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        
        <link rel="icon" href="onlymens\public\favicon.ico" />

        {/* Preload fonts for faster loading */}
        <link
          rel="preload"
          href="/fonts/GeistVF.woff"
          as="font"
          type="font/woff"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/GeistMonoVF.woff"
          as="font"
          type="font/woff"
          crossOrigin="anonymous"
        />
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
