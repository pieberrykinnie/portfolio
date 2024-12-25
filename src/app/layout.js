import { Inter } from "next/font/google";
import "./globals.css";
import clsx from "clsx";
import FireFliesBackground from "@/components/FireFliesBackground";
import Analytics from "@vercel/analytics";
import SpeedInsights from "@vercel/speed-insights/next";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: "Peter Vu",
  description: "Peter Vu's Portfolio. Second-year Computer Science student from University of Manitoba.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={clsx(inter.variable, "bg-background text-foreground font-inter")}>
        {children}
        <FireFliesBackground />
      </body>
      <Analytics />
      <SpeedInsights />
    </html>
  );
}
