"use client";

import { useState } from "react";
import { ArrowRight, ExternalLink, Github, Layers3, Smartphone, X } from "lucide-react";
import { SectionHeader } from "@/components/common/section-header";
import { Badge, Button, Card } from "@/components/ui";
import { featuredProject, supportingProjects } from "@/data/portfolio";

function PlanoraMockup() {
  return (
    <div className="relative min-h-[340px] overflow-hidden rounded-lg border border-white/10 bg-[#070b13] p-4 shadow-2xl">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(56,189,248,0.18),transparent_28%),radial-gradient(circle_at_80%_30%,rgba(52,211,153,0.12),transparent_30%)]" />
      <div className="relative rounded-lg border border-white/10 bg-white/[0.04] p-4">
        <div className="mb-4">
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-sky-300">Planora</p>
            <h3 className="mt-1 text-xl font-semibold text-white">Kanban Board</h3>
          </div>
        </div>
        <div className="grid gap-3 md:grid-cols-3">
          {[
            ["Backlog", "API auth flow", "Timeline schema"],
            ["In Progress", "Kanban states", "Task priority"],
            ["Review", "PostgreSQL relations", "Task comments"]
          ].map(([column, ...tasks]) => (
            <div key={column} className="rounded-lg border border-white/10 bg-black/25 p-3">
              <p className="mb-3 text-sm font-medium text-white">{column}</p>
              <div className="space-y-2">
                {tasks.map((task) => (
                  <div key={task} className="rounded-md border border-white/10 bg-white/[0.06] p-3">
                    <div className="mb-2 h-1.5 w-16 rounded-full bg-gradient-to-r from-sky-400 to-emerald-300" />
                    <p className="text-sm text-slate-100">{task}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="relative mt-4 grid gap-3 md:grid-cols-[1fr_170px]">
        <div className="rounded-lg border border-white/10 bg-white/[0.04] p-4">
          <div className="mb-4 flex items-center gap-2 text-sm font-medium text-white"><Layers3 className="h-4 w-4 text-sky-300" /> Timeline Tracking</div>
          <div className="space-y-3">
            {["Planning", "Development", "Review"].map((item, index) => (
              <div key={item} className="flex items-center gap-3">
                <div className="h-2 flex-1 rounded-full bg-white/10"><div className="h-full rounded-full bg-gradient-to-r from-sky-400 to-emerald-300" style={{ width: `${86 - index * 18}%` }} /></div>
                <span className="w-24 text-xs text-slate-300">{item}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-[1.25rem] border border-white/10 bg-black p-2">
          <div className="rounded-[1rem] bg-white/[0.06] p-3">
            <div className="mb-3 flex items-center gap-2 text-xs text-slate-300"><Smartphone className="h-3.5 w-3.5 text-emerald-300" /> Mobile</div>
            {["My Tasks", "Board", "Timeline"].map((item) => <div key={item} className="mb-2 rounded-md bg-white/[0.08] px-3 py-2 text-xs text-white">{item}</div>)}
          </div>
        </div>
      </div>
    </div>
  );
}

export function ProjectsSection() {
  const [caseStudyOpen, setCaseStudyOpen] = useState(false);
  const standoutAchievement = featuredProject.achievements[0];
  const featuredLinks = featuredProject.links as Partial<Record<"github" | "demo", string>>;

  return (
    <section id="projects" className="px-4 py-16 sm:px-6 lg:px-8">
      <SectionHeader
        eyebrow="Projects"
        title="Focused project evidence."
        copy="A simplified recruiter-facing view: what was built, why it matters, the core stack, and where to inspect the work."
      />
      <div className="mx-auto max-w-7xl">
        <Card className="overflow-hidden border-primary/20 bg-card/90 shadow-[0_24px_90px_rgba(0,0,0,0.26)]">
          <div className="grid gap-0 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="p-6 md:p-8">
              <Badge className="mb-5">{featuredProject.status}</Badge>
              <h3 className="text-4xl font-semibold tracking-normal">{featuredProject.name}</h3>
              <p className="mt-3 text-lg font-medium text-primary">{featuredProject.subtitle}</p>
              <p className="mt-5 max-w-2xl leading-8 text-muted-foreground">{featuredProject.summary}</p>

              <div className="mt-6 rounded-lg border border-border bg-background p-4">
                <p className="text-sm font-medium text-foreground">Standout achievement</p>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">{standoutAchievement}</p>
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {featuredProject.tech.map((tech) => <Badge key={tech} className="bg-background text-foreground">{tech}</Badge>)}
              </div>

              <div className="mt-7 flex flex-wrap gap-3">
                {featuredLinks.github ? (
                  <Button asChild><a href={featuredLinks.github} target="_blank" rel="noreferrer"><Github className="h-4 w-4" />GitHub</a></Button>
                ) : null}
                {featuredLinks.demo ? (
                  <Button asChild variant="secondary"><a href={featuredLinks.demo} target="_blank" rel="noreferrer"><ExternalLink className="h-4 w-4" />Live Demo</a></Button>
                ) : null}
                <Button type="button" variant="ghost" onClick={() => setCaseStudyOpen(true)}>View Case Study<ArrowRight className="h-4 w-4" /></Button>
              </div>
            </div>
            <div className="border-t border-border bg-[#05070c] p-4 lg:border-l lg:border-t-0">
              <PlanoraMockup />
            </div>
          </div>
        </Card>

        <div className="mt-5 grid gap-4 lg:grid-cols-2">
          {supportingProjects.map((project) => (
            <Card key={project.name} className="flex min-h-full flex-col p-6 transition hover:-translate-y-1 hover:border-primary/50">
              <p className="text-sm font-medium text-primary">{project.subtitle}</p>
              <h3 className="mt-2 text-2xl font-semibold">{project.name}</h3>
              <p className="mt-3 leading-7 text-muted-foreground">{project.description}</p>
              <div className="mt-5 rounded-lg border border-border bg-background p-4">
                <p className="text-sm font-medium text-foreground">Standout achievement</p>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">{project.impact}</p>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">{project.tech.map((tech) => <Badge key={tech}>{tech}</Badge>)}</div>
              <div className="mt-auto flex flex-wrap gap-3 pt-6">
                <Button asChild variant="secondary"><a href={project.github} target="_blank" rel="noreferrer"><Github className="h-4 w-4" />GitHub</a></Button>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {caseStudyOpen ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 px-4 py-6 backdrop-blur-xl" role="dialog" aria-modal="true" aria-labelledby="planora-case-study">
          <Card className="max-h-[88vh] w-full max-w-4xl overflow-y-auto border-primary/30 bg-card p-5 shadow-[0_30px_120px_rgba(0,0,0,0.55)] md:p-7">
            <div className="flex items-start justify-between gap-4">
              <div>
                <Badge>{featuredProject.status}</Badge>
                <h3 id="planora-case-study" className="mt-4 text-3xl font-semibold">Planora case study</h3>
                <p className="mt-3 max-w-2xl leading-7 text-muted-foreground">{featuredProject.problem}</p>
              </div>
              <button
                type="button"
                onClick={() => setCaseStudyOpen(false)}
                className="rounded-md border border-border bg-background p-2 text-muted-foreground transition hover:border-primary hover:text-foreground"
                aria-label="Close case study"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {featuredProject.metrics.map(([value, label]) => (
                <div key={label} className="rounded-lg border border-border bg-background p-4">
                  <p className="text-2xl font-semibold text-foreground">{value}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{label}</p>
                </div>
              ))}
            </div>

            <div className="mt-7 grid gap-5 lg:grid-cols-2">
              <div className="rounded-lg border border-border bg-background p-5">
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">Challenges solved</p>
                <div className="mt-4 space-y-3">
                  {featuredProject.challenges.map((challenge) => (
                    <p key={challenge} className="rounded-md border border-border bg-card px-4 py-3 text-sm leading-6 text-muted-foreground">{challenge}</p>
                  ))}
                </div>
              </div>
              <div className="rounded-lg border border-border bg-background p-5">
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">Technical direction</p>
                <div className="mt-4 space-y-3">
                  {featuredProject.achievements.slice(1).map((achievement) => (
                    <p key={achievement} className="rounded-md border border-border bg-card px-4 py-3 text-sm leading-6 text-muted-foreground">{achievement}</p>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-7 flex flex-wrap gap-3">
              {featuredLinks.github ? (
                <Button asChild><a href={featuredLinks.github} target="_blank" rel="noreferrer"><Github className="h-4 w-4" />Inspect Repository</a></Button>
              ) : null}
              {featuredLinks.demo ? (
                <Button asChild variant="secondary"><a href={featuredLinks.demo} target="_blank" rel="noreferrer"><ExternalLink className="h-4 w-4" />Open Demo</a></Button>
              ) : null}
            </div>
          </Card>
        </div>
      ) : null}
    </section>
  );
}
