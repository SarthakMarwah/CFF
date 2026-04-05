import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
    title: "Corporate Food & Fun (CFF)",
    description: "Premium corporate food services and experiences.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="dark">
            <body className={cn("min-h-screen bg-cff-black text-white font-sans antialiased", inter.variable)}>
                {children}
            </body>
        </html>
    );
}
