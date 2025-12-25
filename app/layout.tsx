import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar"; 
import Cursor from "@/components/Cursor"; // <--- 1. Import this

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Imeth Sahabandu | Portfolio",
  description: "Digital Marketing Expert",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Cursor />  {/* <--- 2. Add this line here */}
        <Navbar />  {/* (You might already have this here or in page.tsx) */}
        {children}
      </body>
    </html>
  );
}