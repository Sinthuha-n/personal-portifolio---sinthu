"use client";

import { FormEvent, useState } from "react";
import { ExternalLink, Github, Linkedin, Mail, MapPin, MessageCircle, Phone, Send, Sparkles } from "lucide-react";
import { SectionHeader } from "@/components/common/section-header";
import { Button, Card } from "@/components/ui";
import { githubProfile, linkedinUrl, mediumUrl } from "@/data/portfolio";

const contactItems = [
  { icon: Mail, label: "Email", value: "nadasinthu09@gmail.com", href: "mailto:nadasinthu09@gmail.com" },
  { icon: Phone, label: "Phone", value: "+94 75 802 1244", href: "tel:+94758021244" },
  { icon: Linkedin, label: "LinkedIn", value: "Sinthuha Nadesan", href: linkedinUrl },
  { icon: MessageCircle, label: "Medium", value: "Sinthuha Nadesan", href: mediumUrl },
  { icon: Github, label: "GitHub", value: "Sinthuha-n", href: githubProfile.url },
  { icon: MapPin, label: "Location", value: "Colombo, Sri Lanka" }
];

export function ContactSection() {
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [contactError, setContactError] = useState("");

  async function handleContact(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSending(true);
    setSent(false);
    setContactError("");

    const formData = new FormData(event.currentTarget);
    formData.append("_template", "table");
    formData.append("_subject", String(formData.get("subject") ?? "Portfolio contact"));
    formData.append("_captcha", "false");

    try {
      const response = await fetch("https://formsubmit.co/ajax/nadasinthu09@gmail.com", {
        method: "POST",
        body: formData
      });

      if (!response.ok) {
        throw new Error("Message service failed");
      }

      event.currentTarget.reset();
      setSent(true);
    } catch {
      setContactError("Your message could not be sent. Please try again later.");
    } finally {
      setSending(false);
    }
  }

  return (
    <section id="contact" className="px-4 py-16 sm:px-6 lg:px-8">
      <SectionHeader eyebrow="Contact" title="Let’s build something useful." copy="For software engineering internships, full-stack development work, and collaborative project opportunities, send a focused message and start the conversation." />
      <div className="mx-auto grid max-w-7xl items-center gap-6 lg:grid-cols-2">
        <div className="space-y-5">
          <Card className="border-primary/20 bg-card/90 p-6">
            <div className="flex items-start gap-4">
              <div className="rounded-lg border border-primary/30 bg-primary/10 p-3 text-primary">
                <Sparkles className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">Availability</p>
                <h3 className="mt-2 text-2xl font-semibold">Open to software engineering internship conversations.</h3>
                <p className="mt-3 leading-7 text-muted-foreground">
                  Best fit: full-stack product teams, Java/Spring Boot backend work, React interfaces, and projects where clear communication matters.
                </p>
              </div>
            </div>
          </Card>

          <div className="grid gap-3 sm:grid-cols-2">
            {contactItems.map(({ icon: ContactIcon, label, value, href }) => {
              const content = (
                <>
                  <ContactIcon className="h-4 w-4 shrink-0 text-primary" />
                  <div className="min-w-0">
                    <p className="text-sm font-medium">{label}</p>
                    <p className="truncate text-sm text-muted-foreground">{value}</p>
                  </div>
                  {href ? <ExternalLink className="ml-auto h-3.5 w-3.5 shrink-0 text-muted-foreground" /> : null}
                </>
              );

              if (href) {
                return (
                  <Card key={label} asChild className="flex min-h-[82px] items-center gap-3 p-4 transition hover:border-primary/60 hover:bg-muted">
                    <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noreferrer" : undefined}>{content}</a>
                  </Card>
                );
              }

              return <Card key={label} className="flex min-h-[82px] items-center gap-3 p-4">{content}</Card>;
            })}
          </div>
        </div>

        <Card className="border-primary/20 bg-[linear-gradient(145deg,hsl(var(--card)),hsl(var(--muted)))] p-6 shadow-[0_24px_90px_rgba(0,0,0,0.28)] md:p-7">
          <div className="mb-6">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">Send message</p>
            <h3 className="mt-2 text-2xl font-semibold">Start with the role, project, or collaboration idea.</h3>
          </div>
          <form className="grid gap-4" onSubmit={handleContact}>
            <div className="grid gap-4 sm:grid-cols-2"><input required name="name" placeholder="Name" className="h-12 rounded-md border border-border bg-background px-4 outline-none focus:ring-2 focus:ring-primary" /><input required name="email" type="email" placeholder="Email" className="h-12 rounded-md border border-border bg-background px-4 outline-none focus:ring-2 focus:ring-primary" /></div>
            <input required name="subject" placeholder="Subject" className="h-12 rounded-md border border-border bg-background px-4 outline-none focus:ring-2 focus:ring-primary" />
            <textarea required name="message" placeholder="Message" rows={7} className="rounded-md border border-border bg-background px-4 py-3 outline-none focus:ring-2 focus:ring-primary" />
            {sent ? <p className="rounded-md border border-emerald-500/40 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-500">Your message has been sent successfully.</p> : null}
            {contactError ? <p className="rounded-md border border-rose-500/40 bg-rose-500/10 px-4 py-3 text-sm text-rose-500">{contactError}</p> : null}
            <Button type="submit" disabled={sending}><Send className="h-4 w-4" />{sending ? "Sending..." : "Send Message"}</Button>
          </form>
        </Card>
      </div>
    </section>
  );
}
