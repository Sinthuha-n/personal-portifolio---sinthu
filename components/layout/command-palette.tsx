"use client";

import { useEffect } from "react";
import { Command, Search, X } from "lucide-react";
import { Button } from "@/components/ui";

type CommandPaletteProps = {
  open: boolean;
  setOpen: (open: boolean) => void;
};

export function CommandPalette({ open, setOpen }: CommandPaletteProps) {
  useEffect(() => {
    const listener = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setOpen(!open);
      }
      if (event.key === "Escape") setOpen(false);
    };

    window.addEventListener("keydown", listener);
    return () => window.removeEventListener("keydown", listener);
  }, [open, setOpen]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-40 bg-background/70 p-4 backdrop-blur-xl" role="dialog" aria-modal="true">
      <div className="mx-auto mt-24 max-w-xl overflow-hidden rounded-lg border border-border bg-card shadow-2xl">
        <div className="flex items-center gap-3 border-b border-border px-4 py-3">
          <Search className="h-4 w-4 text-muted-foreground" />
          <input className="w-full bg-transparent text-sm outline-none" placeholder="Jump to a section or action" autoFocus />
          <Button variant="ghost" size="icon" aria-label="Close command palette" onClick={() => setOpen(false)}>
            <X className="h-4 w-4" />
          </Button>
        </div>
        <div className="p-2">
          {["Download Resume", "View Projects", "Read Blog", "Contact Sinthuha", "Open GitHub"].map((item) => (
            <button
              key={item}
              className="flex w-full items-center justify-between rounded-md px-3 py-3 text-left text-sm transition hover:bg-muted"
              onClick={() => setOpen(false)}
            >
              <span>{item}</span>
              <Command className="h-4 w-4 text-muted-foreground" />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
