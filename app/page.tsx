"use client";

import Image from "next/image";
import { FormEvent, useEffect, useMemo, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import {
  ArrowUp,
  Award,
  BookOpen,
  BriefcaseBusiness,
  CheckCircle2,
  Code2,
  Command,
  Download,
  ExternalLink,
  Github,
  GraduationCap,
  Heart,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Moon,
  Phone,
  Search,
  Send,
  Sparkles,
  Star,
  Sun,
  Terminal,
  Users,
  X
} from "lucide-react";
import { Badge, Button, Card } from "@/components/ui";
import { useTheme } from "@/components/theme-provider";
import { cn } from "@/lib/utils";

const navItems = ["About", "Skills", "Projects", "Blog", "GitHub", "Contact"];
const typingWords = ["Java Developer", "Spring Boot Developer", "React Developer", "MERN Developer", "Problem Solver"];

const skills = [
  { group: "Programming Languages", items: [["Java", 88], ["JavaScript", 84], ["Python", 74], ["C", 68]] },
  { group: "Frontend", items: [["React", 86], ["HTML5", 92], ["CSS3", 88], ["Responsive UI", 82]] },
  { group: "Backend", items: [["Spring Boot", 78], ["REST API Fundamentals", 86], ["Node.js", 76], ["Express.js", 74]] },
  { group: "Database", items: [["MySQL", 82], ["PostgreSQL", 76], ["MongoDB", 74]] },
  { group: "Tools", items: [["Git", 84], ["GitHub", 85], ["Postman", 88], ["Agile Practices", 76]] }
];

const projects = [
  {
    name: "BookNest",
    subtitle: "Full Stack MERN Web Application",
    description: "A book enthusiast platform for exploring books and managing reading lists, built collaboratively in a 5-member team with secure authentication, admin/user dashboards, and responsive UI.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Git"],
    accent: "from-rose-500 to-amber-300",
    features: ["Secure Auth", "Admin Dashboard", "User Dashboard", "Reading Lists"],
    actions: ["Live Demo", "GitHub"]
  },
  {
    name: "Planora",
    subtitle: "Project Management Platform",
    description: "A planned full stack project management platform concept for Kanban workflows, sprint planning, timelines, task ownership, and team collaboration.",
    tech: ["Spring Boot", "Next.js", "PostgreSQL", "REST APIs"],
    accent: "from-sky-500 to-emerald-400",
    features: ["Kanban Board", "Sprint Planning", "Timeline Tracking", "Team Workflows"],
    actions: ["Case Study"]
  }
];

const blogs = [
  ["Web Development", "How I Built a Project Management Platform using Spring Boot and React", "7 min read", "1.8k"],
  ["Software Engineering", "Lessons Learned from My First Full Stack Project", "5 min read", "1.2k"],
  ["Career Growth", "Version Control Best Practices for Students", "4 min read", "920"],
  ["Cloud Computing", "Understanding REST APIs", "6 min read", "1.4k"],
  ["Artificial Intelligence", "Getting Started with Spring Boot", "8 min read", "2.1k"],
  ["Database Systems", "Designing Reliable SQL Schemas for Student Projects", "6 min read", "760"]
];

const categories = ["All", "Web Development", "Software Engineering", "Cloud Computing", "Artificial Intelligence", "Database Systems", "Career Growth"];

const githubProfile = {
  name: "Sinthuha Nadesan",
  username: "Sinthuha-n",
  url: "https://github.com/Sinthuha-n",
  avatar: "https://avatars.githubusercontent.com/u/208053821?v=4",
  bio: "IT undergraduate at University of Moratuwa, passionate about coding and innovation. Exploring the tech world.",
  company: "University of Moratuwa",
  location: "Colombo, Sri Lanka",
  repositories: 15,
  followers: 7,
  following: 15,
  recentEvents: 30
};

const linkedinUrl = "https://www.linkedin.com/in/sinthuha-nadesan-16nn11";

