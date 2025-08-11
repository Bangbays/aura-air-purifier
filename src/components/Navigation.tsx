"use client"; // Diperlukan karena menggunakan hook usePathname

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Wind } from "lucide-react";

const Navigation = () => {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="p-2 bg-gradient-primary rounded-xl group-hover:scale-110 transition-transform duration-300">
              <Wind className="h-6 w-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-gradient">Aura</span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className={`text-sm font-medium transition-colors duration-200 hover:text-primary ${
                isActive("/") ? "text-primary" : "text-muted-foreground"
              }`}
            >
              Home
            </Link>
            <Link
              href="/features"
              className={`text-sm font-medium transition-colors duration-200 hover:text-primary ${
                isActive("/features") ? "text-primary" : "text-muted-foreground"
              }`}
            >
              Features
            </Link>
            <Link
              href="/pre-order"
              className={`text-sm font-medium transition-colors duration-200 hover:text-primary ${
                isActive("/pre-order")
                  ? "text-primary"
                  : "text-muted-foreground"
              }`}
            >
              Pre-Order
            </Link>
          </div>

          {/* CTA Button */}
          <Link href="/pre-order">
            <Button className="btn-hero hidden md:inline-flex">
              Reserve Yours
            </Button>
          </Link>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Link href="/pre-order" aria-label="Pre-Order Aura Air Purifier">
              <Button
                size="sm"
                className="bg-primary text-primary-foreground hover:bg-primary/90"
              >
                Order
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
