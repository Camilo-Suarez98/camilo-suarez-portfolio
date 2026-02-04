import React from "react";
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';
import './globals.css';

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Camilo Suarez | Frontend Developer',
  description: 'Frontend Developer based in Bucaramanga, Colombia. Building scalable, user-centric web applications.',
  keywords: ['frontend', 'developer', 'web applications', 'Bucaramanga', 'Colombia'],
  openGraph: {
    title: 'Camilo Suarez | Frontend Developer',
    description: 'Frontend Developer based in Bucaramanga, Colombia. Building scalable, user-centric web applications.',
    type: 'website',
    locale: 'en',
    siteName: 'Camilo Suarez | Frontend Developer',
    images: [
      {
        url: '/opengraph-image.png',
        width: 1200,
        height: 630,
        alt: 'Camilo Suarez | Frontend Developer',
      },
    ],
  },
  icons: {
    icon: [
      {
        url: '/favicon.jpg',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/favicon.jpg',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/favicon.jpg',
        type: 'image/jpg',
      },
    ],
    apple: '/apple-icon.jpg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
};
