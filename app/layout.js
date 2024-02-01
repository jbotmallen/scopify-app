"use client";

import "./globals.css";
import Navbar from "../components/Navbar";
import { AuthContextProvider, metadata } from "../lib/context/AuthContext.js";
import { ThemeProvider } from "next-themes";
import ThemeToggle from "../components/ThemeToggle";
import { AlertContextProvider, useAlert } from "@/lib/context/AlertContext";
import AlertComposition from "@/components/AlertComposition";

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <title>{metadata.title}</title>
      <body className="scroll-smooth box-border p-0 m-0 overflow-x-hidden bg-gray-100 dark:bg-gray-800">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <main className="transition-all duration-300 ease-in-out h-svh min-h-svh w-svw bg-transparent text-gray-800 dark:text-gray-200 flex flex-col items-center">
            <AuthContextProvider>
              <AlertContextProvider>
                <Navbar />
                {children}
                <ThemeToggle />
                <AlertComposition />
              </AlertContextProvider>
            </AuthContextProvider>
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
