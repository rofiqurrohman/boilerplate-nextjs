import type { Metadata } from 'next';
import { defaultMetaData } from '@config';
import NextUINavbar from '@/components/navbars/nextui.navbar';
import Providers from './providers';
import { GTWalsheim } from '@/assets/fonts';

import '@/assets/style/app.scss';

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
      <body className={`min-h-screen ${GTWalsheim.className}`}>
        <Providers>
          <NextUINavbar />
          <main className="bg-background py-10 max-w-[1536px] px-10 lg:px-20 mx-auto ">
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}
