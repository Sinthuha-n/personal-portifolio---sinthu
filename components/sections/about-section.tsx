import Image from "next/image";
import { BookOpen, GraduationCap, MapPin } from "lucide-react";
import { SectionHeader } from "@/components/common/section-header";
import { Card } from "@/components/ui";
import { timelineItems } from "@/data/portfolio";

export function AboutSection() {
  return (
    <section id="about" className="px-4 py-24 sm:px-6 lg:px-8">
      <SectionHeader eyebrow="About" title="A builder with strong product instincts." copy="Motivated IT undergraduate with a strong foundation in full-stack development, specializing in Java, Spring Boot, React, REST APIs, and database-backed application design." />
      <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <Card className="p-6">
          <div className="flex items-center gap-4">
            <Image src="/images/developer-avatar.png" alt="Profile image" width={96} height={96} unoptimized className="h-24 w-24 rounded-lg object-cover" />
            <div>
              <h3 className="text-2xl font-semibold">Sinthuha Nadesan</h3>
              <p className="mt-1 text-muted-foreground">Software Engineering Intern | IT Undergraduate</p>
            </div>
          </div>
          <div className="mt-6 grid gap-3 text-sm">
            {[[MapPin, "Location", "Colombo, Sri Lanka"], [GraduationCap, "Education", "BSc (Hons) Information Technology"], [BookOpen, "Languages", "English, Tamil (Native)"]].map(([Icon, label, value]) => {
              const ItemIcon = Icon as typeof MapPin;
              return <div key={label as string} className="flex items-center gap-3 rounded-md bg-muted p-3"><ItemIcon className="h-4 w-4 text-primary" /><span className="text-muted-foreground">{label as string}</span><span className="ml-auto font-medium">{value as string}</span></div>;
            })}
          </div>
        </Card>
        <div className="grid gap-4">
          {timelineItems.map(([year, title, copy]) => (
            <Card key={year} className="grid gap-2 p-5 sm:grid-cols-[96px_1fr]">
              <div className="text-sm font-semibold text-primary">{year}</div>
              <div><h3 className="font-semibold">{title}</h3><p className="mt-1 text-sm leading-6 text-muted-foreground">{copy}</p></div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
