import { ArrowRight } from "lucide-react";
import { SectionHeader } from "@/components/common/section-header";
import { Badge, Card } from "@/components/ui";
import { timelineItems } from "@/data/portfolio";

export function ExperienceSection() {
  return (
    <section id="experience" className="bg-muted/30 px-4 py-16 sm:px-6 lg:px-8">
      <SectionHeader
        eyebrow="Journey Timeline"
        title="A software engineering path with momentum."
        copy="Certifications, coursework, API practice, and project work are framed as a clear progression toward internship-ready engineering."
      />
      <div className="mx-auto max-w-5xl">
        <div className="relative grid gap-4">
          <div className="absolute left-5 top-6 hidden h-[calc(100%-48px)] w-px bg-border md:block" />
          {timelineItems.map(([date, title, copy], index) => (
            <Card key={title} className="relative grid gap-4 p-5 md:grid-cols-[120px_1fr] md:pl-16">
              <div className="absolute left-3 top-6 hidden h-4 w-4 rounded-full border border-primary bg-background md:block" />
              <div>
                <Badge>{date}</Badge>
              </div>
              <div>
                <h3 className="text-xl font-semibold">{title}</h3>
                <p className="mt-2 leading-7 text-muted-foreground">{copy}</p>
                {index === timelineItems.length - 1 ? (
                  <div className="mt-4 flex items-center gap-2 text-sm font-medium text-primary">Ready for internship teams <ArrowRight className="h-4 w-4" /></div>
                ) : null}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
