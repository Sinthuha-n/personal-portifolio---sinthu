import { BriefcaseBusiness } from "lucide-react";
import { SectionHeader } from "@/components/common/section-header";
import { Card } from "@/components/ui";
import { testimonialRoles } from "@/data/portfolio";

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="bg-muted/45 px-4 py-16 sm:px-6 lg:px-8">
      <SectionHeader eyebrow="Testimonials" title="Ready for references as the journey grows." copy="A future-facing section for lecturers, mentors, team members, and managers to share concise feedback." />
      <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-2 lg:grid-cols-4">
        {testimonialRoles.map((role) => <Card key={role} className="p-5"><BriefcaseBusiness className="h-5 w-5 text-primary" /><h3 className="mt-5 font-semibold">{role}</h3><p className="mt-2 text-sm text-muted-foreground">Reference quote placeholder.</p></Card>)}
      </div>
    </section>
  );
}
