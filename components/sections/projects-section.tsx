import { ArrowRight, CheckCircle2, ExternalLink, Github, Layers3, Smartphone } from "lucide-react";
import { SectionHeader } from "@/components/common/section-header";
import { Badge, Button, Card } from "@/components/ui";
import { featuredProject, supportingProjects } from "@/data/portfolio";

function PlanoraMockup() {
  return (
    <div className="relative min-h-[420px] overflow-hidden rounded-lg border border-white/10 bg-[#070b13] p-4 shadow-2xl">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(56,189,248,0.18),transparent_28%),radial-gradient(circle_at_80%_30%,rgba(52,211,153,0.12),transparent_30%)]" />
      <div className="relative rounded-lg border border-white/10 bg-white/[0.04] p-4">
        <div className="mb-4 flex items-center justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-sky-300">Planora workspace</p>
            <h3 className="mt-1 text-xl font-semibold text-white">Sprint Board</h3>
          </div>
          <div className="rounded-md border border-emerald-400/30 bg-emerald-400/10 px-3 py-2 text-xs text-emerald-200">Sprint 03</div>
        </div>
        <div className="grid gap-3 md:grid-cols-3">
          {[
            ["Backlog", "API auth flow", "Timeline schema", "Mobile task view"],
            ["In Progress", "Kanban drag states", "Sprint analytics"],
            ["Review", "PostgreSQL relations", "Task comments"]
          ].map(([column, ...tasks]) => (
            <div key={column} className="rounded-lg border border-white/10 bg-black/25 p-3">
              <p className="mb-3 text-sm font-medium text-white">{column}</p>
              <div className="space-y-2">
                {tasks.map((task, index) => (
                  <div key={task} className="rounded-md border border-white/10 bg-white/[0.06] p-3">
                    <div className="mb-2 h-1.5 w-16 rounded-full bg-gradient-to-r from-sky-400 to-emerald-300" />
                    <p className="text-sm text-slate-100">{task}</p>
                    <p className="mt-2 text-xs text-slate-400">P{index + 1} · owner assigned</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="relative mt-4 grid gap-3 md:grid-cols-[1fr_180px]">
        <div className="rounded-lg border border-white/10 bg-white/[0.04] p-4">
          <div className="mb-4 flex items-center gap-2 text-sm font-medium text-white"><Layers3 className="h-4 w-4 text-sky-300" /> Timeline Tracking</div>
          <div className="space-y-3">
            {["Planning", "Development", "Review", "Release"].map((item, index) => (
              <div key={item} className="flex items-center gap-3">
                <div className="h-2 flex-1 rounded-full bg-white/10"><div className="h-full rounded-full bg-gradient-to-r from-sky-400 to-emerald-300" style={{ width: `${86 - index * 14}%` }} /></div>
                <span className="w-24 text-xs text-slate-300">{item}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-[1.25rem] border border-white/10 bg-black p-2">
          <div className="rounded-[1rem] bg-white/[0.06] p-3">
            <div className="mb-3 flex items-center gap-2 text-xs text-slate-300"><Smartphone className="h-3.5 w-3.5 text-emerald-300" /> Mobile App</div>
            {["My Tasks", "Sprint", "Timeline"].map((item) => <div key={item} className="mb-2 rounded-md bg-white/[0.08] px-3 py-2 text-xs text-white">{item}</div>)}
          </div>
        </div>
      </div>
    </div>
  );
}

export function ProjectsSection() {
  return (
    <section id="projects" className="px-4 py-16 sm:px-6 lg:px-8">
      <SectionHeader
        eyebrow="Featured Work"
        title="Project stories, not template cards."
        copy="The portfolio now leads with Planora as a recruiter-facing engineering case study: product problem, architecture direction, implementation scope, and visible interface thinking."
      />
      <div className="mx-auto max-w-7xl">
        <Card className="overflow-hidden border-primary/20 bg-card/90">
          <div className="grid gap-0 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="p-6 md:p-8 lg:p-10">
              <Badge className="mb-5">{featuredProject.status}</Badge>
              <h3 className="text-4xl font-semibold tracking-normal md:text-5xl">{featuredProject.name}</h3>
              <p className="mt-3 text-xl font-medium text-primary">{featuredProject.subtitle}</p>
              <p className="mt-5 max-w-2xl text-base leading-8 text-muted-foreground">{featuredProject.summary}</p>

              <div className="mt-7 grid gap-3 sm:grid-cols-4">
                {featuredProject.metrics.map(([value, label]) => (
                  <div key={label} className="rounded-lg border border-border bg-background p-4">
                    <p className="text-2xl font-semibold">{value}</p>
                    <p className="mt-1 text-xs text-muted-foreground">{label}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <h4 className="font-semibold">Engineering achievements</h4>
                <div className="mt-4 grid gap-3">
                  {featuredProject.achievements.map((item) => (
                    <div key={item} className="flex gap-3 text-sm leading-6 text-muted-foreground">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-7 flex flex-wrap gap-2">
                {featuredProject.tech.map((tech) => <Badge key={tech} className="bg-background text-foreground">{tech}</Badge>)}
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <Button asChild><a href={featuredProject.links.github} target="_blank" rel="noreferrer"><Github className="h-4 w-4" />GitHub</a></Button>
                <Button asChild variant="secondary"><a href={featuredProject.links.demo} target="_blank" rel="noreferrer"><ExternalLink className="h-4 w-4" />Live Demo</a></Button>
                <Button asChild variant="ghost"><a href={featuredProject.links.caseStudy} target="_blank" rel="noreferrer">Case Study<ArrowRight className="h-4 w-4" /></a></Button>
              </div>
            </div>
            <div className="border-t border-border bg-[#05070c] p-4 lg:border-l lg:border-t-0">
              <PlanoraMockup />
            </div>
          </div>
        </Card>

        <div className="mt-6 grid gap-4 lg:grid-cols-2">
          {supportingProjects.map((project) => (
            <Card key={project.name} className="p-6 transition hover:-translate-y-1 hover:border-primary/50">
              <p className="text-sm font-medium text-primary">{project.subtitle}</p>
              <h3 className="mt-2 text-2xl font-semibold">{project.name}</h3>
              <p className="mt-3 leading-7 text-muted-foreground">{project.description}</p>
              <div className="mt-5 grid gap-2">
                {project.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    {feature}
                  </div>
                ))}
              </div>
              <p className="mt-5 rounded-lg border border-border bg-background p-4 text-sm leading-6 text-muted-foreground">{project.impact}</p>
              <div className="mt-5 flex flex-wrap gap-2">{project.tech.map((tech) => <Badge key={tech}>{tech}</Badge>)}</div>
              <Button asChild variant="secondary" className="mt-6"><a href={project.github} target="_blank" rel="noreferrer"><Github className="h-4 w-4" />View repository</a></Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
