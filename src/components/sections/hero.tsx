"use client";

import { Button } from "@/components/ui/button";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import Image from "next/image";

export function HeroSection() {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.2 });

  return (
    <section
      id="hero"
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0 gradient-bg" />

      {/* Floating geometric shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-1/4 left-1/5 w-72 h-72 rounded-full animate-float"
          style={{
            background: "radial-gradient(circle, oklch(0.5 0.15 270 / 8%) 0%, transparent 70%)",
            animationDelay: "0s",
          }}
        />
        <div
          className="absolute bottom-1/4 right-1/5 w-96 h-96 rounded-full animate-float"
          style={{
            background: "radial-gradient(circle, oklch(0.45 0.12 300 / 6%) 0%, transparent 70%)",
            animationDelay: "2s",
          }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full animate-glow"
          style={{
            background: "radial-gradient(circle, oklch(0.4 0.1 270 / 5%) 0%, transparent 60%)",
          }}
        />
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(oklch(1 0 0 / 20%) 1px, transparent 1px), linear-gradient(90deg, oklch(1 0 0 / 20%) 1px, transparent 1px)`,
          backgroundSize: "64px 64px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 grid lg:grid-cols-12 gap-12 items-center min-h-screen pt-20">
        {/* Left Column - Typography & CTAs */}
        <div className="lg:col-span-7 text-left flex flex-col items-start justify-center">
          <div
            className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 mb-8 backdrop-blur-sm shadow-[0_0_15px_rgba(var(--primary),0.1)]">
              <div className="h-2 w-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm font-semibold tracking-wide text-primary uppercase">Open to Opportunities</span>
            </div>
          </div>

          <h1
            className={`text-6xl sm:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.9] mb-6 transition-all duration-700 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <span className="block text-foreground drop-shadow-sm">Pascal</span>
            <span className="block text-foreground drop-shadow-sm">Aurelio</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary/80 to-primary/40 mt-2">Specialist.</span>
          </h1>

          <p
            className={`text-xl md:text-2xl text-muted-foreground font-light mb-8 max-w-xl transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            Results-driven procurement engineer bridging the gap between technical specifications and vendor realities.
          </p>

          <div
            className={`flex flex-col sm:flex-row gap-5 transition-all duration-700 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <Button
              size="lg"
              className="rounded-xl px-8 h-14 text-base font-semibold bg-primary hover:bg-primary/90 text-primary-foreground shadow-[0_0_30px_-5px_rgba(var(--primary),0.4)] hover:shadow-[0_0_40px_-5px_rgba(var(--primary),0.6)] hover:-translate-y-1 transition-all duration-300"
              onClick={() => document.getElementById("experience")?.scrollIntoView({ behavior: "smooth" })}
            >
              View Experience
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-xl px-8 h-14 text-base font-semibold border-primary/30 bg-background/50 backdrop-blur hover:bg-primary/10 hover:-translate-y-1 transition-all duration-300"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              Get in Touch
            </Button>
          </div>
        </div>

        {/* Right Column - 3D Illustration */}
        <div className={`hidden lg:block lg:col-span-5 relative transition-all duration-1000 delay-500 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"}`}>
          <div className="relative w-full aspect-square max-w-[550px] mx-auto animate-float" style={{ animationDuration: '8s' }}>
            {/* The Illustration */}
            <div className="absolute inset-0 z-10 drop-shadow-[0_0_30px_rgba(var(--primary),0.2)]">
              <Image
                src="/images/hero-abstract.png"
                alt="Procurement and Supply Chain Illustration"
                fill
                priority
                className="object-contain"
              />
            </div>

            {/* Accent Blur */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-primary/20 blur-[100px] rounded-full z-0" />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-1.5">
          <div className="w-1.5 h-3 rounded-full bg-muted-foreground/50 animate-pulse" />
        </div>
      </div>
    </section>
  );
}
