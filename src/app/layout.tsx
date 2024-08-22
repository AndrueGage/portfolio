import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import './globals.css';
import { cn } from "@/lib/utils"
import { ThemeProvider } from "@/components/theme-provider"
import { Analytics } from "@vercel/analytics/react"
import PageContainer from "@/components/custom/PageContainer";
import Navbar from "@/components/custom/Navbar";
import About from "@/components/custom/About";
import Template from "./template";
import Projects from "@/components/custom/Projects";
import Skills from "@/components/custom/Skills";
import Contact from "@/components/custom/Contact";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "Andrue Desmarais Portfolio",
  description: "My personal webpage created by me.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-gradient font-sans antialiased min-w-96",
          fontSans.variable
        )}
      >
        <Analytics />
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Navbar />
            <PageContainer>
              <Template>
              {children}
              <About />
              <Skills />
              <Projects />
              <Contact />
              </Template>
            </PageContainer>
          </ThemeProvider> 
      </body>
    </html>
  );
}