"use client";

import {
  Navbar as HeroUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@heroui/navbar";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import NextLink from "next/link";
import { usePathname } from "next/navigation";

import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";
import { GithubIcon, Logo } from "@/components/icons";

export const Navbar = () => {
  const pathname = usePathname();

  return (
    <HeroUINavbar maxWidth="sm" className="bg-transparent" position="sticky">
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand
          as="li"
          className="gap-3 max-w-fit shadow-2xl bg-transparent border border-border p-2 rounded-full"
        >
          <NextLink className="flex justify-start items-center gap-1" href="/">
            <Logo />
          </NextLink>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent justify="center">
        <ul className="hidden lg:flex shadow-2xl gap-6 border border-border rounded-full p-4 justify-center items-center">
          {siteConfig.navItems.map((item) => {
            const isActive = pathname === item.href;

            return (
              <NavbarItem key={item.href}>
                <NextLink
                  href={item.href}
                  className={
                    isActive
                      ? "text-background bg-foreground rounded-full px-4 py-1"
                      : ""
                  }
                >
                  {item.label}
                </NextLink>
              </NavbarItem>
            );
          })}
        </ul>
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        <NavbarItem className="hidden shadow-2xl sm:flex gap-2 bg-transparent border border-border p-4 rounded-full">
          <Link isExternal aria-label="Github" href={siteConfig.links.github}>
            <GithubIcon className="text-default-500" />
          </Link>
          <ThemeSwitch />
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        <Link isExternal aria-label="Github" href={siteConfig.links.github}>
          <GithubIcon className="text-default-500" />
        </Link>
        <ThemeSwitch />
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu>
        <div className="mx-4 my-4 flex h-screen flex-col justify-between">
          <ul className="flex w-full flex-col gap-2">
            {siteConfig.navItems.map((item, index) => {
              const isActive = pathname === item.href;

              return (
                <NavbarMenuItem key={`${item}-${index}`} className="">
                  <NextLink
                    href={item.href}
                    className={
                      isActive
                        ? "text-background w-[200px] bg-foreground rounded-full px-4 py-1"
                        : ""
                    }
                  >
                    {item.label}
                  </NextLink>
                </NavbarMenuItem>
              );
            })}
          </ul>

          <NavbarItem>
            <Button fullWidth radius="full" color="primary" variant="shadow">
              تماس با فروش
            </Button>
          </NavbarItem>
        </div>
      </NavbarMenu>
    </HeroUINavbar>
  );
};
