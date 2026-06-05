"use client";

import { FormEvent, useState } from "react";
import { ExternalLink, Github, Linkedin, Mail, MapPin, MessageCircle, Phone, Send } from "lucide-react";
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
    <section id="contact" className="px-4 py-24 sm:px-6 lg:px-8">
      <SectionHeader eyebrow="Contact" title="Let’s build something useful." copy="For software engineering internships, full-stack development work, and collaborative project opportunities, send a focused message and start the conversation." />
      <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="grid gap-4">
          {contactItems.map(({ icon: ContactIcon, label, value, href }) => {
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
            <div className="grid gap-4 sm:grid-cols-2"><input required name="name" placeholder="Name" className="h-12 rounded-md border border-border bg-background px-4 outline-none focus:ring-2 focus:ring-primary" /><input required name="email" type="email" placeholder="Email" className="h-12 rounded-md border border-border bg-background px-4 outline-none focus:ring-2 focus:ring-primary" /></div>
            <input required name="subject" placeholder="Subject" className="h-12 rounded-md border border-border bg-background px-4 outline-none focus:ring-2 focus:ring-primary" />
            <textarea required name="message" placeholder="Message" rows={6} className="rounded-md border border-border bg-background px-4 py-3 outline-none focus:ring-2 focus:ring-primary" />
            {sent ? <p className="rounded-md border border-emerald-500/40 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-500">Your message has been sent successfully.</p> : null}
            {contactError ? <p className="rounded-md border border-rose-500/40 bg-rose-500/10 px-4 py-3 text-sm text-rose-500">{contactError}</p> : null}
            <Button type="submit" disabled={sending}><Send className="h-4 w-4" />{sending ? "Sending..." : "Send Message"}</Button>
          </form>
        </Card>
      </div>
    </section>
  );
}
