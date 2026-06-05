"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Download, Github, Linkedin, Sparkles } from "lucide-react";
import { Badge, Button } from "@/components/ui";
import { githubProfile, linkedinUrl } from "@/data/portfolio";

export function HeroSection() {
  return (
    <section id="home" className="mesh-bg relative px-4 pb-12 pt-24 sm:px-6 lg:px-8">
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,hsl(var(--border)/0.22)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.22)_1px,transparent_1px)] bg-[size:56px_56px]" />
      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
        <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="max-w-5xl">
          <Badge className="mb-6 gap-2"><Sparkles className="h-3.5 w-3.5" /> Software Engineering Intern Candidate</Badge>
          <h1 className="text-balance text-5xl font-semibold tracking-normal text-foreground sm:text-6xl lg:text-7xl">
            Sinthuha Nadesan
          </h1>
          <div className="mt-6 flex flex-wrap gap-3 text-sm font-medium text-muted-foreground sm:text-base">
            {["Software Engineering Intern", "Full Stack Developer", "University of Moratuwa Undergraduate"].map((item) => (
              <span key={item} className="rounded-md border border-border bg-card/80 px-4 py-2">{item}</span>
            ))}
          </div>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-muted-foreground">
            Full-stack developer focused on Java, Spring Boot, React, REST APIs, and clean product interfaces. I build practical web and mobile applications with attention to structure, usability, and reliable backend foundations.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild><a href="/resume.pdf" download><Download className="h-4 w-4" />Resume</a></Button>
            <Button asChild variant="secondary"><a href={githubProfile.url} target="_blank" rel="noreferrer"><Github className="h-4 w-4" />GitHub</a></Button>
            <Button asChild variant="secondary"><a href={linkedinUrl} target="_blank" rel="noreferrer"><Linkedin className="h-4 w-4" />LinkedIn</a></Button>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.08 }} className="relative max-w-[620px] justify-self-end">
          <div className="absolute -inset-4 rounded-lg bg-gradient-to-br from-sky-500/20 via-emerald-400/10 to-rose-500/10 blur-2xl" />
          <div className="relative overflow-hidden rounded-lg border border-border bg-card shadow-[0_30px_120px_rgba(0,0,0,0.45)]">
            <Image
              src="/images/hero-engineering-visual.svg"
              alt="Abstract full-stack engineering workspace visual"
              width={1200}
              height={900}
              priority
              className="aspect-[4/3] w-full object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
