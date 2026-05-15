"use client"

import * as React from "react"
import Image from "next/image"
import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { motion } from "framer-motion"

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1 space-y-8">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="text-6xl md:text-8xl font-black uppercase italic tracking-tighter leading-none mb-6">
                  More Than <br />
                  <span className="text-primary">Just Shoes.</span>
                </h1>
                <p className="text-muted-foreground text-lg max-w-xl leading-relaxed">
                  Founded in 2024, SHOEBOX was born from a simple mission: to bridge the gap between performance athletics and high-end street culture.
                </p>
              </motion.div>
              
              <div className="grid grid-cols-2 gap-8 pt-8">
                <div>
                  <h3 className="text-4xl font-black text-primary italic">50K+</h3>
                  <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Happy Customers</p>
                </div>
                <div>
                  <h3 className="text-4xl font-black text-primary italic">100%</h3>
                  <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Authenticity</p>
                </div>
              </div>
            </div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="flex-1 relative"
            >
              <div className="aspect-[4/5] relative rounded-[40px] overflow-hidden border border-border">
                <Image 
                  src="https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&q=80&w=1200" 
                  alt="Craftsmanship" 
                  fill 
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-60" />
              </div>
              <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-primary/20 rounded-full blur-[100px] -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-muted/5 border-y border-border">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter mb-4">
              Our Core <span className="text-primary">Values</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                title: "Innovation",
                desc: "We constantly push the boundaries of what's possible in footwear technology and design.",
                icon: "🚀"
              },
              {
                title: "Quality",
                desc: "Every pair undergoes rigorous quality control to ensure you get only the best.",
                icon: "💎"
              },
              {
                title: "Community",
                desc: "Building a global culture of enthusiasts who share our passion for excellence.",
                icon: "🤝"
              }
            ].map((value, idx) => (
              <div key={idx} className="bg-card p-10 rounded-3xl border border-border hover:border-primary transition-colors group">
                <div className="text-5xl mb-6 group-hover:scale-110 transition-transform">{value.icon}</div>
                <h3 className="text-2xl font-black uppercase italic mb-4">{value.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12 text-center">
            <h2 className="text-4xl md:text-5xl font-black uppercase italic tracking-tight">The Vision</h2>
            <div className="space-y-6 text-muted-foreground text-lg leading-relaxed italic">
              <p>
                "At SHOEBOX, we don't just sell footwear; we provide the foundation for your journey. Whether you're hitting the pavement for a marathon or stepping onto the red carpet, we believe your choice of shoes defines your path."
              </p>
              <div className="w-20 h-1 bg-primary mx-auto" />
              <p className="font-black text-foreground uppercase tracking-widest text-sm">Abdul Hameed — Founder & CEO</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
