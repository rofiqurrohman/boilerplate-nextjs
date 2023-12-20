'use client';

import { Button, Tooltip } from '@nextui-org/react';
import { useTheme } from 'next-themes';

export default function NavbarSwitchTheme() {
  const { theme, setTheme } = useTheme();

  return (
    <Tooltip content={theme === 'light' ? 'Switch to dark' : 'Switch to light'}>
      <Button
        variant="flat"
        color="secondary"
        className="capitalize"
        onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      >
        Theme
      </Button>
    </Tooltip>
  );
}
