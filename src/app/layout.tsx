import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Aura Air Purifier - Smart, Eco-Friendly Air Purification",
  description:
    "Experience the future of air purification with Aura's smart, eco-friendly technology. Pre-order now and save 30% on revolutionary air purification.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Navigation />
        <main>{children}</main>
        <Toaster /> 
      </body>
    </html>
  );
}