const githubRepos = [
  {
    name: "personal-portifolio---sinthu",
    description: "Personal portfolio website built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.",
    language: "TypeScript",
    updated: "Updated Jun 5, 2026",
    url: "https://github.com/Sinthuha-n/personal-portifolio---sinthu"
  },
  {
    name: "project_management_app",
    description: "Project management application work connected to responsive Kanban and app workflow improvements.",
    language: "TypeScript",
    updated: "Updated May 10, 2026",
    url: "https://github.com/Sinthuha-n/project_management_app"
  },
  {
    name: "SpringBoot",
    description: "Learning and practicing Spring Boot fundamentals for backend development.",
    language: "Java",
    updated: "Updated Dec 3, 2025",
    url: "https://github.com/Sinthuha-n/SpringBoot"
  },
  {
    name: "Student_Managemant",
    description: "A simple student management system built using CRUD operations.",
    language: "Java",
    updated: "Updated Dec 1, 2025",
    url: "https://github.com/Sinthuha-n/Student_Managemant"
  }
];

const githubActivity = [
  "Pushed updates to personal-portifolio---sinthu",
  "Merged pull request #290 in axzellinnovations/project_management_app",
  "Opened responsive-mobile-kanban pull request work",
  "Created responsive branch for portfolio improvements"
];

function SectionHeader({ eyebrow, title, copy }: { eyebrow: string; title: string; copy: string }) {
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center">
      <Badge className="mb-4">{eyebrow}</Badge>
      <h2 className="text-3xl font-semibold tracking-normal text-foreground md:text-5xl">{title}</h2>
      <p className="mt-4 text-base leading-7 text-muted-foreground md:text-lg">{copy}</p>
    </div>
  );
}

function CustomCursor() {
  return null;
}

