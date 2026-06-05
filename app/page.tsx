"use client";

import { useState } from "react";
import { CommandPalette } from "@/components/layout/command-palette";
import { ScrollProgress } from "@/components/layout/scroll-progress";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { AboutSection } from "@/components/sections/about-section";
import { AchievementsSection } from "@/components/sections/achievements-section";
import { BlogSection } from "@/components/sections/blog-section";
import { ContactSection } from "@/components/sections/contact-section";
import { BuildingSection } from "@/components/sections/building-section";
import { ExperienceSection } from "@/components/sections/experience-section";
import { GithubSection } from "@/components/sections/github-section";
import { HeroSection } from "@/components/sections/hero-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { SkillsSection } from "@/components/sections/skills-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";

export default function Home() {
  const [paletteOpen, setPaletteOpen] = useState(false);

  return (
    <main className="relative overflow-hidden">
      <ScrollProgress />
      <CommandPalette open={paletteOpen} setOpen={setPaletteOpen} />
      <SiteHeader onOpenCommandPalette={() => setPaletteOpen(true)} />

      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <BuildingSection />
      <ProjectsSection />
      <ExperienceSection />
      <BlogSection />
      <GithubSection />
      <AchievementsSection />
      <TestimonialsSection />
      <ContactSection />

      <SiteFooter />
    </main>
  );
}
