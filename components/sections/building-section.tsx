import { ArrowUpRight, Blocks, BookOpen, Server } from "lucide-react";
import { SectionHeader } from "@/components/common/section-header";
import { Badge, Card } from "@/components/ui";
import { buildFocus } from "@/data/portfolio";

const icons = [Blocks, BookOpen, Server];

export function BuildingSection() {
  return (
    <section id="building" className="px-4 py-16 sm:px-6 lg:px-8">
      <SectionHeader
        eyebrow="What I'm Building"
        title="Current focus, clearly visible."
        copy="A quick view of where Sinthuha is investing engineering time right now: product systems, technical writing, and backend depth."
      />
      <div className="mx-auto grid max-w-7xl gap-4 lg:grid-cols-3">
        {buildFocus.map((item, index) => {
          const Icon = icons[index] ?? Blocks;
          return (
            <Card key={item.title} className="group p-6 transition hover:-translate-y-1 hover:border-primary/50">
              <div className="mb-8 flex items-center justify-between">
                <div className="grid h-11 w-11 place-items-center rounded-lg border border-border bg-background text-primary">
                  <Icon className="h-5 w-5" />
                </div>
                <ArrowUpRight className="h-5 w-5 text-muted-foreground transition group-hover:text-primary" />
              </div>
              <h3 className="text-2xl font-semibold">{item.title}</h3>
              <p className="mt-3 min-h-24 leading-7 text-muted-foreground">{item.detail}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {item.stack.map((tech) => <Badge key={tech}>{tech}</Badge>)}
              </div>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
