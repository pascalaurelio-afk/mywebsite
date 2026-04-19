"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

const experiences = [
  {
    title: "Procurement Associate",
    company: "Isla LPG Corporation",
    period: "October 2025 – Present",
    current: true,
    description: "Managing end-to-end procurement operations, overseeing vendor relationships, inventory systems, and ERP-driven workflows.",
    responsibilities: [
      {
        category: "Procurement & Sourcing",
        items: [
          "Research and identify potential suppliers (vendors) for necessary goods and services.",
          "Negotiate favorable pricing, terms, and delivery schedules with vendors.",
          "Assist in the preparation of bid documents (RFPs, RFQs) and contract agreements.",
          "Ensure compliance with company purchasing policies and procedures."
        ],
      }
    ]
  },
  {
    title: "Project Engineer",
    company: "BUILDTOSUIT Builder & Construction Supplies Corporation",
    period: "May 2025 – June 2025",
    current: false,
    description: "Supervised daily construction operations, ensuring strict compliance with technical drawings, safety regulations, and project specifications.",
    responsibilities: [
      {
        category: "Site Supervision & Trade Coordination",
        items: [
          "Led multi-disciplinary teams and subcontractors to ensure synchronized workflow.",
          "Provided solutions to on-site issues and clarified technical drawings.",
          "Estimated and planned costs according to technical drawings and specifications."
        ],
      },
      {
        category: "Project Scheduling & Cost Control",
        items: [
          "Tracked project timelines, reported delays, and updated schedules.",
          "Developed and managed project timelines and milestone tracking.",
          "Focused on protecting project margins through accurate quantity take-offs and budget monitoring."
        ],
      }
    ]
  },
  {
    title: "Production Assistant",
    company: "Diliman Gender Office, University of the Philippines",
    period: "June 2025",
    current: false,
    description: "Coordinated planning and procurement of campaign materials to ensure on-time production aligned with event goals.",
    responsibilities: [
      {
        category: "Event Production & Logistics",
        items: [
          "Managed production and logistics for stage setups, installations, and equipment during event ingress and egress.",
          "Assisted with technical setup of lighting, sound, and projection systems.",
          "Performed basic troubleshooting for smooth execution."
        ],
      }
    ]
  },
  {
    title: "Logistics Head",
    company: "UP Fair Concert",
    period: "November 2024 – April 2025",
    current: false,
    description: "Led a 30-member logistics team, delegating tasks to ensure seamless concert operations for a massive university event.",
    responsibilities: [
      {
        category: "Event Management",
        items: [
          "Managed venue coordination, permits, contracts, budgets, schedules, and contingency plans.",
          "Oversaw vendor sourcing and coordination for staging, lighting, sound, catering, and other event needs.",
          "Directed load-in/load-out processes, backstage flow, and crew supervision."
        ],
      }
    ]
  },
  {
    title: "Intern",
    company: "Lycopodium Limited",
    period: "June 2024 – August 2024",
    current: false,
    description: "Participated in Lycopodium's Graduate Development Program, gaining early exposure to professional engineering standards and workflows.",
    responsibilities: [
      {
        category: "Engineering Training",
        items: [
          "Participated in project coordination workshops and technical seminars focused on engineering workflows.",
          "Contributed to a systems-level understanding of spatial data in industrial settings.",
          "Attended technical seminars on plant design, mineral processing, and engineering workflows."
        ],
      }
    ]
  },
  {
    title: "Operations Manager",
    company: "Simply Prints",
    period: "December 2016 – July 2025",
    current: false,
    description: "Handled end-to-end operations for a printing business, from client relations and production to quality control.",
    responsibilities: [
      {
        category: "Business Operations",
        items: [
          "Oversaw finances, budgeting, and inventory management to maintain profitability.",
          "Coordinated with suppliers to source printing materials.",
          "Ensured strict quality control across all printed products."
        ],
      }
    ]
  }
];

export function ExperienceSection() {
  const { ref, isVisible } = useIntersectionObserver();

  return (
    <section id="experience" className="relative py-24 md:py-32">
      <div className="absolute inset-0 gradient-bg opacity-50" />
      <div ref={ref} className="relative mx-auto max-w-6xl px-6">
        <div className={`mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="text-sm font-medium text-primary mb-2 tracking-wider uppercase">Career</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">Professional Experience</h2>
          <div className="w-16 h-1 rounded-full bg-gradient-to-r from-primary to-primary/40" />
        </div>

        <div className="relative">
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-primary/20 to-transparent" />
          <div className="relative space-y-12 pl-8 md:pl-20">
            {experiences.map((exp, index) => (
              <div key={`${exp.company}-${index}`} className="relative">
                <div className="absolute left-[-2rem] md:left-[-3rem] top-8 -translate-x-1/2">
                  <div className="relative">
                    <div className={`w-4 h-4 rounded-full shadow-lg ${exp.current ? 'bg-primary shadow-primary/30' : 'bg-muted-foreground/50 shadow-muted-foreground/30'}`} />
                    {exp.current && <div className="absolute inset-0 w-4 h-4 rounded-full bg-primary animate-ping opacity-20" />}
                  </div>
                </div>

                <Card className={`glass border-primary/10 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`} style={{ transitionDelay: `${index * 150}ms` }}>
                  <CardContent className="p-8">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                      <div>
                        <h3 className="text-xl font-bold text-foreground mb-1">{exp.title}</h3>
                        <p className="text-primary font-medium">{exp.company}</p>
                      </div>
                      <div className="flex flex-wrap gap-2 text-right justify-start md:justify-end">
                        {exp.current && (
                          <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">Current Role</Badge>
                        )}
                        <Badge variant="outline" className="border-border/50 text-muted-foreground">{exp.period}</Badge>
                      </div>
                    </div>

                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {exp.description}
                    </p>

                    <Accordion type="single" collapsible className="w-full">
                      {exp.responsibilities.map((group, i) => (
                        <AccordionItem key={group.category} value={`item-${index}-${i}`} className="border-border/30">
                          <AccordionTrigger className="text-sm font-semibold hover:text-primary transition-colors py-4">
                            {group.category}
                          </AccordionTrigger>
                          <AccordionContent>
                            <ul className="space-y-3 pb-2">
                              {group.items.map((item, itemIndex) => (
                                <li key={itemIndex} className="flex gap-3 text-sm text-muted-foreground">
                                  <svg className="w-4 h-4 text-primary mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                  </svg>
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
