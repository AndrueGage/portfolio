import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import './globals.css';
import { cn } from "@/lib/utils"
import { ThemeProvider } from "@/components/theme-provider"
import { Analytics } from "@vercel/analytics/react"


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
          "bg-gradient font-sans antialiased",
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
            {/* <Template> */}
            {children}
            {/* </Template> */}
          </ThemeProvider>
    </body>
    </html >
  );
}