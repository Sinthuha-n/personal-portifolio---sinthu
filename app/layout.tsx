import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

export const metadata: Metadata = {
  title: "Sinthuha Nadesan | Software Engineering Intern",
  description:
    "Portfolio for Sinthuha Nadesan, a Software Engineering Intern and IT Undergraduate at the University of Moratuwa specializing in Java, Spring Boot, React, REST APIs, and full-stack development.",
  keywords: [
    "Sinthuha Nadesan",
    "Software Engineering Intern",
    "Full Stack Developer",
    "Java Developer",
    "Spring Boot",
    "React",
    "MERN",
    "REST APIs",
    "University of Moratuwa"
  ],
  openGraph: {
    title: "Sinthuha Nadesan | Software Engineering Intern",
    description: "Full-stack portfolio featuring BookNest, certifications, skills, education, and contact details.",
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
