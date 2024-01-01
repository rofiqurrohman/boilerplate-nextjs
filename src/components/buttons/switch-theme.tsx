'use client';

import { Button, Tooltip } from '@nextui-org/react';
import { useTheme } from 'next-themes';
import { RiSunLine, RiMoonLine } from '@remixicon/react';

export default function NavbarSwitchTheme() {
  const { theme, setTheme } = useTheme();

  return (
    <Tooltip
      size="sm"
      content={theme === 'light' ? 'Switch to dark' : 'Switch to light'}
    >
      <Button
        size="sm"
        radius="full"
        isIconOnly
        variant="light"
        color="foreground"
        className=""
        onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      >
        {theme === 'light' ? <RiSunLine size={20} /> : <RiMoonLine size={20} />}
      </Button>
    </Tooltip>
  );
}
