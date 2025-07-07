import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Calendra",
  description:
    "Calendra is a smart calendar platform designed to help users organize their time, schedule events, set reminders, and manage meetings efficiently. With an intuitive interface and cross-device synchronization, Calendra enhances personal and team productivity by streamlining daily schedules and avoiding time conflicts.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased  animate-fade-in`}
        >
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
