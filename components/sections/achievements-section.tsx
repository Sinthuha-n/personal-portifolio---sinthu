import { Award } from "lucide-react";
import { SectionHeader } from "@/components/common/section-header";
import { Card } from "@/components/ui";
import { certifications } from "@/data/portfolio";

export function AchievementsSection() {
  return (
    <section id="achievements" className="px-4 py-24 sm:px-6 lg:px-8">
      <SectionHeader eyebrow="Achievements" title="Credentials that support the story." copy="Certificate cards highlight focused learning in frontend development, SQL, API fundamentals, and problem solving." />
      <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-2 lg:grid-cols-4">
        {certifications.map((item) => (
          <Card key={item} className="p-5">
            <Award className="h-6 w-6 text-primary" />
            <h3 className="mt-6 font-semibold">{item}</h3>
            <p className="mt-2 text-sm text-muted-foreground">Verified learning milestone with practical project relevance.</p>
          </Card>
        ))}
      </div>
    </section>
  );
}
