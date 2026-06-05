"use client";

import { useState } from "react";
import { Command, Menu, Moon, Sun, X } from "lucide-react";
import { Button } from "@/components/ui";
import { useTheme } from "@/components/theme-provider";
import { navItems } from "@/data/portfolio";

type SiteHeaderProps = {
  onOpenCommandPalette: () => void;
};

export function SiteHeader({ onOpenCommandPalette }: SiteHeaderProps) {
  const { theme, toggleTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-30 border-b border-border/70 bg-background/75 backdrop-blur-xl">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8" aria-label="Main navigation">
        <a href="#home" className="flex items-center gap-2 font-semibold">
          <span className="grid h-8 w-8 place-items-center rounded-md bg-foreground text-sm text-background">SN</span>
          <span>Sinthuha Nadesan</span>
        </a>
        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="rounded-md px-3 py-2 text-sm text-muted-foreground transition hover:bg-muted hover:text-foreground">
              {item}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" aria-label="Open command palette" onClick={onOpenCommandPalette}>
            <Command className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" aria-label="Toggle theme" onClick={toggleTheme}>
            {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden" aria-label="Open menu" onClick={() => setMenuOpen((current) => !current)}>
            {menuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </Button>
        </div>
      </nav>
      {menuOpen ? (
        <div className="border-t border-border bg-background px-4 py-3 md:hidden">
          {navItems.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setMenuOpen(false)} className="block rounded-md px-3 py-3 text-sm text-muted-foreground hover:bg-muted hover:text-foreground">
              {item}
            </a>
          ))}
        </div>
      ) : null}
    </header>
  );
}
