import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

export const metadata: Metadata = {
  title: "Sinthuha Nadesan | Software Engineering Intern",
  description:
    "Modern portfolio for Sinthuha Nadesan, a Software Engineering Intern and IT Undergraduate at the University of Moratuwa building full stack applications.",
  keywords: [
    "Sinthuha Nadesan",
    "Software Engineering Intern",
    "Full Stack Developer",
    "Java Developer",
    "Spring Boot",
    "React",
    "University of Moratuwa"
  ],
  openGraph: {
    title: "Sinthuha Nadesan | Software Engineering Intern",
    description: "Full stack portfolio featuring projects, certifications, blogs, GitHub activity, and contact details.",
    type: "website"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans antialiased">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
