import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Theme from "../hooks/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};
import { JetBrains_Mono } from "next/font/google";
import PageTransition from "@/components/Motions/PageTransition";
import Navbar from "./Navbar";
import StairTransition from "@/components/Motions/StairTransition";

const JetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-JetBrainsMono",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <title>Karim A. Hassan</title>
      <body className={`${JetBrainsMono.className} bg-primary`}>
        <Theme>
          <Navbar />
          <StairTransition />
          <PageTransition>{children}</PageTransition>
        </Theme>
      </body>
    </html>
  );
}
