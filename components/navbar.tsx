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
} from "@nextui-org/react";
import { siteConfig } from "@/config/site";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { WebsiteIcon } from "./icons";

export const Navbar = () => {
  const currentNav = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <NextUINavbar
      maxWidth="xl"
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent className="lg:hidden" justify="start">
        <NavbarMenuToggle />
        <Brand />
      </NavbarContent>

      <NavbarContent className="hidden lg:flex" justify="center">
        <Brand />
      </NavbarContent>

      <NavbarContent
        className="hidden w-full lg:gap-12 lg:flex"
        justify="center"
      >
        {siteConfig.navItems
          .filter((item) => !["home", "contact", "blog"].includes(item.id))
          .map((item) => (
            <NavbarItem key={item.href}>
              <NavLink
                setIsMenuOpen={setIsMenuOpen}
                currentNav={currentNav}
                href={item.href}
                label={item.label}
                id={`nav-${item.id}`}
              />
            </NavbarItem>
          ))}
      </NavbarContent>

      <NavbarContent justify="end" className="hidden sm:flex">
        <NavbarItem>
          <Button
            color="primary"
            radius="full"
            as={Link}
            href="/contact"
            id="contact-nav"
          >
            Request a FREE Trial Lesson
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {siteConfig.navItems
          .filter((item) => !["home", "contact", "blog"].includes(item.id))
          .map((item) => (
            <NavbarMenuItem key={item.href}>
              <NavLink
                setIsMenuOpen={setIsMenuOpen}
                currentNav={currentNav}
                href={item.href}
                label={item.label}
                id={`nav-${item.id}`}
              />
            </NavbarMenuItem>
          ))}
        <NavbarMenuItem className="sm:hidden">
          <NavLink
            setIsMenuOpen={setIsMenuOpen}
            currentNav={currentNav}
            href="/contact"
            label="Request a FREE Trial Lesson"
            id="contact-nav"
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
        className="pt-[3px]"
      >
        <WebsiteIcon id="nav-home" />
      </Link>
    </NavbarBrand>
  );
};

type NavLinkProps = {
  href: string;
  currentNav: string;
  label: string;
  id: string;
  setIsMenuOpen: (isMenuOpen: boolean) => void;
};

const NavLink = (props: NavLinkProps) => {
  return (
    <Link
      color={props.currentNav === props.href ? "secondary" : "foreground"}
      href={props.href}
      onPress={() => props.setIsMenuOpen(false)}
      id={props.id}
    >
      {props.label}
    </Link>
  );
};
