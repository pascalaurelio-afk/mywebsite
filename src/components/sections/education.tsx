"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

export function EducationSection() {
  const { ref, isVisible } = useIntersectionObserver();

  return (
    <section id="education" className="relative py-24 md:py-32">
      <div className="absolute inset-0 gradient-bg opacity-30" />
      <div ref={ref} className="relative mx-auto max-w-6xl px-6">
        <div className={`mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="text-sm font-medium text-primary mb-2 tracking-wider uppercase">Background</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">Education</h2>
          <div className="w-16 h-1 rounded-full bg-gradient-to-r from-primary to-primary/40" />
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <Card className={`glass border-primary/10 transition-all duration-700 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <CardContent className="p-8">
              <div className="flex items-start gap-5">
                <div className="shrink-0 w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 00-.491 6.347A48.62 48.62 0 0112 20.904a48.62 48.62 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.636 50.636 0 00-2.658-.813A59.906 59.906 0 0112 3.493a59.903 59.903 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                  </svg>
                </div>

                <div className="flex-1">
                  <div className="flex justify-between items-start mb-1">
                    <h3 className="text-xl font-bold text-foreground">Bachelor of Science in Civil Engineering</h3>
                  </div>
                  <p className="text-primary font-medium mb-3">University of the Philippines Diliman</p>
                  <div className="flex flex-wrap gap-2 mb-3">
                    <Badge className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/15">
                      2019 - 2025
                    </Badge>
                    <Badge variant="outline" className="border-border/50 text-muted-foreground">
                      Undergraduate Degree
                    </Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className={`glass border-primary/10 transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <CardContent className="p-8">
              <div className="flex items-start gap-5">
                <div className="shrink-0 w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.315 48.315 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
                  </svg>
                </div>

                <div className="flex-1">
                  <div className="flex justify-between items-start mb-1">
                    <h3 className="text-xl font-bold text-foreground">High School</h3>
                  </div>
                  <p className="text-primary font-medium mb-3">Philippine Science High School - CAR Campus</p>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/15">
                      2013 - 2019
                    </Badge>
                    <Badge variant="outline" className="border-border/50 text-muted-foreground">
                      Secondary Education
                    </Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
