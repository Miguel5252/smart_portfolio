import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "@/components/ThemeProvider";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import BotContextProvider from "@/contexts/BotContextProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s | Miguel Santaolalla",
    default: "Miguel Santaolalla",
  },
  description: "Check out my smart portfolio website with a custom Smart Assistant.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class">
          <BotContextProvider>
            <Navbar />
            <main className="mx-auto max-w-screen-xl px-3 py-10">{children}</main>
            <Footer />
          </BotContextProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
