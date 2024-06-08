"use client";

import { Button, Navbar, NavbarBrand, NavbarContent, NavbarItem, Popover, PopoverContent, PopoverTrigger } from "@nextui-org/react";
import NextLink from "next/link";
import Image from "next/image";
import { techAcademyLogo } from "#/assets";
import { useTheme } from "next-themes";
import { CheckIcon, MonitorIcon, MoonIcon, SunIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { capitalize } from "@nextui-org/shared-utils";

export function Header() {
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState<boolean>(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <Navbar>
      <NavbarBrand>
        <NextLink href="/" aria-label="base route">
          <Image src={techAcademyLogo} alt="tech academy logo" priority className="h-8 w-auto [filter:drop-shadow(0_0_5px_white)]" />
        </NextLink>
      </NavbarBrand>

      <NavbarContent justify="end">
        <NavbarItem>
          {isMounted && (
            <Popover placement="bottom-end" isOpen={isOpen} onOpenChange={setIsOpen}>
              <PopoverTrigger>
                <Button aria-label="theme trigger" isIconOnly radius="full" className="[&_svg]:size-5">
                  {theme === "light" ? <SunIcon /> : theme === "dark" ? <MoonIcon /> : <MonitorIcon />}
                </Button>
              </PopoverTrigger>
              <PopoverContent>
                <div className="flex w-32 flex-col">
                  {["light", "dark", "system"].map((mode) => (
                    <Button
                      key={mode}
                      variant="light"
                      size="sm"
                      className="justify-between"
                      endContent={mode === theme && <CheckIcon className="size-4" />}
                      onPress={() => {
                        setTheme(mode);
                        setIsOpen(false);
                      }}
                    >
                      {capitalize(mode)}
                    </Button>
                  ))}
                </div>
              </PopoverContent>
            </Popover>
          )}
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
