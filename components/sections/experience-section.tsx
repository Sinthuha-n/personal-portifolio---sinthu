import { SectionHeader } from "@/components/common/section-header";
import { Card } from "@/components/ui";
import { coursework } from "@/data/portfolio";

export function ExperienceSection() {
  return (
    <section id="experience" className="bg-muted/45 px-4 py-24 sm:px-6 lg:px-8">
      <SectionHeader eyebrow="Experience" title="Developer journey shaped by practice." copy="A focused timeline spanning university coursework, full-stack project work, certifications, teamwork, and software engineering fundamentals." />
      <div className="mx-auto grid max-w-5xl gap-4">
        {coursework.map((item, index) => (
          <Card key={item} className="flex items-center gap-4 p-5">
            <div className="grid h-10 w-10 shrink-0 place-items-center rounded-md bg-foreground text-background">{index + 1}</div>
            <div><h3 className="font-semibold">{item}</h3><p className="text-sm text-muted-foreground">Relevant coursework and project practice from the University of Moratuwa IT degree and BookNest team development.</p></div>
          </Card>
        ))}
      </div>
    </section>
  );
}
