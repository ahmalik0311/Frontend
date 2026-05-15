"use client"

import * as React from "react"
import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react"

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-black uppercase italic tracking-tighter mb-4">
              Get In <span className="text-primary">Touch</span>
            </h1>
            <p className="text-muted-foreground uppercase font-bold tracking-widest text-xs">
              We&apos;re here to help you find your perfect pair
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-16">
            {/* Contact Form */}
            <div className="flex-[1.5]">
              <div className="bg-card border border-border rounded-[40px] p-8 md:p-12 shadow-2xl shadow-black/20">
                <form className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <Label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Full Name</Label>
                      <Input className="h-14 bg-muted/5 border-border rounded-2xl focus:border-primary" placeholder="John Doe" />
                    </div>
                    <div className="space-y-2">
                      <Label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Email Address</Label>
                      <Input className="h-14 bg-muted/5 border-border rounded-2xl focus:border-primary" placeholder="john@example.com" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Subject</Label>
                    <Input className="h-14 bg-muted/5 border-border rounded-2xl focus:border-primary" placeholder="Inquiry about product..." />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Message</Label>
                    <Textarea className="min-h-[200px] bg-muted/5 border-border rounded-2xl focus:border-primary p-6" placeholder="Tell us how we can help..." />
                  </div>
                  <Button className="w-full h-16 bg-primary text-white font-black uppercase italic text-lg rounded-2xl shadow-xl shadow-primary/20">
                    Send Message <Send className="ml-2 h-5 w-5" />
                  </Button>
                </form>
              </div>
            </div>

            {/* Info Cards */}
            <div className="flex-1 space-y-8">
              {[
                {
                  title: "Visit Us",
                  content: "123 Shoe Street, Fashion District, NY 10001",
                  icon: <MapPin className="h-6 w-6" />,
                  label: "Office"
                },
                {
                  title: "Call Us",
                  content: "+1 (555) 123-4567",
                  icon: <Phone className="h-6 w-6" />,
                  label: "Support"
                },
                {
                  title: "Email Us",
                  content: "support@shoebox.com",
                  icon: <Mail className="h-6 w-6" />,
                  label: "Inquiries"
                },
                {
                  title: "Open Hours",
                  content: "Mon - Fri: 9am - 6pm EST",
                  icon: <Clock className="h-6 w-6" />,
                  label: "Schedule"
                }
              ].map((info, idx) => (
                <div key={idx} className="bg-muted/5 border border-border p-8 rounded-3xl group hover:border-primary transition-all duration-300">
                  <div className="flex items-start gap-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                      {info.icon}
                    </div>
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-widest text-primary mb-1">{info.label}</p>
                      <h3 className="text-xl font-black uppercase italic mb-2">{info.title}</h3>
                      <p className="text-muted-foreground font-bold tracking-tight">{info.content}</p>
                    </div>
                  </div>
                </div>
              ))}

              <div className="h-64 rounded-3xl overflow-hidden grayscale border border-border relative">
                <div className="absolute inset-0 bg-primary/10 flex items-center justify-center">
                   <p className="text-xs font-black uppercase tracking-widest text-muted-foreground">Map Integration Placeholder</p>
                </div>
                <Image src="https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&q=80&w=800" alt="Map" fill className="object-cover opacity-30" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
