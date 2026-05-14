"use client"

import Image from "next/image"
import { Mail, CheckCircle2, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { motion } from "framer-motion"

export function Newsletter() {
  return (
    <section className="py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto relative"
        >
          {/* Subtle Background Glow */}
          <div className="absolute -inset-1 bg-gradient-to-r from-[#FF6B35]/10 to-transparent blur-3xl rounded-[3rem]" />

          <div className="relative bg-card border border-border/50 rounded-[3rem] p-8 md:p-16 overflow-hidden">
            <div className="flex flex-col lg:flex-row items-center gap-16">

              {/* Text Content */}
              <div className="flex-1 text-center lg:text-left z-10">
                {/* Top Icon */}
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#FF6B35] mb-8 shadow-[0_0_20px_rgba(255,107,53,0.3)] lg:mx-0 mx-auto">
                  <Mail className="h-6 w-6 text-white" />
                </div>

                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-[#FF6B35] mb-4">
                  Stay in the Loop
                </p>
                <h2 className="text-4xl md:text-5xl font-black text-foreground mb-6 tracking-tight">
                  Get Exclusive <span className="text-primary italic">Deals</span>
                </h2>
                <p className="text-muted-foreground text-sm md:text-base max-w-xl mb-10 leading-relaxed">
                  Subscribe to our newsletter and be the first to know about flash sales, new arrivals, and members-only discounts.
                </p>

                {/* Benefit Pills */}
                <div className="flex flex-wrap justify-center lg:justify-start gap-3 mb-12">
                  {[
                    "20% off first order",
                    "Early access to sales",
                    "New arrival alerts"
                  ].map((benefit) => (
                    <div
                      key={benefit}
                      className="flex items-center gap-2 bg-muted/30 border border-border/50 px-4 py-2 rounded-full"
                    >
                      <CheckCircle2 className="h-3 w-3 text-[#FF6B35]" />
                      <span className="text-[10px] font-bold text-foreground/70 uppercase ">{benefit}</span>
                    </div>
                  ))}
                </div>

                {/* Subscription Form */}
                <div className="flex flex-col sm:flex-row gap-3 max-w-md lg:mx-0 mx-auto mb-6">
                  <Input
                    placeholder="your@email.com"
                    className="h-14 bg-muted/20 border-border focus:bg-muted/40 rounded-2xl px-6 text-foreground placeholder:text-muted-foreground"
                  />
                  <Button className="h-14 px-8 bg-[#FF6B35] hover:bg-[#FF6B35]/90 text-white font-black rounded-2xl group shrink-0">
                    JOIN NOW <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>

                <p className="text-[10px] text-muted-foreground uppercase tracking-widest">
                  No spam, ever. Unsubscribe anytime.
                </p>
              </div>

              {/* Shoe Image Section */}
              <div className="flex-1 relative w-full h-[300px] lg:h-[500px]">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8, rotate: 10 }}
                  whileInView={{ opacity: 1, scale: 1, rotate: -5 }}
                  transition={{ duration: 0.8, type: "spring" }}
                  className="relative w-full h-full z-10"
                >
                  <Image
                    src="/hero-shoe.png"
                    alt="Newsletter Drop"
                    fill
                    className="object-contain drop-shadow-[0_50px_60px_rgba(0,0,0,0.5)]"
                  />
                </motion.div>

                {/* Decorative background element for shoe */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#FF6B35]/10 rounded-full blur-[100px] -z-0" />
              </div>

            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
