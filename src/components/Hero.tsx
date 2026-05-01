"use client";
import { Button } from "@/components/ui/button";
import { ArrowRight, Code2, ShieldCheck, Zap } from "lucide-react";

export default function Hero() {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    contactSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-background to-muted/30 py-20 md:py-28 lg:py-32">
      {/* Decorative background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 h-32 w-32 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute bottom-20 right-10 h-40 w-40 rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-3 py-1 text-xs font-medium text-muted-foreground mb-6">
          <Zap className="h-3 w-3 text-primary" />
          <span>Trusted by modern businesses</span>
        </div>

        {/* Headline */}
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl mb-6">
          Build Better Digital
          <span className="block text-primary">Experiences with Ved Tech</span>
        </h1>

        {/* Subheading */}
        <p className="mx-auto max-w-2xl text-lg text-muted-foreground mb-10">
          We craft scalable, high-performance web applications tailored to your business goals. 
          From concept to deployment — we&apos;ve got you covered.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <Button onClick={scrollToContact} size="lg" className="gap-2">
            Get Started <ArrowRight className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="lg" asChild>
            <a href="#services">Explore Services</a>
          </Button>
        </div>

        {/* Feature Pills */}
        <div className="flex flex-wrap justify-center gap-3">
          {[
            { icon: Code2, label: "Clean Code" },
            { icon: ShieldCheck, label: "Secure & Reliable" },
            { icon: Zap, label: "Fast Performance" },
          ].map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex items-center gap-2 rounded-full border border-border bg-background px-4 py-2 text-sm font-medium"
            >
              <Icon className="h-4 w-4 text-primary" />
              <span>{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}