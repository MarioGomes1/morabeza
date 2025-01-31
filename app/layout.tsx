import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import MainHeader from "@/components/header/main-header";

const modernist = localFont({
  src: [
    {
      path: "../fonts/Sk-Modernist-Regular.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/Sk-Modernist-Bold.otf",
      weight: "900",
      style: "normal",
    },
    {
      path: "../fonts/Sk-Modernist-Light.otf",
      weight: "300",
      style: "normal",
    },
  ],
  variable: "--font-modernist",
});

const minion = localFont({
  src: [
    {
      path: "../fonts/Sk-Modernist-Regular.otf",
      weight: "500",
      style: "normal",
    },
  ],
  variable: "--font-minion",
});

export const metadata: Metadata = {
  title: "Morabeza",
  description: "TBD",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${modernist.variable} ${minion.variable} `}>
        <MainHeader />
        {children}
      </body>
    </html>
  );
}
