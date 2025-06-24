import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import ConditionalLayout from '@/components/layout/ConditionalLayout';
import { Toaster } from '@/components/ui/sonner';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Mañez Advocacia & Consultoria',
  description: 'Escritório de advocacia especializado em soluções jurídicas personalizadas e eficazes.',
  icons: {
    icon: '/favicon_io/favicon.ico',
  },
  openGraph: {
    title: 'Mañez Advocacia & Consultoria',
    description: 'Soluções jurídicas personalizadas e eficazes para você e sua empresa.',
    url: 'https://manezadvocacia.vercel.app/',
    type: 'website',
    images: [
      {
        url: 'https://manezadvocacia.vercel.app/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Logo da Mañez Advocacia',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <ConditionalLayout>
          {children}
        </ConditionalLayout>
        <Toaster />
      </body>
    </html>
  );
}