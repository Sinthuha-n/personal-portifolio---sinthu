import { ExternalLink, Star } from "lucide-react";
import { SectionHeader } from "@/components/common/section-header";
import { Badge, Button, Card } from "@/components/ui";
import { projects } from "@/data/portfolio";
import { cn } from "@/lib/utils";

export function ProjectsSection() {
  return (
    <section id="projects" className="px-4 py-24 sm:px-6 lg:px-8">
      <SectionHeader eyebrow="Projects" title="Project work with internship-ready depth." copy="Showcase cards are designed for recruiters to scan product scope, technical stack, and practical engineering decisions quickly." />
      <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-2">
        {projects.map((project) => (
          <Card key={project.name} className="overflow-hidden">
            <div className={cn("h-44 bg-gradient-to-br p-5", project.accent)}>
              <div className="grid h-full rounded-lg border border-white/30 bg-white/20 p-4 text-white backdrop-blur">
                <div className="flex items-center justify-between"><span className="font-semibold">{project.name}</span><Star className="h-4 w-4" /></div>
                <div className="mt-auto grid grid-cols-2 gap-2">{project.features.map((feature) => <span key={feature} className="rounded-md bg-black/20 px-3 py-2 text-xs">{feature}</span>)}</div>
              </div>
            </div>
            <div className="p-6">
              <p className="text-sm font-medium text-primary">{project.subtitle}</p>
              <h3 className="mt-2 text-2xl font-semibold">{project.name}</h3>
              <p className="mt-3 leading-7 text-muted-foreground">{project.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">{project.tech.map((tech) => <Badge key={tech}>{tech}</Badge>)}</div>
              <div className="mt-6 flex flex-wrap gap-3">{project.actions.map((action) => <Button key={action} variant={action === "Live Demo" ? "default" : "secondary"}><ExternalLink className="h-4 w-4" />{action}</Button>)}</div>
            </div>
          </Card>
        ))}
        {["AI Interview Coach", "Open Source Dashboard"].map((name) => (
          <Card key={name} className="grid min-h-72 place-items-center border-dashed p-6 text-center">
            <div><Badge>Coming Soon</Badge><h3 className="mt-4 text-2xl font-semibold">{name}</h3><p className="mt-2 text-muted-foreground">A future case study slot for deeper internship and open source work.</p></div>
          </Card>
        ))}
      </div>
    </section>
  );
}
