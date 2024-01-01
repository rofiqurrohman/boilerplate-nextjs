'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import NextLink from 'next/link';
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from '@nextui-org/react';
import { useSelector } from 'react-redux';
import { ReduxState } from '@/containers';
import NavbarSwitchTheme from '@/components/buttons/switch-theme';
import NavbarAuthententicatedUser from './authenticated-user';
import { menuItems } from './menu';

export default function NextUINavbar() {
  // const { isLoggedIn } = useSelector((state: ReduxState) => state.root);
  const router = useRouter();
  const isLoggedIn = false;
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  // const menuItems = [
  //   "Profile",
  //   "Dashboard",
  //   "Activity",
  //   "Analytics",
  //   "System",
  //   "Deployments",
  //   "My Settings",
  //   "Team Settings",
  //   "Help & Feedback",
  //   "Log Out",
  // ];

  return (
    <Navbar
      className="bg-background border-b-1 border-b-foreground/10 sm:px-6 lg:px-8"
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          className="sm:hidden"
        />
        <NavbarBrand as={NextLink} href={'/'}>
          <p className="font-bold text-inherit">BRAND</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {menuItems.map((item, index) => (
          <NavbarItem key={`${item.name}-${index}`}>
            <Link
              className={`menuItem ${item.isActive ? 'active' : ''}`}
              href={item.link}
            >
              {item.name}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem>
          <NavbarSwitchTheme />
        </NavbarItem>
        {isLoggedIn ? (
          <NavbarAuthententicatedUser />
        ) : (
          <Button
            radius="sm"
            size="sm"
            className="bg-primary text-primary-foreground text-sm font-medium rounded-md h-9"
            onClick={() => router.push('/sign-in')}
          >
            Login
          </Button>
        )}
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item.name}-${index}`}>
            <Link
              color={
                index === 2
                  ? 'primary'
                  : index === menuItems.length - 1
                    ? 'danger'
                    : 'foreground'
              }
              className="w-full"
              href="#"
              size="lg"
            >
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
