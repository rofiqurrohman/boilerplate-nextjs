'use client';

import NextLink from 'next/link';
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from '@nextui-org/react';
import { useSelector } from 'react-redux';
import { ReduxState } from '@/containers';
import NavbarSwitchTheme from '@/components/buttons/switch-theme';
import NavbarAuthententicatedUser from './authenticated-user';

export default function NextUINavbar() {
  const { isLoggedIn } = useSelector((state: ReduxState) => state.root);

  return (
    <Navbar
      isBordered
      className="bg-yellow-400 border-b-2 border-slate-800 dark:bg-slate-800 dark:border-yellow-400"
    >
      <NavbarContent justify="start">
        <NavbarBrand
          className="mr-4 font-extrabold text-black dark:text-white cursor-pointer"
          as={NextLink}
          href={'/'}
        >
          Brand Name
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex gap-3">
          <NavbarItem>
            <Link href="/page/about" aria-current="page" color="secondary">
              Testimonial
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link href="/page/about" aria-current="page" color="secondary">
              About
            </Link>
          </NavbarItem>
        </NavbarContent>
      </NavbarContent>
      <NavbarContent as="div" className="items-center" justify="end">
        <NavbarItem>
          <NavbarSwitchTheme />
        </NavbarItem>
        {isLoggedIn ? (
          <NavbarAuthententicatedUser />
        ) : (
          <NavbarItem as={Button} variant="flat">
            <Link color="foreground" href="/sign-in" as={NextLink}>
              Sign In
            </Link>
          </NavbarItem>
        )}
      </NavbarContent>
    </Navbar>
  );
}
