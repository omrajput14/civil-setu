import type { Metadata } from "next";
import { IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const ibmPlexSans = IBM_Plex_Sans({
  variable: "--font-ibm-plex-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "CivicSetu",
  description: "Citizen Service Dashboard",
};

import { ToastProvider } from "@/components/ui/ToastProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${ibmPlexSans.variable} ${ibmPlexMono.variable} font-body-md text-body-md antialiased bg-[#0a0a0a] min-h-screen flex justify-center`}
      >
        <div className="w-full max-w-[430px] min-h-screen bg-background relative shadow-2xl overflow-hidden flex flex-col">
          <ToastProvider>
            {children}
          </ToastProvider>
        </div>
      </body>
    </html>
  );
}
