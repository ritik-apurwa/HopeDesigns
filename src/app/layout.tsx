import type { Metadata } from "next";
import "./globals.css";
import path from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/nav-comps/Navbar";

export const metadata: Metadata = {
  title: "HopeDesigns",
  description: "Generated by HopeDesigns ",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="app-body">
        <main className="app-parent">
            <Navbar/>
          <main className="app-child">{children}</main>
        </main>
      </body>
    </html>
  );
}
