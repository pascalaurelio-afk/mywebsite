"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

const awards = [
  {
    title: "Champion",
    event: "Yale x Yale-NUS Global Hackathon",
    location: "Yale NUS Singapore",
    year: "2021"
  },
  {
    title: "Champion (Health & Well-being) & Best Presenter",
    event: "STEM Expo 2019, iGen Innovative Research",
    location: "SMX Aura",
    year: "2019"
  },
  {
    title: "Silver Awardee",
    event: "Young Innovators Challenge",
    location: "Sunway University Malaysia",
    year: "2016"
  },
  {
    title: "Multi-awarded Debater & Speaker",
    event: "Northern Luzon Circuit",
    location: "Philippines",
    year: "2015 - 2018"
  }
];

const organizations = [
  {
    role: "Overall Concert Team",
    org: "UP Fair",
    year: "2025"
  },
  {
    role: "Logistics Head",
    org: "UP Fair: Kalye Tunes",
    year: "2024"
  },
  {
    role: "Internal Welfare Committee Head",
    org: "Engineering Men for Country and College",
    year: "2023 - 2024"
  }
];

export function AwardsSection() {
  const { ref, isVisible } = useIntersectionObserver();

  return (
    <section id="awards" className="relative py-24 md:py-32">
      <div ref={ref} className="mx-auto max-w-6xl px-6">
        <div className={`mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="text-sm font-medium text-primary mb-2 tracking-wider uppercase">Extracurriculars</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">Awards & Organizations</h2>
          <div className="w-16 h-1 rounded-full bg-gradient-to-r from-primary to-primary/40" />
        </div>

        <div className="grid gap-12 md:grid-cols-2 items-start">
          {/* Awards */}
          <div className={`space-y-6 transition-all duration-700 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
              <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 002.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 012.916.52 6.003 6.003 0 01-5.395 4.972m0 0a6.726 6.726 0 01-2.749 1.35m0 0a6.772 6.772 0 01-3.044 0" />
              </svg>
              Honors & Awards
            </h3>
            {awards.map((award, i) => (
              <Card key={i} className="glass border-primary/10 hover:border-primary/30 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start gap-4">
                    <div>
                      <h4 className="font-bold text-lg text-foreground mb-1">{award.title}</h4>
                      <p className="text-primary font-medium text-sm mb-2">{award.event}</p>
                      <p className="text-sm text-muted-foreground">{award.location}</p>
                    </div>
                    <Badge variant="outline" className="shrink-0">{award.year}</Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Organizations */}
          <div className={`space-y-6 transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
              <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
              </svg>
              Organizations
            </h3>
            {organizations.map((org, i) => (
              <Card key={i} className="glass border-primary/10 hover:border-primary/30 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start gap-4">
                    <div>
                      <h4 className="font-bold text-lg text-foreground mb-1">{org.role}</h4>
                      <p className="text-primary font-medium text-sm">{org.org}</p>
                    </div>
                    <Badge variant="outline" className="shrink-0 bg-primary/5">{org.year}</Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
