'use client';

import { ThemeProvider } from 'next-themes';
import { NextUIProvider } from '@nextui-org/react';
import { ReduxProvider } from '@/containers';

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark">
      <ReduxProvider>
        <NextUIProvider>{children}</NextUIProvider>
      </ReduxProvider>
    </ThemeProvider>
  );
}
