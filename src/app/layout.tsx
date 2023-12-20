import type { Metadata } from 'next';
import { defaultMetaData } from '@config';
import NextUINavbar from '@/components/navbars/nextui.navbar';
import Providers from './providers';

import './globals.css';

export const metadata: Metadata = {
  ...defaultMetaData,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning>
      <body className="min-h-screen">
        <Providers>
          <NextUINavbar />
          <main className="bg-blue-500 dark:bg-green-800 border-2 border-green-800 p-10">
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}
