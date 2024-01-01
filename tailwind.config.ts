import type { Config } from 'tailwindcss';
import { nextui } from '@nextui-org/react';

const config: Config = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {},
  plugins: [
    nextui({
      defaultTheme: 'dark',
      addCommonColors: true,
      themes: {
        light: {
          colors: {
            background: '#FFFFFF', // or DEFAULT F4F4F5
            foreground: '#11181C', // or 50 to 900 DEFAULT
            primary: {
              DEFAULT: '#18181b',
              foreground: '#fafafa',
            },
            secondary: {
              foreground: '#18181b',
              DEFAULT: '#f4f4f5',
            },
            muted: {
              foreground: '#71717A',
              DEFAULT: '#F4F4F5',
            },
            // ... rest of the colors
          },
        },
        dark: {
          colors: {
            background: '#000000', // or DEFAULT
            foreground: '#ECEDEE', // or 50 to 900 DEFAULT
            primary: {
              DEFAULT: '#fafafa',
              foreground: '#18181b',
            },
            secondary: {
              foreground: '#fafafa',
              DEFAULT: '#18181b',
            },
            muted: {
              foreground: '#A1A1AA',
              DEFAULT: '#27272A',
            },
          },
          // ... rest of the colors
        },
      },
    }),
  ],
};
export default config;
