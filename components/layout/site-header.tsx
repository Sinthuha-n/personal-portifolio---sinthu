"use client";

import { useEffect, useMemo, useState } from "react";
import { Command, Menu, Moon, Sun, X } from "lucide-react";
import { Button } from "@/components/ui";
import { useTheme } from "@/components/theme-provider";
import { navItems } from "@/data/portfolio";
import { cn } from "@/lib/utils";

type SiteHeaderProps = {
  onOpenCommandPalette: () => void;
};

export function SiteHeader({ onOpenCommandPalette }: SiteHeaderProps) {
  const { theme, toggleTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about");
  const navTargets = useMemo(() => navItems.map((item) => item.toLowerCase()), []);

  useEffect(() => {
    const sections = navTargets
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => Boolean(section));

    const updateActiveSection = () => {
      const currentSection = sections
        .map((section) => ({
          id: section.id,
          distance: Math.abs(section.getBoundingClientRect().top - 112)
        }))
        .sort((a, b) => a.distance - b.distance)[0];

      if (currentSection) {
        setActiveSection(currentSection.id);
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleEntry?.target.id) {
          setActiveSection(visibleEntry.target.id);
        }
      },
      {
        rootMargin: "-35% 0px -55% 0px",
        threshold: [0.08, 0.2, 0.4, 0.6]
      }
    );

    sections.forEach((section) => observer.observe(section));
    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, [navTargets]);

  return (
    <header className="fixed inset-x-0 top-0 z-30 border-b border-border/70 bg-background/75 backdrop-blur-xl">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8" aria-label="Main navigation">
        <a href="#home" className="flex items-center gap-2 font-semibold">
          <span className="grid h-8 w-8 place-items-center rounded-md bg-foreground text-sm text-background">SN</span>
          <span>Sinthuha Nadesan</span>
        </a>
        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => {
            const target = item.toLowerCase();
            const isActive = activeSection === target;

            return (
              <a
                key={item}
                href={`#${target}`}
                aria-current={isActive ? "page" : undefined}
                onClick={() => setActiveSection(target)}
                className={cn(
                  "relative rounded-md px-3 py-2 text-sm text-muted-foreground transition hover:bg-muted hover:text-foreground",
                  isActive && "bg-muted text-foreground after:absolute after:inset-x-3 after:bottom-1 after:h-0.5 after:rounded-full after:bg-primary"
                )}
              >
              {item}
              </a>
            );
          })}
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
          {navItems.map((item) => {
            const target = item.toLowerCase();
            const isActive = activeSection === target;

            return (
              <a
                key={item}
                href={`#${target}`}
                aria-current={isActive ? "page" : undefined}
                onClick={() => {
                  setActiveSection(target);
                  setMenuOpen(false);
                }}
                className={cn(
                  "block rounded-md px-3 py-3 text-sm text-muted-foreground hover:bg-muted hover:text-foreground",
                  isActive && "bg-muted font-medium text-foreground"
                )}
              >
              {item}
              </a>
            );
          })}
        </div>
      ) : null}
    </header>
  );
}
