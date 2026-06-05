import { BookOpen, Code2, GraduationCap, Languages, MapPin, Rocket, Smartphone, UserCheck } from "lucide-react";
import { SectionHeader } from "@/components/common/section-header";
import { Card } from "@/components/ui";

const summaryItems = [
  [Code2, "Full Stack Developer"],
  [Rocket, "Software Engineering Enthusiast"],
  [Smartphone, "Interested in Web & Mobile Development"],
  [BookOpen, "Passionate about building scalable applications"]
] as const;

const profileDetails = [
  [MapPin, "Location", "Colombo, Sri Lanka"],
  [GraduationCap, "Education", "BSc (Hons) in Information Technology\nUniversity of Moratuwa"],
  [Languages, "Languages", "English\nTamil"],
  [UserCheck, "Status", "Software Engineering Intern Candidate"]
] as const;

export function AboutSection() {
  return (
    <section id="about" className="px-4 py-16 sm:px-6 lg:px-8">
      <SectionHeader
        eyebrow="About"
        title="Focused on practical full-stack engineering."
        copy="A concise snapshot of Sinthuha's direction as a software engineering intern candidate."
      />
      <div className="mx-auto grid max-w-7xl items-stretch gap-6 lg:grid-cols-2">
        <Card className="flex h-full flex-col p-6 md:min-h-[460px] md:p-7">
          <h3 className="text-2xl font-semibold">Professional summary</h3>
          <p className="mt-3 max-w-2xl leading-7 text-muted-foreground">
            Full-stack developer and software engineering enthusiast interested in building scalable web and mobile applications.
          </p>
          <div className="mt-6 grid flex-1 gap-3 sm:grid-cols-2">
            {summaryItems.map(([Icon, label]) => (
              <div key={label} className="flex min-h-[96px] items-center gap-3 rounded-lg border border-border bg-background p-4">
                <Icon className="h-5 w-5 shrink-0 text-primary" />
                <span className="font-medium leading-6">{label}</span>
              </div>
            ))}
          </div>
        </Card>

        <Card className="flex h-full flex-col p-6 md:min-h-[460px] md:p-7">
          <h3 className="text-2xl font-semibold">Profile details</h3>
          <div className="mt-6 grid flex-1 gap-3">
            {profileDetails.map(([Icon, label, value]) => (
              <div key={label} className="grid min-h-[84px] gap-3 rounded-lg border border-border bg-background p-4 sm:grid-cols-[160px_1fr]">
                <div className="flex items-center gap-3 text-sm font-medium text-muted-foreground">
                  <Icon className="h-4 w-4 text-primary" />
                  {label}
                </div>
                <div className="whitespace-pre-line font-semibold leading-7 text-foreground">{value}</div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
}
