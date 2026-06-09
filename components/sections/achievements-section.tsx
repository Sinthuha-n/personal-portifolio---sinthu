"use client";

import { useEffect, useState } from "react";
import { Award, CalendarDays, RotateCcw, ShieldCheck } from "lucide-react";
import { SectionHeader } from "@/components/common/section-header";
import { Badge } from "@/components/ui";
import { certifications } from "@/data/portfolio";
import { cn } from "@/lib/utils";

export function AchievementsSection() {
  const [flippedCards, setFlippedCards] = useState<Set<string>>(new Set());

  useEffect(() => {
    certifications.forEach((certificate) => {
      const image = new Image();
      image.src = certificate.image;
    });
  }, []);

  const toggleCard = (title: string) => {
    setFlippedCards((current) => {
      const next = new Set(current);

      if (next.has(title)) {
        next.delete(title);
      } else {
        next.add(title);
      }

      return next;
    });
  };

  return (
    <section id="achievements" className="px-4 py-16 sm:px-6 lg:px-8">
      <SectionHeader
        eyebrow="Achievements"
        title="Credentials that support the story."
        copy="Certificate cards highlight focused learning in frontend development, SQL, software engineering, API fundamentals, and AI foundations."
      />
      <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-2 xl:grid-cols-3">
        {certifications.map((certificate) => {
          const isFlipped = flippedCards.has(certificate.title);

          return (
            <button
              key={certificate.title}
              type="button"
              aria-pressed={isFlipped}
              aria-label={`${isFlipped ? "Hide" : "Show"} ${certificate.title} certificate`}
              onClick={() => toggleCard(certificate.title)}
              className="group h-[330px] rounded-lg text-left outline-none [perspective:1400px] focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background sm:h-[350px]"
            >
              <div
                className={cn(
                  "relative h-full rounded-lg transition duration-300 [transform-style:preserve-3d]",
                  isFlipped && "[transform:rotateY(180deg)]"
                )}
              >
                <div className="absolute inset-0 flex h-full flex-col overflow-hidden rounded-lg border border-border bg-card/90 p-5 text-card-foreground shadow-[0_18px_55px_rgba(15,23,42,0.10)] backdrop-blur-xl [backface-visibility:hidden] transition group-hover:-translate-y-1 group-hover:border-primary/50 group-hover:shadow-[0_24px_70px_rgba(15,23,42,0.14)] dark:shadow-sm">
                  <div className="flex items-start justify-between gap-4">
                    <div className="grid h-12 w-12 place-items-center rounded-lg border border-primary/25 bg-primary/10 text-primary">
                      <Award className="h-6 w-6" />
                    </div>
                    <Badge className="shrink-0 gap-1.5">
                      <CalendarDays className="h-3.5 w-3.5" />
                      {certificate.date}
                    </Badge>
                  </div>

                  <div className="mt-8">
                    <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">{certificate.issuer}</p>
                    <h3 className="mt-3 text-2xl font-semibold leading-tight">{certificate.title}</h3>
                    <p className="mt-4 leading-7 text-muted-foreground">{certificate.focus}</p>
                  </div>

                  <div className="mt-auto flex items-center justify-between border-t border-border pt-5">
                    <div className="flex items-center gap-2 text-sm font-medium text-foreground">
                      <ShieldCheck className="h-4 w-4 text-primary" />
                      Verified certificate
                    </div>
                    <RotateCcw className="h-4 w-4 text-muted-foreground transition group-hover:rotate-180 group-hover:text-primary" />
                  </div>
                </div>

                <div className="absolute inset-0 overflow-hidden rounded-lg border border-primary/25 bg-[#07111f] p-3 shadow-[0_24px_70px_rgba(15,23,42,0.18)] [backface-visibility:hidden] [transform:rotateY(180deg)] dark:shadow-[0_24px_90px_rgba(0,0,0,0.32)]">
                  <div className="flex h-full flex-col rounded-md border border-white/10 bg-white p-2">
                    <div className="mb-2 flex items-center justify-between gap-3 px-1 text-xs font-medium text-slate-600">
                      <span className="truncate">{certificate.title}</span>
                      <RotateCcw className="h-3.5 w-3.5 shrink-0" />
                    </div>
                    <div className="min-h-0 flex-1 overflow-hidden rounded border border-slate-200 bg-slate-50">
                      <img
                        src={certificate.image}
                        alt={`${certificate.title} certificate`}
                        className="h-full w-full object-contain"
                        loading="eager"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </section>
  );
}
