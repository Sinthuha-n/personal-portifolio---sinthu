import { Activity, CheckCircle2, Code2, ExternalLink, Github, GitPullRequest, Sparkles } from "lucide-react";
import { SectionHeader } from "@/components/common/section-header";
import { Badge, Button, Card } from "@/components/ui";
import { githubActivity, githubProfile, pinnedRepositories } from "@/data/portfolio";
import { cn } from "@/lib/utils";

const activeCells = new Set([2, 3, 8, 14, 15, 16, 21, 27, 28, 29, 35, 42, 43, 44, 49, 50, 56, 61, 62, 63, 69, 70, 76, 77, 78, 82]);

export function GithubSection() {
  return (
    <section id="github" className="bg-muted/30 px-4 py-16 sm:px-6 lg:px-8">
      <SectionHeader
        eyebrow="GitHub"
        title="Public engineering activity, clearly organized."
        copy="A balanced view of contribution activity, repositories, and recent project work."
      />
      <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-2">
        <Card className="flex min-h-full flex-col border-primary/20 bg-card/90 p-6 md:p-7">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <a href={githubProfile.url} target="_blank" rel="noreferrer" className="flex items-center gap-4 rounded-lg transition hover:opacity-90">
              <img src={githubProfile.avatar} alt={`${githubProfile.name} GitHub avatar`} className="h-16 w-16 rounded-lg border border-border object-cover" />
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-2xl font-semibold">{githubProfile.name}</h3>
                  <ExternalLink className="h-4 w-4 text-muted-foreground" />
                </div>
                <p className="mt-1 text-sm text-muted-foreground">@{githubProfile.username}</p>
              </div>
            </a>
            <Button asChild variant="secondary">
              <a href={githubProfile.url} target="_blank" rel="noreferrer"><Github className="h-4 w-4" />GitHub</a>
            </Button>
          </div>

          <p className="mt-5 leading-7 text-muted-foreground">{githubProfile.bio}</p>

          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            {[
              ["Contributions", githubProfile.totalContributions, Activity],
              ["Repositories", githubProfile.repositories, Code2],
              ["Recent Activity", githubProfile.recentEvents, Sparkles]
            ].map(([label, value, Icon]) => {
              const StatIcon = Icon as typeof Activity;
              return (
                <div key={label as string} className="rounded-lg border border-border bg-background p-4">
                  <StatIcon className="h-4 w-4 text-primary" />
                  <p className="mt-3 text-2xl font-semibold">{value as string | number}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{label as string}</p>
                </div>
              );
            })}
          </div>

          <div className="mt-6 rounded-lg border border-border bg-background p-5">
            <div className="mb-5 flex items-start justify-between gap-4">
              <div>
                <h3 className="text-xl font-semibold">Contribution Activity</h3>
                <p className="mt-1 text-sm text-muted-foreground">Recent public activity visualized in a GitHub-style graph.</p>
              </div>
              <Badge>{githubProfile.totalContributions}</Badge>
            </div>
            <div className="grid grid-cols-12 gap-2 md:gap-2.5" aria-label="GitHub-style contribution graph">
              {Array.from({ length: 84 }).map((_, index) => (
                <div
                  key={index}
                  className={cn(
                    "aspect-square rounded-[3px] border border-white/5",
                    activeCells.has(index)
                      ? "bg-emerald-400 shadow-[0_0_18px_rgba(52,211,153,0.34)]"
                      : index % 11 === 0
                        ? "bg-sky-500/70"
                        : "bg-muted"
                  )}
                />
              ))}
            </div>
          </div>

          <div className="mt-6 flex-1 rounded-lg border border-border bg-background p-5">
            <h3 className="text-xl font-semibold">GitHub summary</h3>
            <div className="mt-4 grid gap-3">
              {[
                "Public repositories show full-stack, Java, TypeScript, and portfolio iteration work.",
                "Recent activity highlights pull request workflow and responsive UI improvements.",
                "Pinned projects connect learning progress with practical software engineering output."
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-lg border border-border bg-card p-4 text-sm">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span className="leading-6 text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </Card>

        <Card className="flex min-h-full flex-col border-primary/20 bg-card/90 p-6 md:p-7">
          <div className="mb-5 flex items-center justify-between gap-4">
            <div>
              <h3 className="text-2xl font-semibold">Pinned repositories</h3>
              <p className="mt-2 text-sm text-muted-foreground">Repositories that show current project direction and learning depth.</p>
            </div>
            <Badge>{pinnedRepositories.length} pinned</Badge>
          </div>

          <div className="grid gap-3">
            {pinnedRepositories.map((repo) => (
              <a key={repo.name} href={repo.url} target="_blank" rel="noreferrer" className="rounded-lg border border-border bg-background p-4 transition hover:border-primary/60 hover:bg-muted">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h4 className="font-semibold">{repo.name}</h4>
                    <p className="mt-2 line-clamp-2 text-sm leading-6 text-muted-foreground">{repo.description}</p>
                  </div>
                  <ExternalLink className="h-4 w-4 shrink-0 text-muted-foreground" />
                </div>
                <div className="mt-4 flex items-center justify-between text-xs text-muted-foreground">
                  <span>{repo.language}</span>
                  <span>{repo.updated}</span>
                </div>
              </a>
            ))}
          </div>

          <div className="mt-6 flex-1 rounded-lg border border-border bg-background p-5">
            <div className="mb-4 flex items-center gap-2">
              <GitPullRequest className="h-5 w-5 text-primary" />
              <h3 className="text-xl font-semibold">Recent projects</h3>
            </div>
            <div className="grid gap-3">
              {githubActivity.map((activity) => (
                <div key={activity} className="flex items-start gap-3 rounded-lg border border-border bg-card p-4 text-sm">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span className="leading-6 text-muted-foreground">{activity}</span>
                </div>
              ))}
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
