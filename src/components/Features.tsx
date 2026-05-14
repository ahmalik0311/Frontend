"use client"

import { Truck, RotateCcw, ShieldCheck, Headphones } from "lucide-react"
import { motion } from "framer-motion"

const features = [
  {
    icon: Truck,
    title: "Free Shipping",
    description: "Enjoy free shipping",
  },
  {
    icon: RotateCcw,
    title: "Easy Return",
    description: "7 Days Return Policy",
  },
  {
    icon: ShieldCheck,
    title: "Secure Payments",
    description: "Multiple Payment options",
  },
  {
    icon: Headphones,
    title: "Customer Support",
    description: "Available 24/7",
  },
]

export function Features() {
  return (
    <section className="py-20 bg-background border-t border-border">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center group"
            >
              <div className="mb-6 p-4 rounded-2xl  bg-primary  group-hover:bg-primary/10 transition-colors duration-300">
                <feature.icon className="h-8 w-8 text-foreground group-hover:text-primary transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-black text-foreground uppercase tracking-[2px] mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
