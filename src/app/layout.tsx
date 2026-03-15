import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/shared/navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SIRCAR - Sistema de Información de Riesgo Cardiovascular",
  description: "SIRCAR es una plataforma diseñada para gestionar entrevistas clínicas y analizar datos relacionados con el riesgo cardiovascular. Con una interfaz intuitiva y herramientas avanzadas, SIRCAR facilita la recopilación, organización y visualización de información crucial para profesionales de la salud.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex`}
      >
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
      </body>
    </html>
  );
}
