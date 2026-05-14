"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function PromoBanner() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="relative h-[500px] rounded-[3rem] overflow-hidden bg-[#1E1E1E] border border-white/5">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/shoe-1.png"
              alt="Premium Promo"
              fill
              className="object-cover opacity-30 scale-125 blur-sm"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#111111] via-[#111111]/80 to-transparent" />
          </div>

          <div className="relative z-10 h-full flex flex-col justify-center p-12 md:p-20 max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-secondary font-bold tracking-[0.3em] uppercase mb-4 block">Limited Edition</span>
              <h2 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight">
                UNMATCHED <br /><span className="text-primary italic">CRAFTSMANSHIP</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-10 max-w-md">
                Every stitch, every curve, and every material is chosen with obsession. Experience the pinnacle of footwear engineering.
              </p>
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-bold h-14 px-10 rounded-full">
                Explore the Series <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
          </div>

          {/* Floating Shoe Image */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-full hidden lg:block">
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-full h-full p-20"
            >
              <Image
                src="/shoe-1.png"
                alt="Promo Shoe"
                fill
                className="object-contain drop-shadow-[0_35px_35px_rgba(200,169,107,0.3)]"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
