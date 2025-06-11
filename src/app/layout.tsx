import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster'; // Added Toaster for potential notifications

export const metadata: Metadata = {
  title: 'QuickSave - Private WhatsApp Status Saver',
  description: 'Download QuickSave to easily save and manage WhatsApp status photos and videos directly to your device. Privacy-focused, no data collection, local storage. Available on Google Play.',
  keywords: ['WhatsApp Status Saver', 'QuickSave', 'Save Status', 'Privacy', 'Local Storage', 'Android App'],
  openGraph: {
    title: 'QuickSave - Private WhatsApp Status Saver',
    description: 'Easily save WhatsApp statuses. Privacy first. Download on Google Play.',
    type: 'website',
    url: 'https://quicksave.app', // Replace with actual domain
    images: [
      {
        url: 'https://placehold.co/1200x630.png?text=QuickSave+App', // Replace with actual OG image
        width: 1200,
        height: 630,
        alt: 'QuickSave App Showcase',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'QuickSave - Private WhatsApp Status Saver',
    description: 'Save WhatsApp statuses privately and securely. Get QuickSave on Google Play!',
    images: ['https://placehold.co/1200x630.png?text=QuickSave+App'], // Replace with actual Twitter image
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=PT+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased"> {/* Removed 'dark' class */}
        {children}
        <Toaster />
      </body>
    </html>
  );
}
