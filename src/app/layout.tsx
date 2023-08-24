import "./globals.css";

import type { Metadata } from "next";
import { NextAuthProvider } from "./providers";
import Navbar from "@/components/layout/navbar";

export const metadata: Metadata = {
  title: "就诊记录查询",
  description: "Next.js project with Grafbase",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <NextAuthProvider>
          <Navbar />
          <main className="container mx-auto max-w-2xl py-10">{children}</main>
        </NextAuthProvider>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
      </body>
    </html>
  );
}
