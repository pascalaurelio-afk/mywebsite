"use client";

import { Button } from "@/components/ui/button";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

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
      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <div
          className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 mb-8">
            <div className="h-2 w-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm font-medium text-primary">Open to Opportunities</span>
          </div>
        </div>

        <h1
          className={`text-5xl md:text-7xl font-bold tracking-tight mb-6 transition-all duration-700 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
        >
          <span className="block text-foreground">Pascal Marius Stefan</span>
          <span className="block gradient-text mt-2">Aurelio</span>
        </h1>

        <p
          className={`text-xl md:text-2xl text-muted-foreground font-light mb-4 transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
        >
          Procurement Specialist
        </p>

        <p
          className={`max-w-2xl mx-auto text-base md:text-lg text-muted-foreground/80 mb-10 transition-all duration-700 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
        >
          Results-driven procurement specialist with expertise in vendor management,
          inventory control, and technical procurement lifecycles.
        </p>

        <div
          className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-700 delay-[400ms] ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
        >
          <Button
            size="lg"
            className="rounded-full px-8 bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/20 hover:shadow-primary/30 hover:scale-105 transition-all duration-300"
            onClick={() =>
              document.getElementById("experience")?.scrollIntoView({ behavior: "smooth" })
            }
          >
            View Experience
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="rounded-full px-8 border-primary/30 hover:bg-primary/10 hover:scale-105 transition-all duration-300"
            onClick={() =>
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Get in Touch
          </Button>
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
