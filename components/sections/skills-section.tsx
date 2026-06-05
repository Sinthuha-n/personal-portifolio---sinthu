import { Code2, Database, GitBranch, Server } from "lucide-react";
import { SectionHeader } from "@/components/common/section-header";
import { Badge, Card } from "@/components/ui";
import { skillSystems } from "@/data/portfolio";

const skillIcons = [Code2, Server, Database, GitBranch];

export function SkillsSection() {
  return (
    <section id="skills" className="bg-muted/30 px-4 py-16 sm:px-6 lg:px-8">
      <SectionHeader
        eyebrow="Engineering Stack"
        title="Tools connected to real project work."
        copy="No artificial percentages. This stack is organized by how Sinthuha actually builds: product UI, backend APIs, data persistence, and engineering workflow."
      />
      <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-2">
        {skillSystems.map((system, index) => {
          const Icon = skillIcons[index] ?? Code2;
          return (
            <Card key={system.group} className="group p-5 transition duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-glow">
              <div className="mb-5 flex items-start gap-4">
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-lg border border-border bg-background text-primary transition group-hover:border-primary/60">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">{system.group}</h3>
                  <p className="mt-1 text-sm leading-6 text-muted-foreground">{system.focus}</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {system.tools.map((tool) => (
                  <Badge key={tool} className="bg-background text-foreground">{tool}</Badge>
                ))}
              </div>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
