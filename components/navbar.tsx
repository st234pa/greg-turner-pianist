import {
  Button,
  Link,
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from '@nextui-org/react';
import { siteConfig } from '@/config/site';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export const Navbar = () => {
  const currentNav = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <NextUINavbar
      className="gap-0"
      maxWidth="xl"
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent
        className="sm:hidden"
        justify="start"
      >
        <NavbarMenuToggle />
        <Brand />
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex"
        justify="center"
      >
        <Brand />
        {siteConfig.navItems.map((item) => (
          <NavbarItem key={item.href}>
            <NavLink
              setIsMenuOpen={setIsMenuOpen}
              currentNav={currentNav}
              href={item.href}
              label={item.label}
            />
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarContent
        justify="end"
        className="hidden sm:flex"
      >
        <NavbarItem>
          <Button
            color="primary"
            radius="full"
            as={Link}
            href="/contact"
          >
            Contact
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {siteConfig.navItems.map((item) => (
          <NavbarMenuItem key={item.href}>
            <NavLink
              setIsMenuOpen={setIsMenuOpen}
              currentNav={currentNav}
              href={item.href}
              label={item.label}
            />
          </NavbarMenuItem>
        ))}
        <NavbarMenuItem>
          <NavLink
            setIsMenuOpen={setIsMenuOpen}
            currentNav={currentNav}
            href="/contact"
            label="Contact"
          />
        </NavbarMenuItem>
      </NavbarMenu>
    </NextUINavbar>
  );
};

type BrandProps = {
  onPress?: () => void;
};

const Brand = (props: BrandProps) => {
  return (
    <NavbarBrand>
      <Link
        href="/"
        onPress={props.onPress}
        color="foreground"
        size="lg"
        className="font-bold"
      >
        Greg Turner
      </Link>
    </NavbarBrand>
  );
};

type NavLinkProps = {
  href: string;
  currentNav: string;
  label: string;
  setIsMenuOpen: (isMenuOpen: boolean) => void;
};

const NavLink = (props: NavLinkProps) => {
  return (
    <Link
      color={props.currentNav === props.href ? 'secondary' : 'foreground'}
      href={props.href}
      onPress={() => props.setIsMenuOpen(false)}
    >
      {props.label}
    </Link>
  );
};
