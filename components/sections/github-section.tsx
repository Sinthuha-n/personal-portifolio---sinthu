import { CheckCircle2, Code2, ExternalLink, Github, Sparkles, Users } from "lucide-react";
import { SectionHeader } from "@/components/common/section-header";
import { Badge, Button, Card } from "@/components/ui";
import { githubActivity, githubProfile, githubRepos } from "@/data/portfolio";
import { cn } from "@/lib/utils";

export function GithubSection() {
  return (
    <section id="github" className="bg-muted/45 px-4 py-24 sm:px-6 lg:px-8">
      <SectionHeader eyebrow="GitHub" title="Open engineering activity at a glance." copy="A profile-focused view of Sinthuha's public GitHub presence, recent repositories, contribution rhythm, and project activity." />
      <div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-[1.2fr_0.8fr]">
        <Card className="p-6">
          <div className="mb-6 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <a href={githubProfile.url} target="_blank" rel="noreferrer" className="flex items-center gap-4 rounded-lg p-1 transition hover:bg-muted">
              <img src={githubProfile.avatar} alt={`${githubProfile.name} GitHub avatar`} className="h-16 w-16 rounded-lg border border-border object-cover" />
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-xl font-semibold">{githubProfile.name}</h3>
                  <ExternalLink className="h-4 w-4 text-muted-foreground" />
                </div>
                <p className="text-sm text-muted-foreground">@{githubProfile.username}</p>
                <p className="mt-1 text-sm text-muted-foreground">{githubProfile.company} · {githubProfile.location}</p>
              </div>
            </a>
            <Button asChild variant="secondary">
              <a href={githubProfile.url} target="_blank" rel="noreferrer"><Github className="h-4 w-4" />Open Profile</a>
            </Button>
          </div>
          <p className="mb-6 leading-7 text-muted-foreground">{githubProfile.bio}</p>
          <div className="mb-6 grid gap-3 sm:grid-cols-4">
            {[["Repositories", githubProfile.repositories, Code2], ["Followers", githubProfile.followers, Users], ["Following", githubProfile.following, CheckCircle2], ["Recent Events", githubProfile.recentEvents, Sparkles]].map(([label, value, Icon]) => {
              const StatIcon = Icon as typeof Code2;
              return (
                <div key={label as string} className="rounded-lg border border-border bg-background p-4">
                  <StatIcon className="h-4 w-4 text-primary" />
                  <p className="mt-3 text-2xl font-semibold">{value as number}</p>
                  <p className="text-xs text-muted-foreground">{label as string}</p>
                </div>
              );
            })}
          </div>
          <div className="mb-5 flex items-center gap-3"><Github className="h-5 w-5" /><h3 className="text-xl font-semibold">Contribution Rhythm</h3></div>
          <div className="grid grid-cols-12 gap-2" aria-label="Visual GitHub contribution graph inspired by recent public activity">
            {Array.from({ length: 84 }).map((_, index) => {
              const active = [2, 3, 8, 14, 15, 16, 21, 27, 28, 29, 35, 42, 43, 44, 49, 50, 56, 61, 62, 63, 69, 70, 76, 77, 78, 82].includes(index);
              return <div key={index} className={cn("aspect-square rounded-sm", active ? "bg-emerald-400" : index % 11 === 0 ? "bg-sky-500/80" : "bg-muted")} />;
            })}
          </div>
        </Card>
        <div className="grid gap-5">
          <Card className="p-5">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="font-semibold">Public Repositories</h3>
              <Badge>{githubRepos.length} shown</Badge>
            </div>
            <div className="grid gap-3">
              {githubRepos.map((repo) => (
                <a key={repo.name} href={repo.url} target="_blank" rel="noreferrer" className="rounded-lg border border-border bg-background p-4 transition hover:border-primary/60 hover:bg-muted">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h4 className="font-semibold">{repo.name}</h4>
                      <p className="mt-2 text-sm leading-6 text-muted-foreground">{repo.description}</p>
                    </div>
                    <ExternalLink className="h-4 w-4 shrink-0 text-muted-foreground" />
                  </div>
                  <div className="mt-3 flex items-center justify-between text-xs text-muted-foreground">
                    <span>{repo.language}</span>
                    <span>{repo.updated}</span>
                  </div>
                </a>
              ))}
            </div>
          </Card>
          <Card className="p-5">
            <h3 className="mb-4 font-semibold">Recent Public Activity</h3>
            <div className="grid gap-3">
              {githubActivity.map((activity) => (
                <div key={activity} className="flex items-start gap-3 rounded-md bg-background p-3 text-sm">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span className="text-muted-foreground">{activity}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
