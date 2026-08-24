import PlausibleProvider from "next-plausible";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Playhouse",
  description: "Make a room, add it to the gallery, and make a friend!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <PlausibleProvider src="https://plausible.io/js/pa-PcDvDUT4Zb9NzAW4drPB0.js">
          {children}
        </PlausibleProvider>
      </body>
    </html>
  );
}
