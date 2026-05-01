import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <nav className="border-b sticky top-0 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="font-bold text-xl tracking-tight">Ved Tech</Link>
        <div className="flex items-center gap-4">
          <Link href="/">Home</Link>
          <Link href="/#contact">Contact</Link>
          <Link href="/admin">
            <Button variant="outline" size="sm">Admin</Button>
          </Link>
        </div>
      </div>
    </nav>
  );
}