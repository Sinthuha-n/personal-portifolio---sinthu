"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Code2, Download, Mail, Sparkles, Terminal } from "lucide-react";
import { Badge, Button } from "@/components/ui";
import { typingWords } from "@/data/portfolio";

export function HeroSection() {
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => setWordIndex((current) => (current + 1) % typingWords.length), 1900);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <section id="home" className="mesh-bg relative px-4 pb-20 pt-28 sm:px-6 lg:px-8">
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,hsl(var(--border)/0.22)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.22)_1px,transparent_1px)] bg-[size:56px_56px]" />
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <Badge className="mb-5 gap-2"><Sparkles className="h-3.5 w-3.5" /> Available for Software Engineering Internships</Badge>
          <h1 className="max-w-4xl text-balance text-5xl font-semibold tracking-normal text-foreground sm:text-6xl lg:text-7xl">
            Hi, I&apos;m Sinthuha Nadesan
          </h1>
          <div className="mt-6 space-y-2 text-xl font-medium text-muted-foreground sm:text-2xl">
            <p>Software Engineering Intern</p>
            <p>Full Stack Developer</p>
            <p>IT Undergraduate at University of Moratuwa</p>
          </div>
          <div className="mt-7 inline-flex min-h-12 items-center rounded-lg border border-border bg-card px-4 text-lg font-semibold shadow-glow">
            <Terminal className="mr-3 h-5 w-5 text-primary" />
            <motion.span key={wordIndex} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="bg-gradient-to-r from-sky-500 via-emerald-400 to-rose-400 bg-clip-text text-transparent">
              {typingWords[wordIndex]}
            </motion.span>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild><a href="/resume.pdf" download><Download className="h-4 w-4" />Download Resume</a></Button>
            <Button asChild variant="secondary"><a href="#projects"><Code2 className="h-4 w-4" />View Projects</a></Button>
            <Button asChild variant="ghost"><a href="#contact"><Mail className="h-4 w-4" />Contact Me</a></Button>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.1 }} className="relative">
          <div className="absolute -inset-8 rounded-[2rem] bg-gradient-to-br from-sky-500/20 via-emerald-400/10 to-rose-400/20 blur-3xl" />
          <div className="relative overflow-hidden rounded-lg border border-border bg-card shadow-2xl">
            <Image src="/images/developer-avatar.png" alt="Illustrated portrait of Sinthuha Nadesan as a developer" width={900} height={900} priority unoptimized className="aspect-square w-full object-cover" />
            <div className="absolute bottom-4 left-4 right-4 grid grid-cols-3 gap-2">
              {["Java", "Spring Boot", "React"].map((item) => <div key={item} className="rounded-md border border-white/20 bg-black/35 px-3 py-2 text-center text-xs font-medium text-white backdrop-blur">{item}</div>)}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
