"use client";

import { useMemo, useState } from "react";
import { ExternalLink, Heart, Search, Send } from "lucide-react";
import { SectionHeader } from "@/components/common/section-header";
import { Badge, Button, Card } from "@/components/ui";
import { blogCategories, blogs } from "@/data/portfolio";

export function BlogSection() {
  const [blogFilter, setBlogFilter] = useState("All");
  const [blogSearch, setBlogSearch] = useState("");

  const filteredBlogs = useMemo(
    () =>
      blogs.filter((blog) => {
        const matchesCategory = blogFilter === "All" || blog.category === blogFilter;
        const matchesSearch = blog.title.toLowerCase().includes(blogSearch.toLowerCase());
        return matchesCategory && matchesSearch;
      }),
    [blogFilter, blogSearch]
  );

  return (
    <section id="blog" className="px-4 py-16 sm:px-6 lg:px-8">
      <SectionHeader eyebrow="Blog" title="Technical writing from Medium." copy="Articles published by Sinthuha Nadesan on Medium, with searchable categories and direct links to read the full posts." />
      <div className="mx-auto max-w-7xl">
        <div className="mb-6 flex flex-col gap-3 sm:flex-row">
          <div className="flex flex-1 items-center gap-3 rounded-lg border border-border bg-card px-4"><Search className="h-4 w-4 text-muted-foreground" /><input value={blogSearch} onChange={(event) => setBlogSearch(event.target.value)} placeholder="Search articles" className="h-12 w-full bg-transparent text-sm outline-none" /></div>
          <Button variant="secondary"><Send className="h-4 w-4" />Subscribe</Button>
        </div>
        <div className="mb-8 flex gap-2 overflow-x-auto pb-2">{blogCategories.map((category) => <Button key={category} variant={blogFilter === category ? "default" : "secondary"} onClick={() => setBlogFilter(category)}>{category}</Button>)}</div>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {filteredBlogs.map((blog, index) => (
            <Card key={blog.title} className="p-5">
              <Badge>{blog.category}</Badge>
              <h3 className="mt-4 min-h-20 text-lg font-semibold leading-7">{blog.title}</h3>
              <div className="mt-5 flex items-center justify-between text-sm text-muted-foreground"><span>{blog.read}</span><span>{blog.date}</span></div>
              <div className="mt-5 flex gap-2"><Button asChild variant="secondary"><a href={blog.url} target="_blank" rel="noreferrer"><ExternalLink className="h-4 w-4" />Read on Medium</a></Button><Button variant="ghost"><Heart className="h-4 w-4" />{120 + index * 14}</Button></div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