function CommandPalette({
  open,
  setOpen
}: {
  open: boolean;
  setOpen: (open: boolean) => void;
}) {
  useEffect(() => {
    const listener = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setOpen(!open);
      }
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", listener);
    return () => window.removeEventListener("keydown", listener);
  }, [open, setOpen]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-40 bg-background/70 p-4 backdrop-blur-xl" role="dialog" aria-modal="true">
      <div className="mx-auto mt-24 max-w-xl overflow-hidden rounded-lg border border-border bg-card shadow-2xl">
        <div className="flex items-center gap-3 border-b border-border px-4 py-3">
          <Search className="h-4 w-4 text-muted-foreground" />
          <input className="w-full bg-transparent text-sm outline-none" placeholder="Jump to a section or action" autoFocus />
          <Button variant="ghost" size="icon" aria-label="Close command palette" onClick={() => setOpen(false)}>
            <X className="h-4 w-4" />
          </Button>
        </div>
        <div className="p-2">
          {["Download Resume", "View Projects", "Read Blog", "Contact Sinthuha", "Open GitHub"].map((item) => (
            <button
              key={item}
              className="flex w-full items-center justify-between rounded-md px-3 py-3 text-left text-sm transition hover:bg-muted"
              onClick={() => setOpen(false)}
            >
              <span>{item}</span>
              <Command className="h-4 w-4 text-muted-foreground" />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const { theme, toggleTheme } = useTheme();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 28 });
  const [wordIndex, setWordIndex] = useState(0);
  const [blogFilter, setBlogFilter] = useState("All");
  const [blogSearch, setBlogSearch] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const [paletteOpen, setPaletteOpen] = useState(false);
  const [sent, setSent] = useState(false);

  useEffect(() => {
    const timer = window.setInterval(() => setWordIndex((current) => (current + 1) % typingWords.length), 1900);
    return () => window.clearInterval(timer);
  }, []);

  const filteredBlogs = useMemo(
    () =>
      blogs.filter(([category, title]) => {
        const matchesCategory = blogFilter === "All" || category === blogFilter;
        const matchesSearch = title.toLowerCase().includes(blogSearch.toLowerCase());
        return matchesCategory && matchesSearch;
      }),
    [blogFilter, blogSearch]
  );

  function handleContact(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
  }

  return (
    <main className="relative overflow-hidden">
      <motion.div className="fixed left-0 top-0 z-50 h-1 origin-left bg-primary" style={{ scaleX }} />
      <CustomCursor />
      <CommandPalette open={paletteOpen} setOpen={setPaletteOpen} />

      <header className="fixed inset-x-0 top-0 z-30 border-b border-border/70 bg-background/75 backdrop-blur-xl">
        <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8" aria-label="Main navigation">
          <a href="#home" className="flex items-center gap-2 font-semibold">
            <span className="grid h-8 w-8 place-items-center rounded-md bg-foreground text-sm text-background">SN</span>
            <span>Sinthuha Nadesan</span>
          </a>
          <div className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="rounded-md px-3 py-2 text-sm text-muted-foreground transition hover:bg-muted hover:text-foreground">
                {item}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" aria-label="Open command palette" onClick={() => setPaletteOpen(true)}>
              <Command className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" aria-label="Toggle theme" onClick={toggleTheme}>
              {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden" aria-label="Open menu" onClick={() => setMenuOpen((current) => !current)}>
              {menuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </Button>
          </div>
        </nav>
        {menuOpen ? (
          <div className="border-t border-border bg-background px-4 py-3 md:hidden">
            {navItems.map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setMenuOpen(false)} className="block rounded-md px-3 py-3 text-sm text-muted-foreground hover:bg-muted hover:text-foreground">
                {item}
              </a>
            ))}
          </div>
        ) : null}
      </header>

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
            {[
              ["2024", "Frontend Development Certification", "Built a polished foundation in responsive user interfaces."],
              ["2025", "SQL Career Track, HackerRank SQL, and Postman API Fundamental", "Strengthened database querying, SQL problem solving, and API testing workflows."],
              ["2028", "Expected Graduation", "BSc (Hons) in Information Technology at University of Moratuwa, Sri Lanka."],
              ["Current", "Seeking a Software Engineering Internship", "Ready to contribute to high-impact development teams with full-stack project experience."]
            ].map(([year, title, copy]) => (
              <Card key={year} className="grid gap-2 p-5 sm:grid-cols-[96px_1fr]">
                <div className="text-sm font-semibold text-primary">{year}</div>
                <div><h3 className="font-semibold">{title}</h3><p className="mt-1 text-sm leading-6 text-muted-foreground">{copy}</p></div>
              </Card>
            ))}
          </div>
        </div>
      </section>

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

      <section id="projects" className="px-4 py-24 sm:px-6 lg:px-8">
        <SectionHeader eyebrow="Projects" title="Project work with internship-ready depth." copy="Showcase cards are designed for recruiters to scan product scope, technical stack, and practical engineering decisions quickly." />
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-2">
          {projects.map((project) => (
            <Card key={project.name} className="overflow-hidden">
              <div className={cn("h-44 bg-gradient-to-br p-5", project.accent)}>
                <div className="grid h-full rounded-lg border border-white/30 bg-white/20 p-4 text-white backdrop-blur">
                  <div className="flex items-center justify-between"><span className="font-semibold">{project.name}</span><Star className="h-4 w-4" /></div>
                  <div className="mt-auto grid grid-cols-2 gap-2">{project.features.map((feature) => <span key={feature} className="rounded-md bg-black/20 px-3 py-2 text-xs">{feature}</span>)}</div>
                </div>
              </div>
              <div className="p-6">
                <p className="text-sm font-medium text-primary">{project.subtitle}</p>
                <h3 className="mt-2 text-2xl font-semibold">{project.name}</h3>
                <p className="mt-3 leading-7 text-muted-foreground">{project.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">{project.tech.map((tech) => <Badge key={tech}>{tech}</Badge>)}</div>
                <div className="mt-6 flex flex-wrap gap-3">{project.actions.map((action) => <Button key={action} variant={action === "Live Demo" ? "default" : "secondary"}><ExternalLink className="h-4 w-4" />{action}</Button>)}</div>
              </div>
            </Card>
          ))}
          {["AI Interview Coach", "Open Source Dashboard"].map((name) => (
            <Card key={name} className="grid min-h-72 place-items-center border-dashed p-6 text-center">
              <div><Badge>Coming Soon</Badge><h3 className="mt-4 text-2xl font-semibold">{name}</h3><p className="mt-2 text-muted-foreground">A future case study slot for deeper internship and open source work.</p></div>
            </Card>
          ))}
        </div>
      </section>

      <section id="experience" className="bg-muted/45 px-4 py-24 sm:px-6 lg:px-8">
        <SectionHeader eyebrow="Experience" title="Developer journey shaped by practice." copy="A focused timeline spanning university coursework, full-stack project work, certifications, teamwork, and software engineering fundamentals." />
        <div className="mx-auto grid max-w-5xl gap-4">
          {["Object-Oriented Programming", "Database Management Systems", "Data Structures & Algorithms", "Software Engineering", "Web Application Development", "Team-Based MERN Project"].map((item, index) => (
            <Card key={item} className="flex items-center gap-4 p-5">
              <div className="grid h-10 w-10 shrink-0 place-items-center rounded-md bg-foreground text-background">{index + 1}</div>
              <div><h3 className="font-semibold">{item}</h3><p className="text-sm text-muted-foreground">Relevant coursework and project practice from the University of Moratuwa IT degree and BookNest team development.</p></div>
            </Card>
          ))}
        </div>
      </section>

      <section id="blog" className="px-4 py-24 sm:px-6 lg:px-8">
        <SectionHeader eyebrow="Blog" title="Technical writing for learning in public." copy="A recruiter-friendly blog surface with category filtering, search, reading time, views, likes, sharing, and newsletter capture." />
        <div className="mx-auto max-w-7xl">
          <div className="mb-6 flex flex-col gap-3 sm:flex-row">
            <div className="flex flex-1 items-center gap-3 rounded-lg border border-border bg-card px-4"><Search className="h-4 w-4 text-muted-foreground" /><input value={blogSearch} onChange={(event) => setBlogSearch(event.target.value)} placeholder="Search articles" className="h-12 w-full bg-transparent text-sm outline-none" /></div>
            <Button variant="secondary"><Send className="h-4 w-4" />Subscribe</Button>
          </div>
          <div className="mb-8 flex gap-2 overflow-x-auto pb-2">{categories.map((category) => <Button key={category} variant={blogFilter === category ? "default" : "secondary"} onClick={() => setBlogFilter(category)}>{category}</Button>)}</div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {filteredBlogs.map(([category, title, read, views], index) => (
              <Card key={title} className="p-5">
                <Badge>{category}</Badge>
                <h3 className="mt-4 min-h-20 text-lg font-semibold leading-7">{title}</h3>
                <div className="mt-5 flex items-center justify-between text-sm text-muted-foreground"><span>{read}</span><span>{views} views</span></div>
                <div className="mt-5 flex gap-2"><Button variant="secondary"><Heart className="h-4 w-4" />{120 + index * 14}</Button><Button variant="ghost">Share</Button></div>
              </Card>
            ))}
          </div>
        </div>
      </section>

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

      <section id="achievements" className="px-4 py-24 sm:px-6 lg:px-8">
        <SectionHeader eyebrow="Achievements" title="Credentials that support the story." copy="Certificate cards highlight focused learning in frontend development, SQL, API fundamentals, and problem solving." />
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-2 lg:grid-cols-4">
          {["Frontend Web Development - University of Moratuwa (Dec 2024)", "SQL Career Track - DataCamp (Jan 2025)", "HackerRank SQL (Feb 2025)", "Postman API Fundamental - Postman (Sep 2025)"].map((item) => (
            <Card key={item} className="p-5">
              <Award className="h-6 w-6 text-primary" />
              <h3 className="mt-6 font-semibold">{item}</h3>
              <p className="mt-2 text-sm text-muted-foreground">Verified learning milestone with practical project relevance.</p>
            </Card>
          ))}
        </div>
      </section>

      <section id="testimonials" className="bg-muted/45 px-4 py-24 sm:px-6 lg:px-8">
        <SectionHeader eyebrow="Testimonials" title="Ready for references as the journey grows." copy="A future-facing section for lecturers, mentors, team members, and managers to share concise feedback." />
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-2 lg:grid-cols-4">
          {["Lecturer", "Mentor", "Team Member", "Manager"].map((role) => <Card key={role} className="p-5"><BriefcaseBusiness className="h-5 w-5 text-primary" /><h3 className="mt-5 font-semibold">{role}</h3><p className="mt-2 text-sm text-muted-foreground">Reference quote placeholder.</p></Card>)}
        </div>
      </section>

      <section id="contact" className="px-4 py-24 sm:px-6 lg:px-8">
        <SectionHeader eyebrow="Contact" title="Let’s build something useful." copy="For software engineering internships, full-stack development work, and collaborative project opportunities, send a focused message and start the conversation." />
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="grid gap-4">
            {[
              { icon: Mail, label: "Email", value: "nadasinthu09@gmail.com", href: "mailto:nadasinthu09@gmail.com" },
              { icon: Phone, label: "Phone", value: "+94 75 802 1244", href: "tel:+94758021244" },
              { icon: Linkedin, label: "LinkedIn", value: "Sinthuha Nadesan", href: linkedinUrl },
              { icon: Github, label: "GitHub", value: "Sinthuha-n", href: githubProfile.url },
              { icon: MapPin, label: "Location", value: "Colombo, Sri Lanka" }
            ].map(({ icon: ContactIcon, label, value, href }) => {
              const content = (
                <>
                  <ContactIcon className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium">{label}</p>
                    <p className="text-sm text-muted-foreground">{value}</p>
                  </div>
                  {href ? <ExternalLink className="ml-auto h-4 w-4 text-muted-foreground" /> : null}
                </>
              );
              if (href) {
                return (
                  <Card key={label} asChild className="flex items-center gap-4 p-5 transition hover:border-primary/60 hover:bg-muted">
                    <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noreferrer" : undefined}>{content}</a>
                  </Card>
                );
              }
              return <Card key={label} className="flex items-center gap-4 p-5">{content}</Card>;
            })}
          </div>
          <Card className="p-6">
            <form className="grid gap-4" onSubmit={handleContact}>
              <div className="grid gap-4 sm:grid-cols-2"><input required placeholder="Name" className="h-12 rounded-md border border-border bg-background px-4 outline-none focus:ring-2 focus:ring-primary" /><input required type="email" placeholder="Email" className="h-12 rounded-md border border-border bg-background px-4 outline-none focus:ring-2 focus:ring-primary" /></div>
              <input required placeholder="Subject" className="h-12 rounded-md border border-border bg-background px-4 outline-none focus:ring-2 focus:ring-primary" />
              <textarea required placeholder="Message" rows={6} className="rounded-md border border-border bg-background px-4 py-3 outline-none focus:ring-2 focus:ring-primary" />
              <Button type="submit"><Send className="h-4 w-4" />{sent ? "Message Ready" : "Send Message"}</Button>
            </form>
          </Card>
        </div>
      </section>

      <footer className="border-t border-border px-4 py-8 text-center text-sm text-muted-foreground">
        <p>© 2026 Sinthuha Nadesan. Built with Next.js, React, TypeScript, Tailwind CSS, Framer Motion, and Lucide Icons.</p>
      </footer>

      <Button asChild size="icon" className="fixed bottom-5 right-5 z-30 shadow-lg" aria-label="Back to top">
        <a href="#home"><ArrowUp className="h-4 w-4" /></a>
      </Button>
    </main>
  );
}
