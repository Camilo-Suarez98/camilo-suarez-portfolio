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
  icons: {
    icon: [
      {
        url: '/icon-portfolio.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-portfolio.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon-portfolio.png',
        type: 'image/png',
      },
    ],
    apple: '/apple-icon.png',
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
