"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

export function ContactSection() {
  const { ref, isVisible } = useIntersectionObserver();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    const formData = new FormData(e.currentTarget);
    const subject = encodeURIComponent(formData.get("subject") as string);
    const body = encodeURIComponent(
      `From: ${formData.get("name")} (${formData.get("email")})\n\n${formData.get("message")}`
    );
    
    setTimeout(() => {
      window.location.href = `mailto:pascalaurelio@gmail.com?subject=${subject}&body=${body}`;
      setIsSubmitting(false);
    }, 500);
  };

  return (
    <section id="contact" className="relative py-24 md:py-32">
      <div ref={ref} className="mx-auto max-w-6xl px-6">
        <div className={`mb-16 text-center transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="text-sm font-medium text-primary mb-2 tracking-wider uppercase">Connect</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">Get In Touch</h2>
          <div className="w-16 h-1 rounded-full bg-gradient-to-r from-primary to-primary/40 mx-auto" />
        </div>

        <div className="grid md:grid-cols-5 gap-8 items-start max-w-5xl mx-auto">
          {/* Contact Info */}
          <div className={`md:col-span-2 space-y-4 transition-all duration-700 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <Card className="glass border-primary/10 hover:border-primary/20 transition-colors">
              <CardContent className="p-6">
                <div className="mb-4 inline-flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 text-primary">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                </div>
                <h3 className="font-semibold mb-1 text-foreground">Email</h3>
                <div className="flex flex-col gap-1">
                  <a href="mailto:pascalaurelio@gmail.com" className="text-sm font-medium text-primary hover:underline">
                    pascalaurelio@gmail.com
                  </a>
                  <a href="mailto:paurelio1@up.edu.ph" className="text-sm font-medium text-primary hover:underline">
                    paurelio1@up.edu.ph
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card className="glass border-primary/10 hover:border-primary/20 transition-colors">
              <CardContent className="p-6">
                <div className="mb-4 inline-flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 text-primary">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.896-1.596-5.48-4.18-7.076-7.076l1.293-.97c.362-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                </div>
                <h3 className="font-semibold mb-1 text-foreground">Phone</h3>
                <p className="text-sm font-medium text-muted-foreground">0998 978 8103</p>
              </CardContent>
            </Card>

            <Card className="glass border-primary/10 hover:border-primary/20 transition-colors">
              <CardContent className="p-6">
                <div className="mb-4 inline-flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 text-primary">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                </div>
                <h3 className="font-semibold mb-1 text-foreground">Location</h3>
                <p className="text-sm font-medium text-muted-foreground">Parañaque City / Quezon City<br/>Philippines</p>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className={`md:col-span-3 glass border-primary/10 transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-foreground">Name</label>
                    <Input id="name" name="name" required placeholder="John Doe" className="bg-background/50 border-border/50 focus-visible:ring-primary/50" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-foreground">Email</label>
                    <Input id="email" name="email" type="email" required placeholder="john@example.com" className="bg-background/50 border-border/50 focus-visible:ring-primary/50" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium text-foreground">Subject</label>
                  <Input id="subject" name="subject" required placeholder="Opportunity / Inquiry" className="bg-background/50 border-border/50 focus-visible:ring-primary/50" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-foreground">Message</label>
                  <Textarea 
                    id="message" 
                    name="message" 
                    required 
                    placeholder="How can I help you?" 
                    rows={5}
                    className="bg-background/50 border-border/50 focus-visible:ring-primary/50 resize-none"
                  />
                </div>
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/20 transition-all"
                >
                  {isSubmitting ? (
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 rounded-full border-2 border-primary-foreground/30 border-t-primary-foreground animate-spin" />
                      <span>Opening Mail Client...</span>
                    </div>
                  ) : (
                    "Send Message"
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
