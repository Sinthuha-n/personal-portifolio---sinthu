import { ArrowUp } from "lucide-react";
import { Button } from "@/components/ui";

export function SiteFooter() {
  return (
    <>
      <footer className="border-t border-border px-4 py-8 text-center text-sm text-muted-foreground">
        <p>© 2026 Sinthuha Nadesan. Built with Next.js, React, TypeScript, Tailwind CSS, Framer Motion, and Lucide Icons.</p>
      </footer>

      <Button asChild size="icon" className="fixed bottom-5 right-5 z-30 shadow-lg" aria-label="Back to top">
        <a href="#home"><ArrowUp className="h-4 w-4" /></a>
      </Button>
    </>
  );
}
