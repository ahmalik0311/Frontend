"use client"

import Image from "next/image"
import { motion } from "framer-motion"

export function ShowBanner() {
  return (
    <section className="py-24 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative h-[600px] rounded-[3rem] overflow-hidden group border border-white/5"
          >
            <Image
              src="/cat-running.png"
              alt="Performance Banner"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500" />
            <div className="absolute bottom-12 left-12">
              <h3 className="text-5xl tracking-[1px] font-black text-white uppercase italic  mb-4">Engineered <br />to Win</h3>
              <p className="text-white/80 max-w-xs">Built with our proprietary carbon fiber plate technology for maximum energy return.</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-[600px] rounded-[3rem] overflow-hidden group border border-white/5"
          >
            <Image
              src="/hero-shoe.png"
              alt="Style Banner"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500" />
            <div className="absolute bottom-12 left-12">
              <h3 className="text-5xl tracking-[1px] font-black text-white uppercase italic  mb-4">Aesthetic <br />Pinnacle</h3>
              <p className="text-white/80 max-w-xs">The intersection of futuristic street style and elite athletic performance.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
