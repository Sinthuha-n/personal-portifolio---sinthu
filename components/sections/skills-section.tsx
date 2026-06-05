"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/common/section-header";
import { Card } from "@/components/ui";
import { skills } from "@/data/portfolio";

export function SkillsSection() {
  return (
    <section id="skills" className="bg-muted/45 px-4 py-24 sm:px-6 lg:px-8">
      <SectionHeader eyebrow="Skills" title="Practical skills across the stack." copy="Grouped skill cards combine engineering fundamentals with the tools needed to build, test, and ship full stack applications." />
      <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-2 lg:grid-cols-3">
        {skills.map((group) => (
          <Card key={group.group} className="p-5 transition hover:-translate-y-1 hover:shadow-glow">
            <h3 className="mb-5 text-lg font-semibold">{group.group}</h3>
            <div className="space-y-4">
              {group.items.map(([name, value]) => (
                <div key={name}>
                  <div className="mb-2 flex justify-between text-sm"><span>{name}</span><span className="text-muted-foreground">{value}%</span></div>
                  <div className="h-2 rounded-full bg-muted"><motion.div initial={{ width: 0 }} whileInView={{ width: `${value}%` }} viewport={{ once: true }} transition={{ duration: 1 }} className="h-full rounded-full bg-gradient-to-r from-sky-500 via-emerald-400 to-rose-400" /></div>
                </div>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
