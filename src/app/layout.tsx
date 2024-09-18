import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import './globals.css';
import { cn } from "@/lib/utils"
import { ThemeProvider } from "@/components/theme-provider"
import { Analytics } from "@vercel/analytics/react"
import PageContainer from "@/components/custom/PageContainer";
import Navbar from "@/components/custom/Navbar";

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
        <Navbar />
        <div className="chart-wrapper mx-auto flex max-w-6xl flex-col flex-wrap items-start justify-center gap-6 p-6 sm:flex-row sm:p-8">

          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {/* <Template> */}
            {children}
            {/* </Template> */}
          </ThemeProvider>
        </div>

      </body>
    </html>
  );
}